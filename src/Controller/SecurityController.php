<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class SecurityController extends AbstractController
{
    /**
     * New user registration
     * Protected by CSRF
     */
    #[Route('/signup', name: 'app_security_signup', methods: ['GET', 'POST'])]
    public function signUp(
        Request $request,
        EntityManagerInterface $entityManager,
        TokenGeneratorInterface $tokenGenerator
    ): Response {
        $user = new User();
        $user->setRoles(['ROLE_USER']);
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            // Set token for email verification
            $user->setVerifyToken(
                $tokenGenerator->generateToken()
            );

            $entityManager->persist($user);
            $entityManager->flush();

            return $this->redirectToRoute('app_security_signin');
        }

        return $this->render('theme/front/page/security/signup.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * User login
     * Protected by CSRF
     */
    #[Route('/signin', name: 'app_security_signin', methods: ['GET', 'POST'])]
    public function signIn(
        AuthenticationUtils $authenticationUtils
    ): Response {
        return $this->render('theme/front/page/security/signin.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    /**
     * User logout
     */
    #[Route('/signout', name: 'app_security_signout', methods: ['GET', 'POST'])]
    public function SignOut()
    {
        // No need code
    }

    #[Route('/verify/send', name: 'app_security_send_verify_token', methods: ['POST'])]
    #[IsGranted('ROLE_USER')]
    public function sendVerifyToken()
    {
        //@todo
    }

    #[Route('/verify/check', name: 'app_security_check_verify_token', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function checkVerifyToken()
    {
        //@todo
    }
}
