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
     * @param UserRepository $repository
     * @param PaginatorInterface $paginator
     * @param Request $request
     * @return Response
     */
    #[Route('/users', name: 'app_users', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function users(
        UserRepository $repository,
        PaginatorInterface $paginator,
        Request $request
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
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/user/add', name: 'app_user_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function new(
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $user = new User();
        $form = $this->createForm(UserNewType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'User created with success !'
            );

            return $this->redirectToRoute('app_user_edit', [
                'id' => $user->getId(),
            ]);
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
     * @param User $user
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/user/edit/{id}', name: 'app_user_edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function edit(
        User $user,
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $form = $this->createForm(UserEditType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'User updated with success !'
            );

            return $this->redirectToRoute('app_user_edit', [
                'id' => $user->getId(),
            ]);
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
     * @param User $user
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/user/delete/{id}', name: 'app_user_delete', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(
        User $user,
        EntityManagerInterface $manager
    ): Response {
        $manager->remove($user);
        $manager->flush();

        $this->addFlash(
            'success',
            'User deleted with success !'
        );

        return $this->redirectToRoute('app_users');
    }
}
