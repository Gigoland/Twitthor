<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserNewType;
use App\Form\UserEditType;
use App\Repository\UserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_ADMIN')]
class UserController extends AbstractController
{
    /**
     * Users manager
     * Admin only
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @param UserRepository $repository
     * @return Response
     */
    #[Route('/users', name: 'app_users', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function users(
        Request $request,
        PaginatorInterface $paginator,
        UserRepository $repository
    ): Response {
        $users = $paginator->paginate(
            $repository->findAll(),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/user/users.html.twig', [
            'users' => $users,
        ]);
    }

    /**
     * Create new user
     * Admin only
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @return Response
     */
    #[Route('/user/add', name: 'app_user_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function new(
        Request $request,
        EntityManagerInterface $entityManager
    ): Response {
        $user = new User();
        $form = $this->createForm(UserNewType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $user = $form->getData();

                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'User created with success !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $user->getId(),
                ]);
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/user/new.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit user
     * Admin only
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $entityManager
     * @param User $user
     * @return Response
     */
    #[Route('/user/edit/{id}', name: 'app_user_edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function edit(
        Request $request,
        EntityManagerInterface $entityManager,
        User $user
    ): Response {
        $form = $this->createForm(UserEditType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $user = $form->getData();

                $entityManager->persist($user);
                $entityManager->flush();

                $this->addFlash(
                    'success',
                    'User updated with success !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $user->getId(),
                ]);
            } else {
                $this->addFlash(
                    'errors',
                    'Something went wrong !'
                );
            }
        }

        return $this->render('theme/admin/page/user/edit.html.twig', [
            'user' => $user,
            'form' => $form->createView(),
        ]);
    }

    /**
     * Delete user
     * Admin only
     *
     * @param EntityManagerInterface $entityManager
     * @param User $user
     * @return Response
     */
    #[Route('/user/delete/{id}', name: 'app_user_delete', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(
        EntityManagerInterface $entityManager,
        User $user
    ): Response {
        $entityManager->remove($user);
        $entityManager->flush();

        $this->addFlash(
            'success',
            'User deleted with success !'
        );

        return $this->redirectToRoute('app_users');
    }
}
