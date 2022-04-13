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
     * New user registration (Protected by CSRF)
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
        $user->setRoles(['ROLE_USER']);
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
            'page_title' => '<h1>Twit<strong>thor</strong> Registration</h1>',
            'csrf_token_intention' => 'registration_csrf_token',
            'action_route' => 'app_security_registration',
            'registration_label' => 'Registration',
            'login_enabled' => true,
            'login_route' => 'app_security_login',
            'login_label' => 'Login',
            'form' => $form->createView(),
        ]);
    }

    /**
     * User login (EasyAdmin) (Protected by CSRF)
     *
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    #[Route('/login', name: 'app_security_login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('/pages/security/login.html.twig', [
            'error' => $error,
            'last_username' => $lastUsername,
            'translation_domain' => 'admin',
            'page_title' => '<h1>Twit<strong>thor</strong> Login</h1>',
            'csrf_token_intention' => 'authenticate',
            'target_path' => $this->generateUrl('app_admin_dashboard'),
            'username_label' => 'Your e-mail',
            'password_label' => 'Your password',
            'sign_in_label' => 'Log in',
            'username_parameter' => '_username',
            'password_parameter' => '_password',
            'forgot_password_enabled' => true,
            // the path (i.e. a relative or absolute URL) to visit when clicking the "forgot password?" link (default: '#')
            //'forgot_password_path' => $this->generateUrl('...', ['...' => '...']),
            'forgot_password_label' => 'Forgot your password?',
            'remember_me_enabled' => true,
            'remember_me_parameter' => '_remember_me',
            'remember_me_checked' => true,
            'remember_me_label' => 'Remember me',
            'registration_enabled' => true,
            'registration_route' => 'app_security_registration',
            'registration_label' => 'Registration',
        ]);
    }

    /**
     * User logout
     *
     * @return void
     */
    #[Route('/logout', name: 'app_security_logout', methods: ['GET', 'POST'])]
    public function logout()
    {
        // No need code
    }
}
