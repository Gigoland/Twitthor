<?php

namespace App\Controller;

use App\Entity\TwApi;
use App\Form\TwApiType;
use App\Repository\TwApiRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TwApiController extends AbstractController
{
    /**
     * Twitter API configurations manager
     *
     * @param TwApiRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/keys', name: 'app_api_keys', methods: ['GET'])]
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

        return $this->render('page/twitter/keys.html.twig', [
            'apiKeys' => $apiKeys,
        ]);
    }

    /**
     * Create Twitter API configuration
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/keys/add', name: 'app_api_keys_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function new(
        Request $request,
        EntityManagerInterface $manager
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

            $this->addFlash(
                'success',
                'Configuration created with success !'
            );

            return $this->redirectToRoute('app_api_keys');
        }

        return $this->render('page/twitter/keys_new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit Twitter API configuration
     *
     * @param TwApi $twApi
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/keys/edit/{id}', name: 'app_api_keys_edit', methods: ['GET', 'POST'])]
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
                'Configuration updated with success !'
            );

            return $this->redirectToRoute('app_tw_api_keys');
        }

        return $this->render('page/twitter/keys_edit.html.twig', [
            'twApi' => $twApi,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete Twitter API configuration
     *
     * @param TwApi $twApi
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/keys/delete/{id}', name: 'app_api_keys_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === twApi.getUser()")]
    public function delete(
        TwApi $twApi,
        EntityManagerInterface $manager
    ): Response {
        $manager->remove($twApi);
        $manager->flush();

        $this->addFlash(
            'success',
            'Configuration deleted with success !'
        );

        return $this->redirectToRoute('app_api_keys');
    }
}
