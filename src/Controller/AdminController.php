<?php

namespace App\Controller;


use App\Entity\TwUser;
use Doctrine\ORM\EntityManagerInterface;
use Knp\Component\Pager\PaginatorInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

#[IsGranted('ROLE_USER')]
class AdminController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Admin/User dashboard
     */
    #[Route('/dashboard', name: 'app_admin_dashboard', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function dashboard(
        Request $request,
        PaginatorInterface $paginator
    ): Response {
        $rows = $paginator->paginate(
            $this->entityManager->getRepository(TwUser::class)->findAll(),
            $request->query->getInt('page', 1),
            20
        );

        return $this->render('theme/admin/page/dashboard/dashboard.html.twig', [
            'rows' => $rows,
        ]);
    }
}
