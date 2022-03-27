<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    /**
     * User login
     *
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    #[Route('/login', name: 'app_security_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('pages/security/login.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    /**
     * User logout
     *
     * @return void
     */
    #[Route('/logout', name: 'app_security_logout')]
    public function logout()
    {
        // No need code
    }

    /**
     * New user registration
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/registration', name: 'app_security_registration', methods: ['GET', 'POST'])]
    public function registration(
        Request $request,
        EntityManagerInterface $manager
    ): Response {
        $user = new User();
        $user->setRoles(['USER_ROLE']);
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $manager->persist($user);
            $manager->flush();

            $this->addFlash(
                'success',
                'User created with success !'
            );

            return $this->redirectToRoute('app_security_login');
        }

        return $this->render('pages/security/registration.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
