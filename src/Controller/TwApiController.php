<?php

namespace App\Controller;

use App\Utils\Ajax;
use App\Entity\TwApi;
use App\Form\TwApiType;
use App\Manager\TwApiCallManager;
use App\Service\TwApiCallService;
use App\Service\TwApiHtmlService;
use App\Repository\TwApiRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TwApiController extends AbstractController
{
    /**
     * Twitter API settings manager
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @param TwApiRepository $repository
     * @return Response
     */
    #[Route('/tw/settings', name: 'app_twitter_api_settings', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function keys(
        Request $request,
        PaginatorInterface $paginator,
        TwApiRepository $repository
    ): Response {
        // Get connected user twitter API keys
        $rows = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/twitter/api/keys.html.twig', [
            'rows' => $rows,
        ]);
    }

    /**
     * Create Twitter API settings
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param TwApiCallManager $twApiCallManager
     * @return Response
     */
    #[Route('/tw/settings/add', name: 'app_twitter_api_settings_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function new(
        Request $request,
        EntityManagerInterface $entityManager,
        TwApiCallManager $twApiCallManager
    ): Response {
        $twApi = new TwApi();
        $form = $this->createForm(TwApiType::class, $twApi, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $twApi = $form->getData();
            $twApi->setUser($this->getUser()); // Connected user

            $entityManager->persist($twApi);
            $entityManager->flush();

            // Add new call limit counts
            $twApiCallManager->createTwApiCall($twApi);

            $this->addFlash(
                'success',
                'Settings created with success !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        return $this->render('theme/admin/page/twitter/api/keys_new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit Twitter API settings
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param TwApi $twApi
     * @return Response
     */
    #[Route('/tw/settings/{id}/edit', name: 'app_twitter_api_settings_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function edit(
        Request $request,
        EntityManagerInterface $entityManager,
        TwApi $twApi
    ): Response {
        $form = $this->createForm(TwApiType::class, $twApi, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twApi = $form->getData();

                $entityManager->persist($twApi);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Settings updated with success !'
                );

                return $this->redirectToRoute('app_twitter_api_settings');
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/twitter/api/keys_edit.html.twig', [
            'twApi' => $twApi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete Twitter API settings
     *
     * @param EntityManagerInterface $entityManager
     * @param TwApi $twApi
     * @return Response
     */
    #[Route('/tw/settings/{id}/delete', name: 'app_twitter_api_settings_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function delete(
        EntityManagerInterface $entityManager,
        TwApi $twApi
    ): Response {
        $entityManager->remove($twApi);
        $entityManager->flush();

        $this->addFlash(
            'success',
            'Settings deleted with success !'
        );

        return $this->redirectToRoute('app_twitter_api_settings');
    }

    #[Route('/tw/settings/{id}/active/ajax', name: 'app_twitter_api_settings_active_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUpdateIsActive(
        Request $request,
        EntityManagerInterface $entityManager,
        TwApi $twApi
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json([
                'code' => 403,
                'message' => 'Unauthorized',
            ], 403);
        }

        // Deactivate all activated settings
        $entityManager
            ->getRepository(TwApi::class)
            ->deactivateAllByUser($this->getUser())
        ;

        $ajax = new Ajax($request);

        // Activate
        $twApi->setIsActive(
            $ajax->getBool('isActive')
        );

        $entityManager->persist($twApi);
        $entityManager->flush();

        // Ajax response
        return $this->json([
            'success' => true,
            'message' => 'Updated with success !',
        ]);
    }

    /**
     * Get twitter api keys select html
     * Protected by CSRF
     * Ajax only
     *
     * @param Request $request
     * @param TwApiHtmlService $service
     * @return JsonResponse
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
            return $this->json([
                'code' => 403,
                'message' => 'Unauthorized',
            ], 403);
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
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param TwApiCallService $service
     * @return JsonResponse
     */
    #[Route('/tw/following/update/ajax', name: 'app_twitter_api_update_following_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxUpdateFollowing(
        Request $request,
        EntityManagerInterface $entityManager,
        TwApiCallService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json([
                'code' => 403,
                'message' => 'Unauthorized',
            ], 403);
        }

        $twApi = $entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'following')
        ;

        if ($twApi) {
            $result = $service->updateFollowing(
                $this->getUser(),
                $twApi,
                $this->getParameter('app.path.uploads')
            );

            // Set js redirect path
            $result['path'] = $this->generateUrl('app_following');

            // Ajax response
            return $this->json($result);
        }

        // Ajax response
        return $this->json([
            'success' => false,
            'message' => 'Something went wrong !',
        ]);
    }

    /**
     * Upload folowers by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param TwApiCallService $service
     * @return JsonResponse
     */
    #[Route('/tw/followers/update/ajax', name: 'app_twitter_api_update_followers_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxUpdateFollowers(
        Request $request,
        EntityManagerInterface $entityManager,
        TwApiCallService $service
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json([
                'code' => 403,
                'message' => 'Unauthorized',
            ], 403);
        }

        $twApi = $entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'followers')
        ;

        if ($twApi) {
            $result = $service->updateFollowers(
                $this->getUser(),
                $twApi,
                $this->getParameter('app.path.uploads')
            );

            // Set js redirect path
            $result['path'] = $this->generateUrl('app_followers');

            // Ajax response
            return $this->json($result);
        }

        // Ajax response
        return $this->json([
            'success' => false,
            'message' => 'Something went wrong !',
        ]);
    }

    /**
     * Unfollow by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     *
     * @param Request $request
     * @param TwApiCallService $service
     * @param TwApi $twApi
     * @return JsonResponse
     */
    #[Route('/tw/ajax/unfollow/{id}', name: 'app_ajax_unfollow', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUnfollow(
        Request $request,
        TwApiCallService $service,
        TwApi $twApi
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json([
                'code' => 403,
                'message' => 'Unauthorized',
            ], 403);
        }



        // Ajax response
        return $this->json([
            'success' => false,
            'message' => 'Something went wrong !',
        ]);
    }
}
