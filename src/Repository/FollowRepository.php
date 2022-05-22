<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Follow;
use Doctrine\ORM\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

/**
 * @method Follow|null find($id, $lockMode = null, $lockVersion = null)
 * @method Follow|null findOneBy(array $criteria, array $orderBy = null)
 * @method Follow[]    findAll()
 * @method Follow[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Follow::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Follow $entity, bool $flush = true): void
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
    public function remove(Follow $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * Set process token to follow by twUser ids
     */
    public function setProcessTokenByTwUserIds(User $user, array $ids, string $token): int
    {
        $qb = $this->createQueryBuilder('t');
        $qb
            ->update()
            ->set('t.processToken', ':token')
            ->where('t.user = :user')
            ->andWhere(
                $qb->expr()->in('t.twUser', ':ids')
            )
            ->setParameter(':token', $token, \PDO::PARAM_STR)
            ->setParameter(':user', $user)
            ->setParameter(':ids', $ids, \Doctrine\DBAL\Connection::PARAM_INT_ARRAY)
        ;

        return $qb
            ->getQuery()
            ->execute()
        ;
    }

    /**
     * Set null for all follow by user
     */
    public function setNullProcessTokenByUser(User $user): int
    {
        $qb = $this->createQueryBuilder('t');
        $qb
            ->update()
            ->set('t.processToken', ':token')
            ->where('t.user = :user')
            ->andWhere('t.processToken IS NOT NULL')
            ->setParameter(':user', $user)
            ->setParameter(':token', null, \PDO::PARAM_NULL)
        ;

        return $qb
            ->getQuery()
            ->execute()
        ;
    }

    /**
     * Update no follow users by process token
     */
    public function updateNoFollowByProcessToken(User $user, string $token, string $for): int
    {
        $qb = $this->createQueryBuilder('t');
        $qb
            ->update()
            ->set('t.is' . ucfirst($for), ':is')
            ->where('t.user = :user')
            ->andWhere(
                $qb->expr()->orX(
                    $qb->expr()->isNull('t.processToken'),
                    $qb->expr()->neq('t.processToken', ':token')
                )
            )
            ->setParameter(':is', 0, \PDO::PARAM_INT)
            ->setParameter(':user', $user)
            ->setParameter(':token', $token, \PDO::PARAM_STR)
        ;

        return $qb
            ->getQuery()
            ->execute()
        ;
    }
}
