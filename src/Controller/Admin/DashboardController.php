<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Entity\TwApi;
use App\Entity\Follow;
use App\Entity\TwUser;
use App\Controller\Admin\OutersCrudController;
use Symfony\Component\HttpFoundation\Response;
use App\Controller\Admin\ProfileCrudController;
use Symfony\Component\Routing\Annotation\Route;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use App\Controller\Admin\FollowersCrudController;
use App\Controller\Admin\FollowingCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Config\UserMenu;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;

class DashboardController extends AbstractDashboardController
{
    /**
     * @return Response
     */
    #[Route('/admin', name: 'app_admin_dashboard', methods: ['GET'])]
    #[IsGranted('ROLE_USER')]
    public function dashboard(): Response
    {
        return $this->render('pages/admin/dashboard.html.twig');
    }

    /**
     * @return Dashboard
     */
    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Twit<strong>thor</strong> Dashboard')
        ;
    }

    public function configureUserMenu(UserInterface $user): UserMenu
    {
        return parent::configureUserMenu($user)
            ->displayUserName(false)
            ->addMenuItems([
                MenuItem::linkToRoute('My Profile', 'fa fa-id-card', 'app_edit_my_profile', ['...' => '...']),
                MenuItem::linkToRoute('My password', 'fa fa-user-cog', 'app_edit_my_password', ['...' => '...']),
            ])
        ;
    }

    /**
     * Left menu
     *
     * @return iterable
     */
    public function configureMenuItems(): iterable
    {
        // Home
        yield MenuItem::linkToRoute('Home', 'fa fa-home', 'app_index');

        // ROLE_ADMIN administration
        yield MenuItem::section('Administrator')
            ->setPermission('ROLE_ADMIN')
        ;
        yield MenuItem::subMenu('Users', 'fa fa-bars')
            ->setPermission('ROLE_ADMIN')
            ->setSubItems([
                MenuItem::linkToCrud('Show user', 'fa fa-eye', User::class)
                    ->setDefaultSort(['updateAt' => 'DESC'])
                ,
                MenuItem::linkToCrud('Create user', 'fa fa-plus', User::class)
                    ->setAction(Crud::PAGE_NEW)
                ,
            ])
        ;
        yield MenuItem::subMenu('Twitter Users', 'fa fa-bars')
            ->setPermission('ROLE_ADMIN')
            ->setSubItems([
                MenuItem::linkToCrud('Show user', 'fa fa-eye', TwUser::class)
                    ->setDefaultSort(['updateAt' => 'DESC'])
                ,
                MenuItem::linkToCrud('Create user', 'fa fa-plus', TwUser::class)
                    ->setAction(Crud::PAGE_NEW)
                ,
            ])
        ;

        // ROLE_USER administaration
        yield MenuItem::section('Twitter')
            ->setPermission('ROLE_USER')
        ;
        yield MenuItem::subMenu('Follow', 'fa fa-bars')
            ->setPermission('ROLE_USER')
            ->setSubItems([
                // Following
                MenuItem::linkToCrud('Following', 'fa fa-eye', Follow::class)
                    ->setController(FollowingCrudController::class)
                    ->setDefaultSort(['updateAt' => 'DESC'])
                ,
                // Followers
                MenuItem::linkToCrud('Followers', 'fa fa-eye', Follow::class)
                    ->setController(FollowersCrudController::class)
                    ->setDefaultSort(['updateAt' => 'DESC'])
                ,
                // Outers
                MenuItem::linkToCrud('Outers', 'fa fa-eye', Follow::class)
                    ->setController(OutersCrudController::class)
                    ->setDefaultSort(['updateAt' => 'DESC'])
                ,
            ])
        ;
        yield MenuItem::subMenu('Configurations')
            ->setPermission('ROLE_USER')
        ;
        yield MenuItem::subMenu('Twitter API', 'fa fa-bars')
            ->setPermission('ROLE_USER')
            ->setSubItems([
                // Api
                MenuItem::linkToCrud('API Keys', 'fa fa-eye', TwApi::class),
                MenuItem::linkToCrud('Add Keys', 'fa fa-plus', TwApi::class)
                    ->setAction(Crud::PAGE_NEW)
                ,
            ])
        ;
    }
}
