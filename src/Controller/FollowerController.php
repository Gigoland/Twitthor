<?php

namespace App\Controller;

use App\Entity\Follower;
use App\Form\FollowerType;
use App\Repository\FollowerRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FollowerController extends AbstractController
{
    /**
     * Folowers manager
     *
     * @param FollowerRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/followers', name: 'app_followers', methods: ['GET'])]
    public function index(
        FollowerRepository $repository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Get connected user followers
        $followers = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('pages/follower/index.html.twig', [
            'followers' => $followers,
        ]);
    }

    /**
     * Create
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/follower/add', name: 'app_follower_add', methods: ['GET', 'POST'])]
    public function new(
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $follower = new Follower();
        $form = $this->createForm(FollowerType::class, $follower, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $follower = $form->getData();
            $follower->setUser($this->getUser()); // Connected user

            $manager->persist($follower);
            $manager->flush();

            $this->addFlash(
                'success',
                'Follower created with success !'
            );

            return $this->redirectToRoute('app_followers');
        }

        return $this->render('pages/follower/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit
     *
     * @param Follower $follower
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/follower/edit/{id}', name: 'app_follower_edit', methods: ['GET', 'POST'])]
    public function edit(
        Follower $follower,
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $form = $this->createForm(FollowerType::class, $follower, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $twUser = $follower->getTwUser();

            $follower = $form->getData();
            $follower->setUser($this->getUser()); // Connected user
            $follower->setTwUser($twUser); // Twitter user

            $manager->persist($follower);
            $manager->flush();

            $this->addFlash(
                'success',
                'Follower updated with success !'
            );

            return $this->redirectToRoute('app_followers');
        }

        return $this->render('pages/follower/edit.html.twig', [
            'follower' => $follower,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete
     *
     * @param Follower $follower
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/follower/delete/{id}', name: 'app_follower_delete', methods: ['GET', 'POST'])]
    public function delete(
        Follower $follower,
        EntityManagerInterface $manager
    ): Response {
        $manager->remove($follower);
        $manager->flush();

        $this->addFlash(
            'success',
            'Follower deleted with success !'
        );

        return $this->redirectToRoute('app_followers');
    }
}
