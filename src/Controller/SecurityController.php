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
     * New user registration
     * Protected by CSRF
     *
     * @param Request $request
     * @param EntityManagerInterface $manager
     * @return Response
     */
    #[Route('/signup', name: 'app_security_signup', methods: ['GET', 'POST'])]
    public function signUp(
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

            return $this->redirectToRoute('app_security_signin');
        }

        return $this->render('theme/front/page/security/signup.html.twig', [
            'form' => $form->createView(),
        ]);
    }

    /**
     * User login
     * Protected by CSRF
     *
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    #[Route('/signin', name: 'app_security_signin', methods: ['GET', 'POST'])]
    public function SignIn(AuthenticationUtils $authenticationUtils): Response
    {
        return $this->render('theme/front/page/security/signin.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError(),
        ]);
    }

    /**
     * User logout
     *
     * @return void
     */
    #[Route('/signout', name: 'app_security_signout', methods: ['GET', 'POST'])]
    public function SignOut()
    {
        // No need code
    }
}
