<?php

namespace App\Repository;

use App\Entity\TwApiCall;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\OptimisticLockException;
use Doctrine\ORM\ORMException;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TwApiCall|null find($id, $lockMode = null, $lockVersion = null)
 * @method TwApiCall|null findOneBy(array $criteria, array $orderBy = null)
 * @method TwApiCall[]    findAll()
 * @method TwApiCall[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TwApiCallRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TwApiCall::class);
    }

    /**
     * @throws ORMException
     * @throws OptimisticLockException
     */
    public function add(TwApiCall $entity, bool $flush = true): void
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
    public function remove(TwApiCall $entity, bool $flush = true): void
    {
        $this->_em->remove($entity);
        if ($flush) {
            $this->_em->flush();
        }
    }

    /**
     * Init following calls by TwApi ids
     *
     * @param array $ids
     * @return int
     */
    public function initFollowingCallsByIds(array $ids): int
    {
        return $this->initApiCallsByIds($ids, 'following');
    }

    /**
     * Init followers calls by TwApi ids
     *
     * @param array $ids
     * @return int
     */
    public function initFollowersCallsByIds(array $ids): int
    {
        return $this->initApiCallsByIds($ids, 'followers');
    }

    /**
     * Init calls by TwApi ids
     *
     * @param array $ids
     * @param string $for
     * @return int
     */
    private function initApiCallsByIds(array $ids, string $for): int
    {
        $qb = $this->createQueryBuilder('t');
        $qb
            ->update()
            ->set('t.' . $for . 'Cnt', ':cnt')
            ->set('t.' . $for . 'At', ':at')
            ->where(
                $qb->expr()->in('t.twApi', ':ids')
            )
            ->setParameter(':cnt', 0, \PDO::PARAM_INT)
            ->setParameter(':at', null, \PDO::PARAM_NULL)
            ->setParameter(':ids', $ids, \Doctrine\DBAL\Connection::PARAM_INT_ARRAY)
        ;

        return $qb
            ->getQuery()
            ->execute()
        ;
    }
}
