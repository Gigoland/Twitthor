<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\TwApi;
use App\Entity\Follow;
use App\Entity\TwUser;
use App\Manager\Twitthor;
use App\Repository\FollowRepository;
use App\Repository\TwUserRepository;
use App\Utils\VarString;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

class TwApiCallService
{
    const OK = 'success';
    const KO = 'error';

    /**
     * @var Twitthor $twitthor
     */
    private $twitthor;

	public function __construct(
        private EntityManagerInterface $manager,
        private TwUserRepository $twUserRepository,
        private FollowRepository $followRepository
    ) {}

    /**
     * Update by Api
     *
     * @param User $user
     * @param TwApi $twApi
     * @param string $rediretPath
     * @return JsonResponse
     */
    public function updateFollowing(
        User $user,
        TwApi $twApi,
        string $rediretPath
    ): JsonResponse {
        if (!$twApi || !$user) {
            return $this->error(self::KO);
        }

        // Initialisation
        $this->twitthor = new Twitthor([
            'twitter_consumer_key' => $twApi->getConsumerKey(),
            'twitter_consumer_secret' => $twApi->getConsumerSecret(),
            'twitter_bearer_token' => $twApi->getBearerToken(),
            'twitter_access_token' => $twApi->getAccessToken(),
            'twitter_access_token_secret' => $twApi->getAccessTokenSecret(),
        ]);

        // Set for user twitter account
        $this->twitthor->setTwitterAccountId($twApi->getAccountId());

        // Do update
        $result = $this->updateFollowingByUser($user);

        return new JsonResponse([
            'result' => $result,
            'code' => self::OK,
            'path' => $rediretPath,
        ]);
    }

    /**
     * Update all following with help Twitthor
     *
     * @param User $user
     * @return void
     */
    private function updateFollowingByUser(User $user)
    {
        $following = $this->twitthor
            ->setSettings([
                'max_pagination' => 1,
                'sleep_pagination' => 5,
            ])
            ->clearQueryFields()
            ->setQueryFields([
                'user.fields' => 'id,name,username,verified,profile_image_url,url,created_at',
                'max_results' => 1000,
            ])
            ->setResponseFields([
                'id', 'name', 'username', 'verified', 'profile_image_url', 'url', 'created_at',
            ])
            ->getFollowing()
        ;

        return $this->saveFollowing($user, $following);
    }

    /**
     * Save all following
     *
     * @param User $user
     * @param array $rows
     * @return void
     */
    private function saveFollowing(User $user, array $rows)
    {
        $result = [];

        $varString = new VarString();

        // Save
        foreach ($rows as $row) {
            $saveTwUser = false;
            $saveFollow = false;

            // Find in db
            $twUser = $this->twUserRepository->findOneBy([
                'twUserId' => $row['id']
            ]);

            // Trim some useless strings
            $twProfileImageUrl = str_replace(
                'pbs.twimg.com/profile_images/',
                '',
                $varString->trimUrlProtocol($row['profile_image_url'])
            );
            // Trim www.
            $twUrl = $varString->trimUrlW3($row['url']);

            if (!$twUser) {
                // New
                $twUser = new TwUser();
                $twUser->setTwUserId($row['id']);
                $twUser->setTwCreatedAt(
                    new \DateTimeImmutable($row['created_at'])
                );
                $saveTwUser = true;
            } elseif ($twUser->getTwUsername() !== $row['username']
                || $twUser->getTwName() !== $row['name']
                || $twUser->getTwProfileImageUrl() !== $twProfileImageUrl
                || $twUser->getTwUrl() !== $twUrl
                || $twUser->getTwIsVerified() !== $row['verified']
            ) {
                // Update
                $saveTwUser = true;
            }

            if ($saveTwUser) {
                $twUser->setTwUsername($row['username']);
                $twUser->setTwName($row['name']);
                $twUser->setTwProfileImageUrl($twProfileImageUrl);
                $twUser->seTwtUrl($twUrl);

                if (isset($row['verified'])) {
                    $twUser->setTwIsVerified($row['verified']);
                }

                $this->manager->persist($twUser);
                $this->manager->flush();
            }

            $follow = $this->followRepository->findOneBy([
                'user' => $user,
                'twUser' => $twUser,
            ]);

            if (!$follow) {
                // New
                $follow = new Follow();
                $follow->setUser($user); // Connected user
                $follow->setTwUser($twUser); // Twitter user
                $saveFollow = true;
            } elseif ($follow->getIsFollowing() !== true) {
                // Update
                $saveFollow = true;
            }

            if ($saveFollow) {
                $follow->setIsFollowing(true);

                $this->manager->persist($follow);
                $this->manager->flush();
            }

            $result[] = $follow->getId();
        }

        return $result;
    }

    /**
     * Save all followers
     *
     * @param array $queryFields
     *
     * @return array
     */
    private function saveFollowers(array $queryFields)
    {

    }


        /**
     * Get find who’s not following back
     *
     * @param int $options
     *
     * @return array
     */
    public function getPlatonicSubscriptions(array $options = [])
    {
        // Search platonic subscriptions
        $platonicUsers = $this->findPlatonicUsers($options);

        return [
            'platonic_users' => $platonicUsers,
        ];
    }

        /**
     * Found platonic subscriptions
     *
     * @param array $options
     *
     * @return array
     */
    private function findPlatonicUsers($options)
    {
        /*
        // Storage
        $storage = new Following();

        return $storage->getPlatonicUsers($options);
        */
    }

    /**
     * @return JsonResponse
     */
    private function error($code): JsonResponse
    {
        return new JsonResponse([
            'code' => $code,
        ]);
    }
}
