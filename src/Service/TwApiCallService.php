<?php

namespace App\Service;

use App\Utils\Url;
use App\Utils\File;
use App\Utils\Json;
use App\Entity\User;
use App\Entity\TwApi;
use App\Entity\Follow;
use App\Entity\TwUser;
use App\Manager\TwitthorManager;
use App\Manager\TwApiCallManager;
use App\Repository\FollowRepository;
use App\Repository\TwUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\JsonResponse;

class TwApiCallService
{
    const OK = 'success';
    const KO = 'error';

    private TwitthorManager $twitthorManager;
    private string $avatarsPath;

	public function __construct(
        private EntityManagerInterface $manager,
        private TwUserRepository $twUserRepository,
        private FollowRepository $followRepository,
        private TwApiCallManager $twApiCallManager
    ) {}

    /**
     * Update by Api
     *
     * @param User $user
     * @param TwApi $twApi
     * @param string $nextToken
     * @param string $uploadsPath
     * @param string $rediretPath
     * @return JsonResponse
     */
    public function updateFollowing(
        User $user,
        TwApi $twApi,
        ?string $nextToken,
        string $uploadsPath,
        string $rediretPath
    ): JsonResponse {
        if (!$twApi || !$user) {
            return $this->error(self::KO);
        }

        // Initialisation
        $this->twitthorManager = new TwitthorManager([
            'twitter_bearer_token' => $twApi->getBearerToken(),
        ]);

        $this->twitthorManager
            // Set for user twitter account
            ->setTwitterAccountId($twApi->getAccountId())
            // Set next pagination token
            ->setNextToken($nextToken)
        ;

        // Do update
        $this->avatarsPath = $uploadsPath . 'images/avatar/';
        $result = $this->updateFollowingByUser($user);

        return new JsonResponse([
            'code' => self::OK,
            'checked' => $result['check'],
            'created' => count($result['insert']),
            'updated' => count($result['update']),
            'nextToken' => $this->twitthorManager->getNextToken(),
            'path' => $rediretPath,
        ]);
    }

    /**
     * Update by Api
     *
     * @param User $user
     * @param TwApi $twApi
     * @param string $nextToken
     * @param string $uploadsPath
     * @param string $rediretPath
     * @return JsonResponse
     */
    public function updateFollowers(
        User $user,
        TwApi $twApi,
        ?string $nextToken,
        string $uploadsPath,
        string $rediretPath
    ): JsonResponse {
        if (!$twApi || !$user) {
            return $this->error(self::KO);
        }

        // Initialisation
        $this->twitthorManager = new TwitthorManager([
            'twitter_bearer_token' => $twApi->getBearerToken(),
        ]);

        $this->twitthorManager
            // Set for user twitter account
            ->setTwitterAccountId($twApi->getAccountId())
            // Set next pagination token
            ->setNextToken($nextToken)
        ;

        // Do update
        $this->avatarsPath = $uploadsPath . 'images/avatar/';
        $result = $this->updateFollowersByUser($user);

        return new JsonResponse([
            'code' => self::OK,
            'checked' => $result['check'],
            'created' => count($result['insert']),
            'updated' => count($result['update']),
            'nextToken' => $this->twitthorManager->getNextToken(),
            'path' => $rediretPath,
        ]);
    }

    /**
     * Update all following with help Twitthor
     *
     * @param User $user
     * @return array
     */
    private function updateFollowingByUser(User $user): array
    {
        $following = $this->twitthorManager
            ->setSettings([
                'max_pagination' => 1,
                'sleep_pagination_token' => 5,
            ])
            ->clearQueryFields()
            ->setQueryFields([
                'user.fields' => 'id,name,username,verified,profile_image_url,entities,created_at',
                'max_results' => 1000,
            ])
            ->setResponseFields([
                'id', 'name', 'username', 'verified', 'profile_image_url', 'entities', 'created_at',
            ])
            ->getFollowing()
        ;

        return $this->saveFollowing($user, $following);
    }

    /**
     * Update all following with help Twitthor
     *
     * @param User $user
     * @return array
     */
    private function updateFollowersByUser(User $user): array
    {
        $following = $this->twitthorManager
            ->setSettings([
                'max_pagination' => 1,
                'sleep_pagination_token' => 5,
            ])
            ->clearQueryFields()
            ->setQueryFields([
                'user.fields' => 'id,name,username,verified,profile_image_url,entities,created_at',
                'max_results' => 1000,
            ])
            ->setResponseFields([
                'id', 'name', 'username', 'verified', 'profile_image_url', 'entities', 'created_at',
            ])
            ->getFollowers()
        ;

        return $this->saveFollowers($user, $following);
    }

