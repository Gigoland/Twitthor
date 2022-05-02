<?php

namespace App\Manager;

use App\Entity\User;
use App\Entity\Follow;
use App\Entity\TwUser;
use App\Repository\FollowRepository;
use Doctrine\ORM\EntityManagerInterface;

class FollowManager
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private FollowRepository $followRepository,
    ) {}

    /**
     * Get one follow by user & tw user
     *
     * @param User $user
     * @param TwUser $twUser
     * @return Follow|null
     */
    public function getFollowByUser(User $user, TwUser $twUser): ?Follow
    {
        return $this->followRepository->findOneBy([
            'user' => $user,
            'twUser' => $twUser,
        ]);
    }

    /**
     * Set process token to follow by twUser ids
     *
     * @param User $user
     * @param array $ids
     * @param string|null $token
     * @return void
     */
    public function setProcessTokenByTwUserIds(User $user, array $ids, ?string $token)
    {
        $this->followRepository->setProcessTokenByTwUserIds($user, $ids, $token);
    }

    /**
     * Set null for all follow by user
     *
     * @param User $user
     * @return integer
     */
    public function destroyProcessTokenByUser(User $user): int
    {
        return $this->followRepository->setNullProcessTokenByUser($user);
    }

    /**
     * Update no following by process token
     *
     * @param User $user
     * @param string $token
     * @return integer
     */
    public function updateNoFollowingByProcessToken(User $user, string $token): int
    {
        return $this->followRepository->updateNoFollowByProcessToken($user, $token, 'Following');
    }

    /**
     * Update no followers by process token
     *
     * @param User $user
     * @param string $token
     * @return integer
     */
    public function updateNoFollowersByProcessToken(User $user, string $token): int
    {
        return $this->followRepository->updateNoFollowByProcessToken($user, $token, 'Follower');
    }
}
