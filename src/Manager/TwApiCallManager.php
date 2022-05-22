<?php

namespace App\Manager;

use App\Api\Twitter\TwitterApi;
use App\Entity\TwApi;
use App\Entity\TwApiCall;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Csrf\TokenGenerator\TokenGeneratorInterface;

class TwApiCallManager
{
    private TwApiCall $twApiCall;

    public function __construct(
        private TokenGeneratorInterface $tokenGenerator,
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Add new limits counter
     */
    public function createTwApiCall(TwApi $twApi)
    {
        // Add call limit counts
        $twApiCall = new TwApiCall();
        $twApiCall->setTwApi($twApi);

        $this->entityManager->persist($twApiCall);
        $this->entityManager->flush();
    }

    /**
     * Undocumented function
     */
    public function loadTwApiCall(TwApi $twApi): self
    {
        $this->twApiCall = $this->entityManager
            ->getRepository(TwApiCall::class)
            ->findOneBy(['twApi' => $twApi])
        ;

        return $this;
    }

    /**
     * Set next_token
     */
    public function setNextToken(?string $nextToken): self
    {
        // Set
        $this->twApiCall->setNextToken($nextToken);

        return $this;
    }

    /**
     * Get api next call token
     */
    public function getNextToken(): ?string
    {
        return $this->twApiCall->getNextToken();
    }

    /**
     * Genrate api call process token
     * For check follow updating
     * For check api multi call
     */
    public function setGeneratedProcessToken(): self
    {
        // Set
        $this->twApiCall->setProcessToken(
            $this->tokenGenerator->generateToken()
        );

        return $this;
    }

    /**
     * Get api call process token
     */
    public function getProcessToken(): ?string
    {
        return  $this->twApiCall->getProcessToken();
    }

    /**
     * Set null to api call process token
     */
    public function setDestroyProcessToken(): self
    {
        $this->twApiCall->setProcessToken(null);

        return $this;
    }

    /**
     * Add new limits counter
     */
    public function setPlusOneCallFollowing(): self
    {
        // Add call limit counts
        $count = $this->twApiCall->getFollowingCnt() + 1;
        $at = new \DateTimeImmutable();

        $this->twApiCall
            ->setFollowingCnt($count)
            ->setFollowingAt($at)
        ;

        return $this;
    }

    /**
     * Get api call count int
     */
    public function getFollowingCnt(): int
    {
        return $this->twApiCall->getFollowingCnt();
    }

    /**
     * Add new limits counter
     */
    public function setPlusOneCallFollowers(): self
    {
        // Add call limit counts
        $count = $this->twApiCall->getFollowersCnt() + 1;
        $at = new \DateTimeImmutable();

        $this->twApiCall
            ->setFollowersCnt($count)
            ->setFollowersAt($at)
        ;

        return $this;
    }

    /**
     * Get api call count int
     */
    public function getFollowersCnt(): int
    {
        return $this->twApiCall->getFollowersCnt();
    }

    /**
     * Add new limits counter
     */
    public function setPlusOneCallUnfollow(): self
    {
        // Add call limit counts
        $count = $this->twApiCall->getUnfollowCnt() + 1;
        $at = new \DateTimeImmutable();

        $this->twApiCall
            ->setUnfollowCnt($count)
            ->setUnfollowAt($at)
        ;

        return $this;
    }

    /**
     * Get api call count int
     */
    public function getUnfollowCnt(): int
    {
        return $this->twApiCall->getUnfollowCnt();
    }

    /**
     * Save TwApiCall
     */
    public function saveTwApiCall(): TwApiCall
    {
        $this->entityManager->persist($this->twApiCall);
        $this->entityManager->flush();

        return $this->twApiCall;
    }

    /**
     * Check & Update - Following
     */
    public function isFollowingLimitExceeded(): bool
    {
        list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWING;

        // Check intervale
        if (!empty($this->twApiCall->getFollowingAt())
         && $this->twApiCall->getFollowingAt() < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
        ) {
            // Init
            $this->twApiCall
                ->setFollowingCnt(0)
                ->setFollowingAt(null)
            ;
            $this->saveTwApiCall();
        }

        // Check limit out
        if ($this->twApiCall->getFollowingCnt() < $callLimit) {
            return false;
        }

        return true;
    }

    /**
     * Check & Update - Followers
     */
    public function isFollowersLimitExceeded(): bool
    {
        list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;

        // Check intervale
        if (!empty($this->twApiCall->getFollowersAt())
         && $this->twApiCall->getFollowersAt() < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
        ) {
            // Init
            $this->twApiCall
                ->setFollowersCnt(0)
                ->setFollowersAt(null)
            ;
            $this->saveTwApiCall();
        }

        // Check limit out
        if ($this->twApiCall->getFollowersCnt() < $callLimit) {
            return false;
        }

        return true;
    }

    /**
     * Check & Update - Followers
     */
    public function isUnfollowLimitExceeded(): bool
    {
        list($callLimit, $callInterval) = TwitterApi::LIMIT_USER_UNFOLLOW;

        // Check intervale
        if (!empty($this->twApiCall->getUnfollowAt())
         && $this->twApiCall->getUnfollowAt() < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
        ) {
            // Init
            $this->twApiCall
                ->setUnfollowCnt(0)
                ->setUnfollowAt(null)
            ;
            $this->saveTwApiCall();
        }

        // Check limit out
        if ($this->twApiCall->getUnfollowCnt() < $callLimit) {
            return false;
        }

        return true;
    }
}
