<?php

namespace App\Controller;

use App\Entity\Follow;
use App\Form\FollowType;
use App\Form\AjaxEasyType;
use App\Form\AjaxHiddenType;
use App\Repository\TwApiRepository;
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
     * Following manager
     *
     * @param Request $request
     * @param FollowRepository $followRepository
     * @param TwApiRepository $twApirepository
     * @param PaginatorInterface $paginator
     * @return Response
     */
    #[Route('/following', name: 'app_following', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function following(
        Request $request,
        FollowRepository $followRepository,
        TwApiRepository $twApirepository,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user followers
        $following = $paginator->paginate(
            $followRepository->findBy([
                'user' => $this->getUser(),
                'isFollowing' => true,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        // For ajax with submit button for get keys select
        $ajaxEasyForm = $this->createForm(AjaxEasyType::class);

        // For ajax hidden form for update following
        $ajaxHiddenForm = $this->createForm(AjaxHiddenType::class, null, [
            'action' => $this->generateUrl('app_ajax_update_following', ['id' => 0]),
            'attr' => ['id' => 'ajax-update-following'],
        ]);

        return $this->render('theme/admin/page/follow/following.html.twig', [
            'following' => $following,
            'haveTwApiKeys' => $twApirepository->haveValidFollowingSettings($this->getUser()),
            'ajaxEasyForm' => $ajaxEasyForm->createView(),
            'ajaxHiddenForm' => $ajaxHiddenForm->createView(),
        ]);
    }

    /**
     * Followers manager
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @param FollowRepository $followRepository
     * @param TwApiRepository $twApirepository
     * @return Response
     */
    #[Route('/followers', name: 'app_followers', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function followers(
        Request $request,
        PaginatorInterface $paginator,
        FollowRepository $followRepository,
        TwApiRepository $twApirepository
    ): Response {
        // Get connected user followers
        $followers = $paginator->paginate(
            $followRepository->findBy([
                'user' => $this->getUser(),
                'isFollower' => true,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        // For ajax with submit button for get keys select
        $ajaxEasyForm = $this->createForm(AjaxEasyType::class);

        // For ajax hidden form for update followers
        $ajaxHiddenForm = $this->createForm(AjaxHiddenType::class, null, [
            'action' => $this->generateUrl('app_ajax_update_followers', ['id' => 0]),
            'attr' => ['id' => 'ajax-update-followers'],
        ]);

        return $this->render('theme/admin/page/follow/followers.html.twig', [
            'followers' => $followers,
            'haveTwApiKeys' => $twApirepository->haveValidFollowersSettings($this->getUser()),
            'ajaxEasyForm' => $ajaxEasyForm->createView(),
            'ajaxHiddenForm' => $ajaxHiddenForm->createView(),
        ]);
    }

    /**
     * No follows "outers" manager
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @param FollowRepository $followRepository
     * @return Response
     */
    #[Route('/outers', name: 'app_outers', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function outers(
        Request $request,
        PaginatorInterface $paginator,
        FollowRepository $followRepository
    ): Response {
        // Get connected user followers
        $outers = $paginator->paginate(
            $followRepository->findBy([
                'user' => $this->getUser(),
                'isFollowing' => false,
                'isFollower' => false,
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/follow/outers.html.twig', [
            'outers' => $outers,
        ]);
    }

    /**
     * Edit follow user
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param Follow $follow
     * @return Response
     */
    #[Route('/follow/edit/{id}', name: 'app_follow_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function edit(
        Request $request,
        EntityManagerInterface $entityManager,
        Follow $follow
    ): Response {
        $form = $this->createForm(FollowType::class, $follow);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twUser = $follow->getTwUser();

                $follow = $form->getData();
                $follow->setUser($this->getUser()); // Connected user
                $follow->setTwUser($twUser); // Twitter user

                $entityManager->persist($follow);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Follow updated with success !'
                );

                return $this->redirectToRoute('app_follow_edit', [
                    'id' => $follow->getId(),
                ]);
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/follow/edit.html.twig', [
            'follow' => $follow,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete follow user
     *
     * @param EntityManagerInterface $entityManager
     * @param Follow $follow
     * @return Response
     */
    #[Route('/follow/delete/{id}', name: 'app_follow_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function delete(
        EntityManagerInterface $entityManager,
        Follow $follow
    ): Response {
        $entityManager->remove($follow);
        $entityManager->flush();

        $this->addFlash(
            'success',
            'Follow deleted with success !'
        );

        return $this->redirectToRoute('app_followers');
    }
}
