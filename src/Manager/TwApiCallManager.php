<?php

namespace App\Manager;

use App\Entity\TwApi;
use App\Entity\TwApiCall;
use Doctrine\ORM\EntityManagerInterface;

class TwApiCallManager
{
    public function __construct(
        private EntityManagerInterface $manager
    ) {}

    /**
     * Add new limits counter
     *
     * @param TwApi $twApi
     * @return void
     */
    public function newTwApiCall(
        TwApi $twApi
    ) {
        // Add call limit counts
        $twApiCall = new TwApiCall();
        $twApiCall->setTwApi($twApi);

        $this->manager->persist($twApiCall);
        $this->manager->flush();
    }

    /**
     * Add new limits counter
     *
     * @param TwApi $twApi
     * @return void
     */
    public function addOneForFollowing(
        TwApi $twApi
    ) {
        // Add call limit counts
        $twApiCall = new TwApiCall();
        $twApiCall->setTwApi($twApi);

        $count = $twApiCall->getFollowingCnt() + 1;
        $at = new \DateTimeImmutable();

        $twApiCall->setFollowingCnt($count);
        $twApiCall->setFollowingAt($at);

        $this->manager->persist($twApiCall);
        $this->manager->flush();
    }
}
