<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_USER')]
class AdminController extends AbstractController
{
    /**
     * Admin/User dashboard
     */
    #[Route('/dashboard', name: 'app_admin_dashboard', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function dashboard(): Response {
        return $this->render('theme/admin/page/dashboard/dashboard.html.twig');
    }
}
