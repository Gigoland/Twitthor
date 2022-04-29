<?php

namespace App\Manager;

use App\Entity\TwApi;
use App\Entity\TwApiCall;
use Doctrine\ORM\EntityManagerInterface;

class TwApiCallManager
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Add new limits counter
     *
     * @param TwApi $twApi
     * @return void
     */
    public function newTwApiCall(TwApi $twApi)
    {
        // Add call limit counts
        $twApiCall = new TwApiCall();
        $twApiCall->setTwApi($twApi);

        $this->entityManager->persist($twApiCall);
        $this->entityManager->flush();
    }

    /**
     * Add new limits counter
     *
     * @param TwApi $twApi
     * @return integer
     */
    public function appendOneCallFollowing(TwApi $twApi): int
    {
        $twApiCall = $this->entityManager
            ->getRepository(TwApiCall::class)
            ->findOneBy(['twApi' => $twApi])
        ;

        // Add call limit counts
        $twApiCall->setTwApi($twApi);

        $count = $twApiCall->getFollowingCnt() + 1;
        $at = new \DateTimeImmutable();

        $twApiCall->setFollowingCnt($count);
        $twApiCall->setFollowingAt($at);

        $this->entityManager->persist($twApiCall);
        $this->entityManager->flush();

        return $twApiCall->getFollowingCnt();
    }

    /**
     * Add new limits counter
     *
     * @param TwApi $twApi
     * @return integer
     */
    public function appendOneCallFollowers(TwApi $twApi): int
    {
        $twApiCall = $this->entityManager
            ->getRepository(TwApiCall::class)
            ->findOneBy(['twApi' => $twApi])
        ;

        // Add call limit counts
        $twApiCall->setTwApi($twApi);

        $count = $twApiCall->getFollowersCnt() + 1;
        $at = new \DateTimeImmutable();

        $twApiCall->setFollowersCnt($count);
        $twApiCall->setFollowersAt($at);

        $this->entityManager->persist($twApiCall);
        $this->entityManager->flush();

        return $twApiCall->getFollowersCnt();
    }
}
