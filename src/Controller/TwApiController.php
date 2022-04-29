<?php

namespace App\Controller;

use App\Entity\TwApi;
use App\Entity\TwApiCall;
use App\Form\TwApiType;
use App\Form\AjaxTwApiType;
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
     * @param TwApiRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/tw/settings', name: 'app_twitter_api_settings', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function keys(
        TwApiRepository $repository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Get connected user twitter API keys
        $apiKeys = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/twitter/api/keys.html.twig', [
            'apiKeys' => $apiKeys,
        ]);
    }

    /**
     * Create Twitter API settings
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/tw/settings/add', name: 'app_twitter_api_settings_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function new(
        Request $request,
        EntityManagerInterface $manager,
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

            $manager->persist($twApi);
            $manager->flush();

            // Add new call limit counts
            $twApiCallManager->newTwApiCall($twApi);

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
     * @param TwApi $twApi
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/tw/settings/edit/{id}', name: 'app_twitter_api_settings_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function edit(
        TwApi $twApi,
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $form = $this->createForm(TwApiType::class, $twApi, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $twApi = $form->getData();
            $twApi->setUser($this->getUser()); // Connected user

            $manager->persist($twApi);
            $manager->flush();

            $this->addFlash(
                'success',
                'Settings updated with success !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        return $this->render('theme/admin/page/twitter/api/keys_edit.html.twig', [
            'twApi' => $twApi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete Twitter API settings
     *
     * @param TwApi $twApi
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/tw/settings/delete/{id}', name: 'app_twitter_api_settings_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function delete(
        TwApi $twApi,
        EntityManagerInterface $manager
    ): Response {
        $manager->remove($twApi);
        $manager->flush();

        $this->addFlash(
            'success',
            'Settings deleted with success !'
        );

        return $this->redirectToRoute('app_twitter_api_settings');
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
    #[Route('/tw/ajax/keys', name: 'app_ajax_twitter_api_keys', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function ajaxGetMyKeys(
        Request $request,
        TwApiHtmlService $service
    ): JsonResponse {
        return $service->getSelectKeysByUser(
            $this->getUser(),
            $request->query->get('query')
        );
    }

    /**
     * Upload following by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     *
     * @param TwApi $twApi
     * @param Request $request
     * @param TwApiCallService $service
     * @return JsonResponse
     */
    #[Route('/tw/ajax/following/update/{id}', name: 'app_ajax_update_following', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUpdateFollowing(
        TwApi $twApi,
        Request $request,
        TwApiCallService $service
    ): JsonResponse {
        $form = $this->createForm(AjaxTwApiType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $service->updateFollowing(
                $this->getUser(),
                $twApi,
                $form->getData()['next_token'],
                $this->getParameter('app.path.uploads'),
                $this->generateUrl('app_following')
            );
        }
    }

    /**
     * Upload folowers by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     *
     * @param TwApi $twApi
     * @param Request $request
     * @param TwApiCallService $service
     * @return JsonResponse
     */
    #[Route('/tw/ajax/followers/update/{id}', name: 'app_ajax_update_followers', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUpdateFollowers(
        TwApi $twApi,
        Request $request,
        TwApiCallService $service
    ): JsonResponse {
        $form = $this->createForm(AjaxTwApiType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            return $service->updateFollowers(
                $this->getUser(),
                $twApi,
                $form->getData()['next_token'],
                $this->getParameter('app.path.uploads'),
                $this->generateUrl('app_followers')
            );
        }
    }
}
