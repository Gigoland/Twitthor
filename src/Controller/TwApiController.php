<?php

namespace App\Controller;

use App\Entity\TwApi;
use App\Form\TwApiType;
use App\Form\AjaxHiddenType;
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
    #[Route('/tw/settings/edit/{id}', name: 'app_twitter_api_settings_edit', methods: ['GET', 'POST'])]
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
                $twApi->setUser($this->getUser()); // Connected user

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
    #[Route('/tw/settings/delete/{id}', name: 'app_twitter_api_settings_delete', methods: ['GET', 'POST'])]
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
     * @param Request $request
     * @param TwApiCallService $service
     * @param TwApi $twApi
     * @return JsonResponse
     */
    #[Route('/tw/ajax/following/update/{id}', name: 'app_ajax_update_following', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUpdateFollowing(
        Request $request,
        TwApiCallService $service,
        TwApi $twApi
    ): JsonResponse {
        $form = $this->createForm(AjaxHiddenType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $result = $service->updateFollowing(
                $this->getUser(),
                $twApi,
                $this->getParameter('app.path.uploads')
            );

            // Set js redirect path
            $result['path'] = $this->generateUrl('app_following');

            // Ajax response
            return new JsonResponse($result);
        }

        // Ajax response
        return new JsonResponse([
            'code' => TwApiCallService::KO,
            'message' => 'Something went wrong !',
        ]);
    }

    /**
     * Upload folowers by Twitter Api with Twitthor
     * Protected by CSRF
     * Ajax only
     *
     * @param Request $request
     * @param TwApiCallService $service
     * @param TwApi $twApi
     * @return JsonResponse
     */
    #[Route('/tw/ajax/followers/update/{id}', name: 'app_ajax_update_followers', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function ajaxUpdateFollowers(
        Request $request,
        TwApiCallService $service,
        TwApi $twApi
    ): JsonResponse {
        $form = $this->createForm(AjaxHiddenType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $result = $service->updateFollowers(
                $this->getUser(),
                $twApi,
                $this->getParameter('app.path.uploads')
            );

            // Set js redirect path
            $result['path'] = $this->generateUrl('app_followers');

            // Ajax response
            return new JsonResponse($result);
        }

        // Ajax response
        return new JsonResponse([
            'code' => TwApiCallService::KO,
            'message' => 'Something went wrong !',
        ]);
    }
}
