<?php

namespace App\Manager;

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

        $this->twApiCall->setFollowingCnt($count);
        $this->twApiCall->setFollowingAt($at);

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

        $this->twApiCall->setFollowersCnt($count);
        $this->twApiCall->setFollowersAt($at);

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
}
