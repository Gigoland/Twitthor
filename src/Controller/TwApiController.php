<?php

namespace App\Controller;

use App\Entity\TwApi;
use App\Entity\Follow;
use App\Form\TwApiType;
use App\Manager\TwApiCallManager;
use App\Service\TwApiCallService;
use App\Service\TwApiHtmlService;
use App\Utils\AjaxUtil;
use App\Utils\JsonResponseUtil;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TwApiController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Twitter API settings manager
     */
    #[Route('/tw/settings', name: 'app_twitter_api_settings', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function settings(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user twitter API keys
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(TwApi::class)->findBy([
                'user' => $this->getUser(),
            ], [
                'isActive' => 'DESC',
                'id' => 'DESC',
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/twitter/api/settings.html.twig', [
            'rows' => $rows,
        ]);
    }

    /**
     * Create Twitter API settings
     * Protected by CSRF
     */
    #[Route('/tw/settings/add', name: 'app_twitter_api_settings_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function newSettings(
        Request $request,
        TwApiCallManager $twApiCallManager
    ): Response {
        $twApi = new TwApi();

        $form = $this->createForm(TwApiType::class, $twApi, [
            'method' => 'POST',
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twApi = $form->getData();
                $twApi->setUser($this->getUser()); // Connected user

                $this->entityManager->persist($twApi);
                $this->entityManager->flush();

                // Add new call limit counts
                $twApiCallManager->createTwApiCall($twApi);

                $this->addFlash(
                    'success',
                    'Settings created with success !'
                );

                return $this->redirectToRoute('app_twitter_api_settings');
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
        }

        return $this->render('theme/admin/page/twitter/api/settings_new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit Twitter API settings
     * Protected by CSRF
     */
    #[Route('/tw/settings/{id}/edit', name: 'app_twitter_api_settings_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function editSettings(
        Request $request,
        TwApi $twApi
    ): Response {
        $form = $this->createForm(TwApiType::class, $twApi, [
            'method' => 'POST',
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twApi = $form->getData();

                $this->entityManager->persist($twApi);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'Settings updated with success !'
                );

                return $this->redirectToRoute('app_twitter_api_settings');
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
        }

        return $this->render('theme/admin/page/twitter/api/settings_edit.html.twig', [
            'twApi' => $twApi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete Twitter API settings
     */
    #[Route('/tw/settings/{id}/delete', name: 'app_twitter_api_settings_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function deleteSettings(
        TwApi $twApi
    ): Response {
        $this->entityManager->remove($twApi);
        $this->entityManager->flush();

        $this->addFlash(
            'success',
            'Settings deleted with success !'
        );

        return $this->redirectToRoute('app_twitter_api_settings');
    }

    /**
     * Switch isActive
     */
    #[Route('/tw/settings/{id}/active/ajax', name: 'app_twitter_api_settings_isactive_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxSwitchIsActive(
        Request $request,
        TwApi $twApi
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Deactivate all activated settings
        $this->entityManager
            ->getRepository(TwApi::class)
            ->deactivateAllByUser($this->getUser())
        ;

        // Set
        $ajaxUtil = new AjaxUtil($request);

        // Activate
        $twApi->setIsActive(
            $ajaxUtil->getBool('isActive')
        );

        $this->entityManager->persist($twApi);
        $this->entityManager->flush();

        // Ajax response
        return $this->json(
            JsonResponseUtil::getSuccess('Success', 'Updated with success !')
        );
    }

    /**
     * Get twitter api keys select html
     * Protected by CSRF
     * Ajax only
     */
    #[Route('/tw/settings/html/ajax', name: 'app_twitter_api_settings_html_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxGetSettingsHtml(
        Request $request,
        TwApiHtmlService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        $result = $service->getActiveSettingsByUser(
            $this->getUser(),
            $request->query->get('query')
        );

        // Ajax response
        return $this->json($result);
    }

    /**
     * Upload following by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     */
    #[Route('/tw/following/update/ajax', name: 'app_twitter_api_update_following_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxUpdateFollowing(
        Request $request,
        TwApiCallService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Get api params from activate setting
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'following')
        ;

        // Not have api settings
        if (!$twApi) {
            // Ajax response
            return $this->json(
                JsonResponseUtil::getError('Error', 'Incomplete settings passed to Twitthor.')
            );
        }

        // Do undate following
        $result = $service->updateFollowing(
            $this->getUser(),
            $twApi,
            $this->getParameter('app.path.uploads')
        );

        // Set js redirect path
        if ($result['success']) {
            $result['path'] = $this->generateUrl('app_following');
        }

        // Ajax response
        return $this->json($result);
    }

    /**
     * Upload folowers by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     */
    #[Route('/tw/followers/update/ajax', name: 'app_twitter_api_update_followers_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxUpdateFollowers(
        Request $request,
        TwApiCallService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Get api settings
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'followers')
        ;

        // Not have api settings
        if (!$twApi) {
            // Ajax response
            return $this->json(
                JsonResponseUtil::getError('Error', 'Incomplete settings passed to Twitthor.')
            );
        }

        // Do uplade followers
        $result = $service->updateFollowers(
            $this->getUser(),
            $twApi,
            $this->getParameter('app.path.uploads')
        );

        // Set js redirect path
        if ($result['success']) {
            $result['path'] = $this->generateUrl('app_followers');
        }

        // Ajax response
        return $this->json($result);
    }

    /**
     * Upload Platonics by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     */
    #[Route('/tw/platonics/update/ajax', name: 'app_twitter_api_update_platonics_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxUpdatePlatonics(
        Request $request,
        TwApiCallService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Get api settings
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'platonics')
        ;

        // Not have api settings
        if (!$twApi) {
            // Ajax response
            return $this->json(
                JsonResponseUtil::getError('Error', 'Incomplete settings passed to Twitthor.')
            );
        }

        // Set
        $ajaxUtil = new AjaxUtil($request);

        // Do uplade platonics
        $result = $service->updatePlatonics(
            $this->getUser(),
            $twApi,
            $ajaxUtil->get('update'),
            $this->getParameter('app.path.uploads')
        );

        // Set js redirect path
        if ($result['success']) {
            $result['path'] = $this->generateUrl('app_platonics');
        }

        // Ajax response
        return $this->json($result);
    }

    /**
     * Unfollow by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     */
    #[Route('/tw/unfollow/{id}/ajax', name: 'app_twitter_api_unfollow_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function ajaxUnfollow(
        Request $request,
        TwApiCallService $service,
        Follow $follow
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Get api settings
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'unfollow')
        ;

        // Not have api setting
        if (!$twApi) {
            // Ajax response
            return $this->json(
                JsonResponseUtil::getError('Error', 'Incomplete settings passed to Twitthor.')
            );
        }

        // Do unfollow
        $result = $service->unfollow(
            $this->getUser(),
            $twApi,
            $follow
        );

        // Ajax response
        return $this->json($result);
    }
}
