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
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/profile/edit', name: 'app_edit_my_profile', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function editMyProfile(
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        /** @var User $user */
        $user = $this->getUser();
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

                return $this->redirectToRoute('app_edit_my_profile');
            }

            $user = $form->getData();

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'Profile updated with success !'
            );

            return $this->redirectToRoute('app_edit_my_profile');
        }

        return $this->render('pages/user/edit_my_profile.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit user password
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @param UserPasswordHasherInterface $hasher
     * @return Response
     */
    #[Route('/password/edit', name: 'app_edit_my_password', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function editMyPassword(
        Request $request,
        EntityManagerInterface $manager,
        UserPasswordHasherInterface $hasher
    ): Response {
        /** @var User $user */
        $user = $this->getUser();
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

                return $this->redirectToRoute('app_edit_my_password');
            }

            $user->setUpdateAt(new \DateTimeImmutable()); // For force preUpdate
            $user->setPlainPassword(
                $form->getData()['newPassword']
            );

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'User password updated with success !'
            );

            return $this->redirectToRoute('app_edit_my_password');
        }

        return $this->render('pages/user/edit_my_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
