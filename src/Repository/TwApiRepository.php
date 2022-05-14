<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\TwApi;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method TwApi|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwApi|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwApi[]    findAll()
 * @method TwApi[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwApiRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TwApi::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(TwApi $entity, bool $flush = true): void
    {
        $this->_em->persist($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function remove(TwApi $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * Deactivate all activated settings
     *
     * @param User $user
     * @return integer
     */
    public function deactivateAllByUser(User $user): int
    {
        $qb = $this->createQueryBuilder('t');
        $qb
            ->update()
            ->set('t.isActive', ':is')
            ->where('t.user = :user')
            ->andWhere('t.isActive != :is')
            ->setParameter(':is', false, \PDO::PARAM_BOOL)
            ->setParameter(':user', $user)
        ;

        return $qb
            ->getQuery()
            ->execute()
        ;
    }

    /**
     * Get activated TwApi
     *
     * @param User $user
     * @param string $for
     * @return TwApi
     */
    public function findActiveSettingsByUser(User $user, ?string $for): TwApi
    {
        $qb = $this
            ->createQueryBuilder('t')
            ->where('t.user = :user')
            ->andWhere('t.isActive = 1')
            ->andWhere('t.name IS NOT NULL')
            ->setParameter(':user', $user)
        ;

        switch ($for) {
            // OAuth 2.0 Client ID and Client Secret
            case 'access_token':
                $qb
                    ->andWhere('t.clientId IS NOT NULL')
                    ->andWhere('t.clientSecret IS NOT NULL')
                ;
                break;
            case 'following':
            case 'followers':
                $qb
                    ->andWhere('t.bearerToken IS NOT NULL')
                ;
                break;
            // Need access_token from table tw_api_oauth2
            case 'unfollow':
                $qb
                    ->andWhere('t.clientId IS NOT NULL')
                    ->andWhere('t.clientSecret IS NOT NULL')
                ;
                break;
        }

        return $qb
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

    /**
     * Check valid settings for get following
     *
     * @param User $user
     * @return integer
     */
    public function haveValidFollowingSettings(User $user): int
    {
        return $this->haveValidSettings($user, 'following');
    }

    /**
     * Check valid settings for get following
     *
     * @param User $user
     * @return integer
     */
    public function haveValidFollowersSettings(User $user): int
    {
        return $this->haveValidSettings($user, 'followers');
    }

    /**
     * Check valid settings
     *
     * @param User $user
     * @param string $for
     * @return integer
     */
    private function haveValidSettings(User $user, string $for): int
    {
        $qb = $this
            ->createQueryBuilder('t')
            ->select('count(t.id)')
            ->where('t.user = :user')
            ->andWhere('t.name IS NOT NULL')
            ->setParameter(':user', $user)
            ->setMaxResults(1)
        ;

        switch ($for) {
            // OAuth 2.0 Client ID and Client Secret
            case 'access_token':
                $qb
                    ->andWhere('t.clientId IS NOT NULL')
                    ->andWhere('t.clientSecret IS NOT NULL')
                ;
                break;
            case 'following':
            case 'followers':
                $qb
                    ->andWhere('t.bearerToken IS NOT NULL')
                    ->andWhere('t.accountId IS NOT NULL')
                ;
                break;
            // Need access_token from table tw_api_oauth2
            case 'unfollow':
                $qb
                    ->andWhere('t.clientId IS NOT NULL')
                    ->andWhere('t.clientSecret IS NOT NULL')
                ;
                break;
        }

        return (int) $qb
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }
}
