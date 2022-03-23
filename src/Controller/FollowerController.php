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
    #[Route('/followers', name: 'app_followers', methods:['GET'])]
    public function index(FollowerRepository $repository, PaginatorInterface $paginator, Request $request): Response
    {
        $followers = $paginator->paginate(
            $repository->findAll(),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('pages/follower/index.html.twig', [
            'followers' => $followers,
        ]);
    }

    #[Route('/follower/add', name: 'app_follower_add', methods:['GET', 'POST'])]
    public function new(Request $request, EntityManagerInterface $manager): Response
    {
        $follower = new Follower();
        $form = $this->createForm(FollowerType::class, $follower);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $follower = $form->getData();

            $manager->persist($follower);
            $manager->flush();

            $this->addFlash(
                'success',
                'Follower created with success.'
            );

            $this->redirectToRoute('app_followers');
        }

        return $this->render('pages/follower/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
