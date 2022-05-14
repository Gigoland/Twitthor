<?php

namespace App\Repository;

use App\Entity\TwApiOAuth2;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Exception\ORMException;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<TwApiOAuth2>
 *
 * @method TwApiOAuth2|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwApiOAuth2|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwApiOAuth2[]    findAll()
 * @method TwApiOAuth2[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwApiOAuth2Repository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TwApiOAuth2::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(TwApiOAuth2 $entity, bool $flush = false): void
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
    public function remove(TwApiOAuth2 $entity, bool $flush = false): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

//    /**
//     * @return TwApiOAuth2[] Returns an array of TwApiOAuth2 objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?TwApiOAuth2
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
