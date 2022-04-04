<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Form\UserPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractController
{
    /**
     * Edit connected user
     *
     * @param User $editUser
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/user/edit/{id}', name: 'app_user_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === editUser")]
    public function edit(
        User $editUser,
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        $form = $this->createForm(UserType::class, $editUser, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$hasher->isPasswordValid($editUser, $form->getData()->getPlainPassword())) {
                $this->addFlash(
                    'warnings',
                    'User password incorect !'
                );

                return $this->redirectToRoute('app_user_edit', [
                    'id' => $editUser->getId(),
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
     * @param User $editUser
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param UserPasswordHasherInterface $hasher
     * @return Response
     */
    #[Route('/user/edit/password/{id}', name: 'app_user_edit_password', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER') and user === editUser")]
    public function editPassword(
        User $editUser,
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        $form = $this->createForm(UserPasswordType::class, [
            'method' => 'POST',
        ]);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            if (!$hasher->isPasswordValid($editUser, $form->getData()['plainPassword'])) {
                $this->addFlash(
                    'warnings',
                    'User password incorect !'
                );

                return $this->redirectToRoute('app_user_edit_password', [
                    'id' => $editUser->getId(),
                ]);
            }

            $editUser->setUpdateAt(new \DateTimeImmutable()); // For force preUpdate
            $editUser->setPlainPassword(
                $form->getData()['newPassword']
            );

            $manager->persist($editUser);
            $manager->flush();

            $this->addFlash(
                'success',
                'User password updated with success !'
            );

            return $this->redirectToRoute('app_user_edit_password', [
                'id' => $editUser->getId(),
            ]);
        }

        return $this->render('pages/user/edit_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
