<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\ProfileType;
use App\Form\UserPasswordType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class ProfileController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Edit connected user only
     * Protected by CSRF
     *
     * @param Request $request
     * @param UserPasswordHasherInterface $hasher
     * @return Response
     */
    #[Route('/profile/edit', name: 'app_profile_edit', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function editMyProfile(
        Request $request,
        UserPasswordHasherInterface $hasher
    ): Response {
        /** @var User $user */
        $user = $this->getUser();
        $form = $this->createForm(ProfileType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                if (!$hasher->isPasswordValid($user, $form->getData()->getPlainPassword())) {
                    $this->addFlash(
                        'warnings',
                        'Your password is incorect !'
                    );

                    return $this->redirectToRoute('app_profile_edit');
                }

                $user = $form->getData();

                $this->entityManager->persist($user);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'Your updated with success !'
                );

                return $this->redirectToRoute('app_profile_edit');
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
        }

        return $this->render('theme/admin/page/profile/edit_my_profile.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * Edit connected user password only
     * Protected by CSRF
     *
     * @param Request $request
     * @param UserPasswordHasherInterface $hasher
     * @return Response
     */
    #[Route('/profile/password', name: 'app_profile_password', methods: ['GET', 'POST'])]
    #[Security("is_granted('ROLE_USER')")]
    public function editMyPassword(
        Request $request,
        UserPasswordHasherInterface $hasher
    ): Response {
        /** @var User $user */
        $user = $this->getUser();
        $form = $this->createForm(UserPasswordType::class);

        $form->handleRequest($request);

        if ($form->isSubmitted()) {
            if ($form->isValid()) {
                if (!$hasher->isPasswordValid($user, $form->getData()['plainPassword'])) {
                    $this->addFlash(
                        'warnings',
                        'Your password is incorect !'
                    );

                    return $this->redirectToRoute('app_profile_password', [
                        'id' => $user->getId(),
                    ]);
                }

                $user->setUpdateAt(new \DateTimeImmutable()); // For force preUpdate
                $user->setPlainPassword(
                    $form->getData()['newPassword']
                );

                $this->entityManager->persist($user);
                $this->entityManager->flush();

                $this->addFlash(
                    'success',
                    'Your password updated with success !'
                );

                return $this->redirectToRoute('app_profile_password');
            }

            $this->addFlash(
                'errors',
                'Something went wrong !'
            );
        }

        return $this->render('theme/admin/page/profile/edit_my_password.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
