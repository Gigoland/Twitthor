<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\TwApi;
use App\Entity\TwApiCall;
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
     * Get associative array
     *
     * @param User $user
     * @param string $for
     * @return array
     */
    public function findConsumerKeyByUser(User $user, ?string $for): array
    {
        $qb = $this
            ->createQueryBuilder('t')
            ->select('t.id AS optionValue')
            ->addSelect('t.name AS optionText')
            ->join('t.twApiCall', 'c')
            ->where('t.user = :user')
            ->andWhere('t.name IS NOT NULL')
            ->setParameter(':user', $user)
        ;

        switch ($for) {
            case 'following':
                $qb
                    ->addSelect('c.followingCnt AS optionData')
                    ->andWhere('t.bearerToken IS NOT NULL')
                ;
                break;
            case 'followers':
                $qb
                    ->addSelect('c.followersCnt AS optionData')
                    ->andWhere('t.bearerToken IS NOT NULL')
                ;
                break;
        }

        return $qb
            ->getQuery()
            ->getArrayResult()
        ;
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
            case 'following':
            case 'followers':
                $qb
                    ->andWhere('t.bearerToken IS NOT NULL')
                    ->andWhere('t.accountId IS NOT NULL')
                ;
                break;
        }

        return (int) $qb
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }
}
