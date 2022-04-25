<?php

namespace App\Repository;

use PDO;
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
     * Get associative array
     *
     * @param User $user
     * @return array
     */
    public function findConsumerKeyByUser(User $user)
    {
        $conn = $this->getEntityManager()->getConnection();

        $stmt = $conn->prepare("
            SELECT id, consumer_key FROM tw_api
            WHERE user_id = :user_id
        ");
        $stmt->bindValue(':user_id', $user->getId(), \PDO::PARAM_INT);

        $result = $stmt->executeQuery();

        return $result->fetchAllKeyValue();
    }
}
