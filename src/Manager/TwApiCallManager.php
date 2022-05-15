<?php

namespace App\Manager;

use App\Api\Twitter\Api as TwitterApi;
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
     *
     * @param TwApi $twApi
     * @return void
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
     *
     * @param TwApi $twApi
     * @return TwApiCallManager
     */
    public function loadTwApiCall(TwApi $twApi): TwApiCallManager
    {
        $this->twApiCall = $this->entityManager
            ->getRepository(TwApiCall::class)
            ->findOneBy(['twApi' => $twApi])
        ;

        return $this;
    }

    /**
     * Set next_token
     *
     * @param string|null $nextToken
     * @return TwApiCallManager
     */
    public function setNextToken(?string $nextToken): TwApiCallManager
    {
        // Set
        $this->twApiCall->setNextToken($nextToken);

        return $this;
    }

    /**
     * Get api next call token
     *
     * @return string|null
     */
    public function getNextToken(): ?string
    {
        return $this->twApiCall->getNextToken();
    }

    /**
     * Genrate api call process token
     * For check follow updating
     * For check api multi call
     *
     * @return TwApiCallManager
     */
    public function setGeneratedProcessToken(): TwApiCallManager
    {
        // Set
        $this->twApiCall->setProcessToken(
            $this->tokenGenerator->generateToken()
        );

        return $this;
    }

    /**
     * Get api call process token
     *
     * @return string|null
     */
    public function getProcessToken(): ?string
    {
        return  $this->twApiCall->getProcessToken();
    }

    /**
     * Set null to api call process token
     *
     * @return TwApiCallManager
     */
    public function setDestroyProcessToken(): TwApiCallManager
    {
        $this->twApiCall->setProcessToken(null);

        return $this;
    }

    /**
     * Add new limits counter
     *
     * @return TwApiCallManager
     */
    public function setPlusOneCallFollowing(): TwApiCallManager
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
     *
     * @return integer
     */
    public function getFollowingCnt(): int
    {
        return $this->twApiCall->getFollowingCnt();
    }

    /**
     * Add new limits counter
     *
     * @return TwApiCallManager
     */
    public function setPlusOneCallFollowers(): TwApiCallManager
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
     *
     * @return integer
     */
    public function getFollowersCnt(): int
    {
        return $this->twApiCall->getFollowersCnt();
    }

    /**
     * Add new limits counter
     *
     * @return TwApiCallManager
     */
    public function setPlusOneCallUnfollow(): TwApiCallManager
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
     *
     * @return integer
     */
    public function getUnfollowCnt(): int
    {
        return $this->twApiCall->getUnfollowCnt();
    }

    /**
     * Save TwApiCall
     *
     * @return TwApiCall
     */
    public function saveTwApiCall(): TwApiCall
    {
        $this->entityManager->persist($this->twApiCall);
        $this->entityManager->flush();

        return $this->twApiCall;
    }

    /**
     * Check & Update - Following
     *
     * @return boolean
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
     *
     * @return boolean
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
     *
     * @return boolean
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
