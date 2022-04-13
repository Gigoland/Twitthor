<?php

namespace App\Controller\Admin;

use App\Entity\TwUser;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\BooleanField;
use EasyCorp\Bundle\EasyAdminBundle\Field\IntegerField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TwUserCrudController extends AbstractCrudController
{
    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return TwUser::class;
    }

    /**
     * @param Crud $crud
     * @return Crud
     */
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityPermission('ROLE_ADMIN')
            ->setPageTitle(Crud::PAGE_INDEX, 'Twitter Users Manager')
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
        return [
            IdField::new('id')->hideOnForm(),
            IntegerField::new('twUserId', 'Twitter User ID')->setRequired(true),
            TextField::new('twUsername', 'Twitter Username')->setRequired(true),
            TextField::new('twName', 'Twitter Name')->setRequired(true),
            BooleanField::new('twIsVerified', 'Twitter Verified'),
            DateField::new('createAt')->hideOnForm(),
            DateField::new('updateAt')->hideOnForm(),
        ];
    }
}
