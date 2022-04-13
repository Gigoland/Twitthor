<?php

namespace App\Controller\Admin;

use App\Entity\User;
use App\Admin\Field\PasswordField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\EmailField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class UserCrudController extends AbstractCrudController
{
    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return User::class;
    }

    /**
     * @param Crud $crud
     * @return Crud
     */
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityPermission('ROLE_ADMIN')
            ->setPageTitle(Crud::PAGE_INDEX, 'Users Manager')
            ->setEntityLabelInPlural('Users')
            ->setEntityLabelInSingular('User')
        ;
    }

    /**
     * @param string $pageName
     * @return iterable
     */
    public function configureFields(string $pageName): iterable
    {
        yield IdField::new('id')
            ->hideOnForm()
        ;
        yield EmailField::new('email')
            ->setRequired(true)
        ;

        // Only for creation
        if ($pageName === Crud::PAGE_NEW) {
            yield PasswordField::new('plainPassword', 'Password')
                ->onlyOnForms()
                ->setRequired(true)
            ;
        }

        yield TextField::new('TwUserId', 'Twitter user ID');
        yield TextField::new('twUsername', 'Twitter Username');
        yield TextField::new('walletEth', 'Wallet ETH');
        yield TextField::new('walletSol', 'Wallet SOL');
        yield DateField::new('createAt')
            ->hideOnForm()
        ;
        yield DateField::new('updateAt')
            ->hideOnForm()
        ;
    }
}
