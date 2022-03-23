<?php

namespace App\Controller;

use App\Repository\FollowerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;

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
    #[Route('/followers', name: 'app_followers', methods:['GET', 'POST'])]
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
}
