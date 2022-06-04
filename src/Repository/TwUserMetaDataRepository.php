<?php

namespace App\Repository;

use App\Entity\TwUserMetaData;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Exception\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TwUserMetaData>
 *
 * @method TwUserMetaData|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwUserMetaData|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwUserMetaData[]    findAll()
 * @method TwUserMetaData[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwUserMetaDataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TwUserMetaData::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(TwUserMetaData $entity, bool $flush = false): void
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
    public function remove(TwUserMetaData $entity, bool $flush = false): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }
}
