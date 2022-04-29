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
     * Get associative [key => value] array
     *
     * @param User $user
     * @return array
     */
/*
    public function getFollowingTwAccountIds(User $user): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $stmt = $conn->prepare("
            SELECT f.id, t.tw_account_id FROM follow f
                RIGHT JOIN tw_user t ON t.id = f.tw_user_id
            WHERE f.user_id = :user_id AND f.is_following = 1
        ");
        $stmt->bindValue(':user_id', $user->getId(), \PDO::PARAM_INT);

        $result = $stmt->executeQuery();

        return $result->fetchAllKeyValue();
    }
*/
    /**
     * Get associative [key => value] array
     *
     * @param User $user
     * @return array
     */
/*
    public function getFollowersTwAccountIds(User $user): array
    {
        $conn = $this->getEntityManager()->getConnection();

        $stmt = $conn->prepare("
            SELECT f.id, t.tw_account_id FROM follow f
                RIGHT JOIN tw_user t ON t.id = f.tw_user_id
            WHERE f.user_id = :user_id AND f.is_follower = 1
        ");
        $stmt->bindValue(':user_id', $user->getId(), \PDO::PARAM_INT);

        $result = $stmt->executeQuery();

        return $result->fetchAllKeyValue();
    }
*/
    /**
     * Update no following by ids array
     *
     * @param array $ids
     * @return array
     */
/*
    public function updateNoFollowingByIds(array $ids)
    {
        $conn = $this->getEntityManager()->getConnection();

        $stmt = $conn->prepare("
            UPDATE follow SET is_favorite = 0 WHERE id IN(:ids);
        ");
        $stmt->bindValue(':ids', $ids, Connection::PARAM_INT_ARRAY);

        return $stmt->executeQuery();
    }
*/
}
