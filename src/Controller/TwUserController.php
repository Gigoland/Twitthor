<?php

namespace App\Controller;

use App\Entity\TwUser;
use App\Form\TwUserType;
use App\Repository\TwUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_ADMIN')]
class TwUserController extends AbstractController
{
    /**
     * Twitter users manager
     * Admin only
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @param TwUserRepository $repository
     * @return Response
     */
    #[Route('/tw/users', name: 'app_twitter_users', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function users(
        Request $request,
        PaginatorInterface $paginator,
        TwUserRepository $repository
    ): Response {
        $rows = $paginator->paginate(
            $repository->findAll(),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/twitter/user/users.html.twig', [
            'rows' => $rows,
        ]);
    }

    /**
     * Create twitter new user by form post
     * Admin only
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @return Response
     */
    #[Route('/tw/user/add', name: 'app_twitter_user_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function new(
        Request $request,
        EntityManagerInterface $entityManager
    ): Response {
        $twUser = new TwUser();
        $form = $this->createForm(TwUserType::class, $twUser);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twUser = $form->getData();

                $entityManager->persist($twUser);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Twitter user created with success !'
                );

                return $this->redirectToRoute('app_twitter_user_edit', [
                    'id' => $twUser->getId(),
                ]);
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/twitter/user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit twitter user by form post
     * Admin only
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param TwUser $twUser
     * @return Response
     */
    #[Route('/tw/user/edit/{id}', name: 'app_twitter_user_edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function edit(
        Request $request,
        EntityManagerInterface $entityManager,
        TwUser $twUser
    ): Response {
        $form = $this->createForm(TwUserType::class, $twUser);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $twUser = $form->getData();

                $entityManager->persist($twUser);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'Twitter user updated with success !'
                );

                return $this->redirectToRoute('app_twitter_user_edit', [
                    'id' => $twUser->getId(),
                ]);
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/twitter/user/edit.html.twig', [
            'twUser' => $twUser,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete twitter user by form post
     * Admin only
     *
     * @param EntityManagerInterface $entityManager
     * @param TwUser $twUser
     * @return Response
     */
    #[Route('/tw/user/delete/{id}', name: 'app_twitter_user_delete', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(
        EntityManagerInterface $entityManager,
        TwUser $twUser
    ): Response {
        $entityManager->remove($twUser);
        $entityManager->flush();

        $this->addFlash(
            'success',
            'Twitter User deleted with success !'
        );

        return $this->redirectToRoute('app_twitter_users');
    }
}
