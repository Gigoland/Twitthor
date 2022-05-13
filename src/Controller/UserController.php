<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserNewType;
use App\Form\UserEditType;
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
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Users manager
     * Admin only
     *
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @return Response
     */
    #[Route('/users', name: 'app_users', methods: ['GET'])]
    #[IsGranted('ROLE_ADMIN')]
    public function users(
        Request $request,
        PaginatorInterface $paginator,
    ): Response {
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(User::class)->findAll(),
            $request->query->getInt('page', 1),
            10
        );

        return $this->render('theme/admin/page/user/users.html.twig', [
            'rows' => $rows,
        ]);
    }

    /**
     * Create new user
     * Admin only
     * Protected by CSRF
     *
     * @param Request $request
     * @return Response
     */
    #[Route('/user/add', name: 'app_user_add', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function new(
        Request $request
    ): Response {
        $user = new User();
        $form = $this->createForm(UserNewType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $user = $form->getData();

                $this->entityManager->persist($user);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'User created with success !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $user->getId(),
                ]);
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
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
     * @param User $user
     * @return Response
     */
    #[Route('/user/{id}/edit', name: 'app_user_edit', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function edit(
        Request $request,
        User $user
    ): Response {
        $form = $this->createForm(UserEditType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                $user = $form->getData();

                $this->entityManager->persist($user);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'User updated with success !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $user->getId(),
                ]);
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
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
     * @return Response
     */
    #[Route('/user/{id}/delete', name: 'app_user_delete', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_ADMIN')]
    public function delete(
        User $user
    ): Response {
        $this->entityManager->remove($user);
        $this->entityManager->flush();

        $this->addFlash(
            'success',
            'User deleted with success !'
        );

        return $this->redirectToRoute('app_users');
    }
}
