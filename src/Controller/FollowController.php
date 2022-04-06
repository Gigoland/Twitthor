<?php

namespace App\Controller;

use App\Entity\Follow;
use App\Form\FollowType;
use App\Repository\FollowRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FollowController extends AbstractController
{
    /**
     * Followers manager
     *
     * @param FollowRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/followers', name: 'app_followers', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function followers(
        FollowRepository $repository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Get connected user followers
        $followers = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
                'isFollower' => true,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('pages/follow/followers.html.twig', [
            'followers' => $followers,
        ]);
    }

    /**
     * Following manager
     *
     * @param FollowRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/following', name: 'app_following', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function following(
        FollowRepository $repository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Get connected user followers
        $following = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
                'isFollowing' => true,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('pages/follow/following.html.twig', [
            'following' => $following,
        ]);
    }

    /**
     * No follows manager
     *
     * @param FollowRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/nofollows', name: 'app_no_follows', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function noFollows(
        FollowRepository $repository,
        PaginatorInterface $paginator,
        Request $request
    ): Response {
        // Get connected user followers
        $noFollows = $paginator->paginate(
            $repository->findBy([
                'user' => $this->getUser(),
                'isFollowing' => false,
                'isFollower' => false,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('pages/follow/no_follows.html.twig', [
            'noFollows' => $noFollows,
        ]);
    }

    /**
     * Edit follow
     *
     * @param Follow $follow
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/follow/edit/{id}', name: 'app_follow_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function edit(
        Follow $follow,
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $form = $this->createForm(FollowType::class, $follow, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $twUser = $follow->getTwUser();

            $follow = $form->getData();
            $follow->setUser($this->getUser()); // Connected user
            $follow->setTwUser($twUser); // Twitter user

            $manager->persist($follow);
            $manager->flush();

            $this->addFlash(
                'success',
                'Follow updated with success !'
            );

            return $this->redirectToRoute('app_followers');
        }

        return $this->render('pages/follow/edit.html.twig', [
            'follow' => $follow,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete follow
     *
     * @param Follow $follow
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/follow/delete/{id}', name: 'app_follow_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function delete(
        Follow $follow,
        EntityManagerInterface $manager
    ): Response {
        $manager->remove($follow);
        $manager->flush();

        $this->addFlash(
            'success',
            'Follow deleted with success !'
        );

        return $this->redirectToRoute('app_followers');
    }
}
