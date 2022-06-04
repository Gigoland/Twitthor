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
     */
    public function setProcessTokenByTwUserIds(User $user, array $ids, ?string $token)
    {
        $this->followRepository->setProcessTokenByTwUserIds($user, $ids, $token);
    }

    /**
     * Set null for all follow by user
     */
    public function destroyProcessTokenByUser(User $user): int
    {
        return $this->followRepository->setNullProcessTokenByUser($user);
    }

    /**
     * Update no following by process token
     */
    public function updateNoFollowingByProcessToken(User $user, string $token): int
    {
        return $this->followRepository->updateNoFollowByProcessToken($user, $token, 'Following');
    }

    /**
     * Update no followers by process token
     */
    public function updateNoFollowersByProcessToken(User $user, string $token): int
    {
        return $this->followRepository->updateNoFollowByProcessToken($user, $token, 'Follower');
    }

    /**
     * Update is_following
     */
    public function updateIsFollowingById(Follow $follow, bool $isFollowing)
    {
        $follow ->setIsFollowing($isFollowing);

        $this->entityManager->persist($follow);
        $this->entityManager->flush();
    }
}