    /**
     * Save all following
     *
     * @param User $user
     * @param array $rows
     * @return array
     */
    private function saveFollowing(User $user, array $rows): array
    {
        $result = [
            'check' => 0,
            'insert' => [],
            'update' => [],
        ];

        if (empty($rows)) {
            return $result;
        }

        $fs = new Filesystem();
        $file = new File();
        $url = new Url();

        // Get all following from db before update
        //$noFollowingTwUserIds = $this->twUserRepository->getFollowingTwAccountIds($user);

        // Set max execution time
        if (count($rows) > 999) {
            set_time_limit(360);
        }

        // Save
        foreach ($rows as $row) {
            if (empty($row['id'])) {
                continue;
            }

            // Found no following
            //if (isset($noFollowingTwUserIds[$row['id']])) {
            //    unset($noFollowingTwUserIds[$row['id']]);
            //}

            $saveTwUser = false;
            $saveFollow = false;

            // Find in db
            $twUser = $this->twUserRepository->findOneBy([
                'twUserId' => $row['id']
            ]);

            // Get file full name
            $twProfileImage = $url->getPart($row['profile_image_url'], 'basename');

            // Get expended url
            $twUrl = $this->getExpendedUrl($row['entities']);

            // Get description tags
            $twTags = $this->getTags($row['entities']);

            if (!$twUser) {
                // New
                $twUser = new TwUser();
                $twUser->setTwAccountId($row['id']);
                $twUser->setTwCreatedAt(
                    new \DateTimeImmutable($row['created_at'])
                );
                $saveTwUser = 'insert';
            } elseif ($twUser->getTwUsername() !== $row['username']
                || $twUser->getTwName() !== $row['name']
                || $twUser->getTwProfileImage() !== $twProfileImage
                || $twUser->getTwUrl() !== $twUrl
                || $twUser->getTwIsVerified() !== $row['verified']
            ) {
                // Update
                $saveTwUser = 'update';
            }

            if ($saveTwUser) {
                // Delete avatar filder before upload avatar image
                if ($saveTwUser === 'insert'
                 || $twUser->getTwProfileImage() !== $twProfileImage
                ) {
                    if ($saveTwUser === 'update') {
                        $fs->remove($this->avatarsPath . $row['id'] . '/');
                    }

                    $file->copyImageByUrl(
                        $row['profile_image_url'],
                        $this->avatarsPath . $row['id'] . '/' . $twProfileImage,
                        true
                    );
                }

                $twUser->setTwUsername($row['username']);
                $twUser->setTwName($row['name']);
                $twUser->setTwProfileImage($twProfileImage);
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
                $saveFollow = 'insert';
            } elseif ($follow->getIsFollowing() !== true) {
                // Update
                $saveFollow = 'update';
            }

            if ($saveFollow) {
                $follow->setIsFollowing(true);

                $this->manager->persist($follow);
                $this->manager->flush();

                $result[$saveFollow][] = $follow->getId();
            }

            $result['check']++;
        }

        // Update no following
        //$this->twUserRepository->updateNoFollowingByIds($noFollowingTwUserIds);

        return $result;
    }

    /**
     * Save all following
     *
     * @param User $user
     * @param array $rows
     * @return array
     */
    private function saveFollowers(User $user, array $rows): array
    {
        $result = [
            'check' => 0,
            'insert' => [],
            'update' => [],
        ];

        if (empty($rows)) {
            return $result;
        }

        $fs = new Filesystem();
        $file = new File();
        $url = new Url();

        // Get all followers from db before update
        //$noFollowersTwUserIds = $this->twUserRepository->getFollowersTwAccountIds($user);

        // Set max execution time
        if (count($rows) > 999) {
            set_time_limit(360);
        }

        // Save
        foreach ($rows as $row) {
            if (empty($row['id'])) {
                continue;
            }

            // Found no follower
            //if (isset($noFollowersTwUserIds[$row['id']])) {
            //    unset($noFollowersTwUserIds[$row['id']]);
            //}

            $saveTwUser = false;
            $saveFollow = false;

            // Find in db
            $twUser = $this->twUserRepository->findOneBy([
                'twUserId' => $row['id']
            ]);

            // Get file full name
            $twProfileImage = $url->getPart($row['profile_image_url'], 'basename');

            // Get expended url
            $twUrl = $this->getExpendedUrl($row['entities']);

            if (!$twUser) {
                // New
                $twUser = new TwUser();
                $twUser->setTwAccountId($row['id']);
                $twUser->setTwCreatedAt(
                    new \DateTimeImmutable($row['created_at'])
                );
                $saveTwUser = 'insert';
            } elseif ($twUser->getTwUsername() !== $row['username']
                || $twUser->getTwName() !== $row['name']
                || $twUser->getTwProfileImage() !== $twProfileImage
                || $twUser->getTwUrl() !== $twUrl
                || $twUser->getTwIsVerified() !== $row['verified']
            ) {
                // Update
                $saveTwUser = 'update';
            }

            if ($saveTwUser) {
                // Delete avatar filder before upload avatar image
                if ($saveTwUser === 'insert'
                 || $twUser->getTwProfileImage() !== $twProfileImage
                ) {
                    if ($saveTwUser === 'update') {
                        $fs->remove($this->avatarsPath . $row['id'] . '/');
                    }

                    $file->copyImageByUrl(
                        $row['profile_image_url'],
                        $this->avatarsPath . $row['id'] . '/' . $twProfileImage,
                        true
                    );
                }

                $twUser->setTwUsername($row['username']);
                $twUser->setTwName($row['name']);
                $twUser->setTwProfileImage($twProfileImage);
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
                $saveFollow = 'insert';
            } elseif ($follow->getIsFollower() !== true) {
                // Update
                $saveFollow = 'update';
            }

            if ($saveFollow) {
                $follow->setIsFollower(true);

                $this->manager->persist($follow);
                $this->manager->flush();

                $result[$saveFollow][] = $follow->getId();
            }

            $result['check']++;
        }

        return $result;
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

    /**
     * Get url
     *
     * @param [type] $entities
     * @return string
     */
    private function getExpendedUrl($entities): string
    {
        $url = new Url();

        // Trim www.
        return $url->trimW3($entities['url'][0]);
    }

    /**
     * Get tags
     *
     * @param [type] $entities
     * @return void
     */
    private function getTags($entities): ?string
    {
        if (empty($entities['description']['hashtags'])) {
            return null;
        }

        $tags = [];

        foreach ($entities['description']['hashtags'] as $item) {
            $tags[] = $item['tag'];
        }

        if (empty($tags)) {
            return null;
        }

        $json = new Json();

        return $json->encode($tags);
    }
}
