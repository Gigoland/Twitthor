<?php

namespace App\Repository;

use App\Entity\Follower;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Follower|null find($id, $lockMode = null, $lockVersion = null)
 * @method Follower|null findOneBy(array $criteria, array $orderBy = null)
 * @method Follower[]    findAll()
 * @method Follower[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FollowerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Follower::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(Follower $entity, bool $flush = true): void
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
    public function remove(Follower $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }
}
