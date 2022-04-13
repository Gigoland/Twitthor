<?php

namespace App\Controller\Admin;

use App\Entity\TwApi;
use Doctrine\ORM\QueryBuilder;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;
use EasyCorp\Bundle\EasyAdminBundle\Dto\EntityDto;
use EasyCorp\Bundle\EasyAdminBundle\Dto\SearchDto;
use EasyCorp\Bundle\EasyAdminBundle\Field\IdField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Orm\EntityRepository;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FieldCollection;
use EasyCorp\Bundle\EasyAdminBundle\Collection\FilterCollection;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;

class TwApiCrudController extends AbstractCrudController
{
    /**
     * @return string
     */
    public static function getEntityFqcn(): string
    {
        return TwApi::class;
    }

    /**
     * @param Crud $crud
     * @return Crud
     */
    public function configureCrud(Crud $crud): Crud
    {
        return $crud
            ->setEntityPermission('ROLE_USER')
            ->setPageTitle(Crud::PAGE_INDEX, 'Twitter API Keys')
            ->setEntityLabelInPlural('API Keys')
            ->setEntityLabelInSingular('API Keys')
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
            ->hideOnIndex()
        ;
        yield TextField::new('consumerKey');

        if ($pageName === Crud::PAGE_INDEX) {
            yield TextField::new('consumerSecret')->formatValue(function ($value) {
                return $value < 10 ? $value : mb_strimwidth($value, 0, 10, '...');
            });
            yield TextField::new('accessToken')->formatValue(function ($value) {
                return $value < 10 ? $value : mb_strimwidth($value, 0, 10, '...');
            });
            yield TextField::new('accessTokenSecret')->formatValue(function ($value) {
                return $value < 10 ? $value : mb_strimwidth($value, 0, 10, '...');
            });
            yield TextField::new('bearerToken')->formatValue(function ($value) {
                return $value < 10 ? $value : mb_strimwidth($value, 0, 10, '...');
            });
        } else {
            yield TextField::new('consumerSecret');
            yield TextField::new('accessToken');
            yield TextField::new('accessTokenSecret');
            yield TextField::new('bearerToken');
        }

        yield TextField::new('accountId');
        yield TextField::new('accountName');
    }

    /**
     * Overwrite for get by query builder
     *
     * @param SearchDto $searchDto
     * @param EntityDto $entityDto
     * @param FieldCollection $fields
     * @param FilterCollection $filters
     * @return QueryBuilder
     */
    public function createIndexQueryBuilder(
        SearchDto $searchDto,
        EntityDto $entityDto,
        FieldCollection $fields,
        FilterCollection $filters
    ): QueryBuilder {
        $qb = $this->container->get(EntityRepository::class)
            ->createQueryBuilder($searchDto, $entityDto, $fields, $filters)
        ;

        $alias = $qb->getRootAliases();

        $qb
            ->where($alias[0] . '.user = :user')
            ->setParameter(':user', $this->getUser())
        ;

        return $qb;
    }

    /**
     * Create
     *
     * @param string $entityFqcn
     * @return void
     */
    public function createEntity(string $entityFqcn)
    {
        $twApi = new TwApi();
        $twApi->setUser($this->getUser());

        return $twApi;
    }
}
