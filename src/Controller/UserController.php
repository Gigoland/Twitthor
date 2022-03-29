<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserPasswordType;
use App\Form\UserType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    /**
     * Edit connected user
     *
     * @param User $user
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/user/edit/{id}', name: 'app_user_edit', methods: ['GET', 'POST'])]
    public function edit(
        User $user,
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_security_login');
        }

        if ($this->getUser() !== $user) {
            return $this->redirectToRoute('app_index');
        }

        $form = $this->createForm(UserType::class, $user, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$hasher->isPasswordValid($user, $form->getData()->getPlainPassword())) {
                $this->addFlash(
                    'warnings',
                    'User password incorect !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $user->getId(),
                ]);
            }

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

        return $this->render('pages/user/edit.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit user password
     *
     * @param User $user
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param UserPasswordHasherInterface $hasher
     * @return Response
     */
    #[Route('/user/edit/password/{id}', name: 'app_user_edit_password', methods: ['GET', 'POST'])]
    public function editPassword(
        User $user,
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        if (!$this->getUser()) {
            return $this->redirectToRoute('app_security_login');
        }

        if ($this->getUser() !== $user) {
            return $this->redirectToRoute('app_index');
        }

        $form = $this->createForm(UserPasswordType::class, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$hasher->isPasswordValid($user, $form->getData()['plainPassword'])) {
                $this->addFlash(
                    'warnings',
                    'User password incorect !'
                );

                return $this->redirectToRoute('app_user_edit_password', [
                    'id' => $user->getId(),
                ]);
            }

            $user->setPassword(
                $hasher->hashPassword(
                    $user,
                    $form->getData()['newPassword']
                )
            );

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'User password updated with success !'
            );

            return $this->redirectToRoute('app_user_edit_password', [
                'id' => $user->getId(),
            ]);
        }

        return $this->render('pages/user/edit_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
