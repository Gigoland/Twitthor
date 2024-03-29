<?php

namespace App\Controller;

use App\Entity\Follow;
use App\Entity\TwApi;
use App\Form\FollowType;
use App\Utils\AjaxUtil;
use App\Utils\JsonResponseUtil;
use App\Manager\TwUserMetaDataManager;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class FollowController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Following manager
     */
    #[Route('/following', name: 'app_following', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function following(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user followers
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(Follow::class)->findBy([
                'user' => $this->getUser(),
                'isFollowing' => true,
            ], [
                'id' => 'DESC',
            ]),
            $request->query->getInt('page', 1),
            10
        );

        /** @var TwApiRepository $twApiRepository */
        $twApiRepository = $this->entityManager->getRepository(TwApi::class);

        return $this->render('theme/admin/page/follow/following.html.twig', [
            'rows' => $rows,
            'haveTwApiKeys' => $twApiRepository->haveValidFollowingSettings($this->getUser()),
        ]);
    }

    /**
     * Followers manager
     */
    #[Route('/followers', name: 'app_followers', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function followers(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user followers
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(Follow::class)->findBy([
                'user' => $this->getUser(),
                'isFollower' => true,
            ], [
                'id' => 'DESC',
            ]),
            $request->query->getInt('page', 1),
            10
        );

        /** @var TwApiRepository $twApiRepository */
        $twApiRepository = $this->entityManager->getRepository(TwApi::class);

        return $this->render('theme/admin/page/follow/followers.html.twig', [
            'rows' => $rows,
            'haveTwApiKeys' => $twApiRepository->haveValidFollowersSettings($this->getUser()),
        ]);
    }

    /**
     * No followers "platonics" manager
     */
    #[Route('/platonics', name: 'app_platonics', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function platonics(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user platonics
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(Follow::class)->findBy([
                'user' => $this->getUser(),
                'isFollowing' => true,
                'isFollower' => false,
            ], [
                'isFavorite' => 'ASC',
                'id' => 'DESC',
            ]),
            $request->query->getInt('page', 1),
            10
        );

        /** @var TwApiRepository $twApiRepository */
        $twApiRepository = $this->entityManager->getRepository(TwApi::class);

        return $this->render('theme/admin/page/follow/platonics.html.twig', [
            'rows' => $rows,
            'haveTwApiKeys' => $twApiRepository->haveValidPlatonicsSettings($this->getUser()),
        ]);
    }

    /**
     * No follows "outers" manager
     */
    #[Route('/outers', name: 'app_outers', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function outers(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        // Get connected user followers
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(Follow::class)->findBy([
                'user' => $this->getUser(),
                'isFollowing' => false,
                'isFollower' => false,
            ], [
                'id' => 'DESC',
            ]),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/follow/outers.html.twig', [
            'rows' => $rows,
        ]);
    }

    /**
     * Edit follow user
     * Protected by CSRF
     */
    #[Route('/follow/{id}/edit', name: 'app_follow_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function edit(
        Request $request,
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

                $this->entityManager->persist($follow);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'Follow updated with success !'
                );

                return $this->redirectToRoute('app_follow_edit', [
                    'id' => $follow->getId(),
                ]);
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
        }

        return $this->render('theme/admin/page/follow/edit.html.twig', [
            'follow' => $follow,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete follow user
     */
    #[Route('/follow/{id}/delete', name: 'app_follow_delete', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function delete(
        Follow $follow
    ): Response {
        $this->entityManager->remove($follow);
        $this->entityManager->flush();

        $this->addFlash(
            'success',
            'Follow deleted with success !'
        );

        return $this->redirectToRoute('app_followers');
    }

    /**
     * Switch isFavorite
     */
    #[Route('/follow/{id}/favorite/ajax', name: 'app_follow_isfavorite_ajax', methods: ['POST'])]
    #[Security("is_granted('ROLE_USER') and user === follow.getUser()")]
    public function ajaxSwitchIsFavorite(
        Request $request,
        TwUserMetaDataManager $twUserMetaDataManager,
        Follow $follow
    ): JsonResponse {
        // Check is ajax type
        if (!$request->isXmlHttpRequest()
         || !$this->isCsrfTokenValid('admin-x-csrf-token', $request->headers->get('X-XSRF-TOKEN'))
        ) {
            return $this->json(JsonResponseUtil::getError403(), 403);
        }

        // Set
        $ajaxUtil = new AjaxUtil($request);

        // isFavorite
        $follow->setIsFavorite(
            $ajaxUtil->getBool('isFavorite')
        );

        $this->entityManager->persist($follow);
        $this->entityManager->flush();

        // Save favorite meta data
        if ($follow->getIsFavorite()) {
            $twUserMetaDataManager->saveIncrementMetaData(
                $follow->getTwUser(),
                'favorite'
            );
        } else {
            $twUserMetaDataManager->saveDecrementMetaData(
                $follow->getTwUser(),
                'favorite'
            );
        }

        // Ajax response
        return $this->json(
            JsonResponseUtil::getSuccess('Success', 'Updated with success !')
        );
    }
}
