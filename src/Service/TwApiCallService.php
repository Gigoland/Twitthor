<?php

namespace App\Service;

use App\Utils\Url;
use App\Utils\File;
use App\Utils\Json;
use App\Entity\User;
use App\Entity\TwApi;
use App\Entity\Follow;
use App\Entity\TwUser;
use App\Manager\FollowManager;
use App\Manager\TwitthorManager;
use App\Manager\TwApiCallManager;
use App\Repository\TwUserRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Filesystem\Filesystem;

class TwApiCallService
{
    const OK = 'success';
    const KO = 'error';

    private TwitthorManager $twitthorManager;
    private string $avatarsPath;

    public function __construct(
        private EntityManagerInterface $entityManager,
        private TwUserRepository $twUserRepository,
        private FollowManager $followManager,
        private TwApiCallManager $twApiCallManager
    ) {}

    /**
     * Update by Api
     *
     * @param User $user
     * @param TwApi $twApi
     * @param string $nextToken
     * @param string $uploadsPath
     * @return array
     */
    public function updateFollowing(
        User $user,
        TwApi $twApi,
        string $uploadsPath
    ): array {
        if (!$twApi || !$user) {
            return $this->error(self::KO);
        }

        // Load TwApiCall in manager
        $this->twApiCallManager->loadTwApiCall($twApi);

        // Initialisation
        $this->twitthorManager = new TwitthorManager([
            'twitter_bearer_token' => $twApi->getBearerToken(),
        ]);

        $this->twitthorManager
            // Set for user twitter account
            ->setTwitterAccountId($twApi->getAccountId())
            // Set next pagination token
            ->setNextToken(
                $this->twApiCallManager->getNextToken()
            )
        ;

        // If NextToken is empty generate new process token (first call) (before api call only)
        if (empty($this->twApiCallManager->getNextToken())) {
            $this->twApiCallManager->setGeneratedProcessToken();
        }

        // Add api call count and save before call
        $this->twApiCallManager
            ->setPlusOneCallFollowing()
            ->saveTwApiCall()
        ;

        // Do call Twitter API & update following
        $this->avatarsPath = $uploadsPath . 'images/avatar/';
        $result = $this->updateFollowingByUser($user);

        // Set next token and save for api next call
        $this->twApiCallManager
            ->setNextToken(
                $this->twitthorManager->getNextToken()
            )
            ->saveTwApiCall()
        ;

        // Set process token to follow
        if (!empty($result['twUserIds'])) {
            $this->followManager->setProcessTokenByTwUserIds(
                $user,
                $result['twUserIds'],
                $this->twApiCallManager->getProcessToken()
            );
        }

        // If not have next token process is finished
        if (empty($this->twitthorManager->getNextToken())) {
            // Found and update no following users
            $this->followManager->updateNoFollowingByProcessToken(
                $user,
                $this->twApiCallManager->getProcessToken()
            );
            // Destroy process token for all follow
            $this->followManager->destroyProcessTokenByUser($user);
            // Set and save destroy process token for api call
            $this->twApiCallManager
                ->setDestroyProcessToken()
                ->saveTwApiCall()
            ;
        }

        // Response
        return [
            'code' => self::OK,
            'checked' => count($result['twUserIds']), // Total found
            'created' => count($result['insert']), // Follow created
            'updated' => count($result['update']), // Follow updated
            'callCount' => $this->twApiCallManager->getFollowingCnt(),
            'next' => !empty($this->twitthorManager->getNextToken()),
        ];
    }

    /**
     * Update by Api
     *
     * @param User $user
     * @param TwApi $twApi
     * @param string $nextToken
     * @param string $uploadsPath
     * @return array
     */
    public function updateFollowers(
        User $user,
        TwApi $twApi,
        string $uploadsPath
    ): array {
        if (!$twApi || !$user) {
            return $this->error(self::KO);
        }

        // Load TwApiCall in manager
        $this->twApiCallManager->loadTwApiCall($twApi);

        // Initialisation
        $this->twitthorManager = new TwitthorManager([
            'twitter_bearer_token' => $twApi->getBearerToken(),
        ]);

        $this->twitthorManager
            // Set for user twitter account
            ->setTwitterAccountId($twApi->getAccountId())
            // Set next pagination token
            ->setNextToken(
                $this->twApiCallManager->getNextToken()
            )
        ;

        // If NextToken iqs empty generate call token (first call) (before api call only)
        if (empty($this->twApiCallManager->getNextToken())) {
            $this->twApiCallManager->setGeneratedProcessToken();
        }

        // Add api call count + Save before call
        $this->twApiCallManager
            ->setPlusOneCallFollowers()
            ->saveTwApiCall()
        ;

        // Do update followers
        $this->avatarsPath = $uploadsPath . 'images/avatar/';
        $result = $this->updateFollowersByUser($user);

        // Set and save for api next call
        $this->twApiCallManager
            ->setNextToken(
                $this->twitthorManager->getNextToken()
            )
            ->saveTwApiCall()
        ;

        // Set process token to follow
        if (!empty($result['twUserIds'])) {
            $this->followManager->setProcessTokenByTwUserIds(
                $user,
                $result['twUserIds'],
                $this->twApiCallManager->getProcessToken()
            );
        }

        // Process finished
        if (empty($this->twApiCallManager->getNextToken())) {
            // Found and update no folower users
            $this->followManager->updateNoFollowersByProcessToken(
                $user,
                $this->twApiCallManager->getProcessToken()
            );
            // Destroy process token for all follow
            $this->followManager->destroyProcessTokenByUser($user);
            // Set and save destroy process token for api call
            $this->twApiCallManager
                ->setDestroyProcessToken()
                ->saveTwApiCall()
            ;
        }

        // Response
        return [
            'code' => self::OK,
            'checked' => count($result['twUserIds']), // Total found
            'created' => count($result['insert']), // Follow created
            'updated' => count($result['update']), // Follow updated
            'callCount' => $this->twApiCallManager->getFollowersCnt(),
            'next' => !empty($this->twApiCallManager->getNextToken()),
        ];
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
                'user.fields' => 'id,username,name,profile_image_url,entities,url,verified,created_at',
                'max_results' => 1000,
            ])
            ->setResponseFields([
                'id', 'username', 'name', 'profile_image_url', 'entities', 'url', 'verified', 'created_at',
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
                'user.fields' => 'id,username,name,profile_image_url,entities,url,verified,created_at',
                'max_results' => 1000,
            ])
            ->setResponseFields([
                'id', 'username', 'name', 'profile_image_url', 'entities', 'url', 'verified', 'created_at',
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
            'twUserIds' => [], // Total found
            'insert' => [], // Follow insert
            'update' => [], // Follow update
        ];

        if (empty($rows)) {
            return $result;
        }

        $fs = new Filesystem();
        $file = new File();
        $url = new Url();

        // Set max execution time
        if (count($rows) > 999) {
            set_time_limit(360);
        }

        // Save
        foreach ($rows as $row) {
            if (empty($row['id'])) {
                continue;
            }

            $saveTwUser = false;
            $saveFollow = false;

            // Find in db
            $twUser = $this->twUserRepository->findOneBy([
                'twAccountId' => $row['id']
            ]);

            // Get file full name
            $twProfileImage = $url->getPart($row['profile_image_url'], 'basename');

            // Entities
            if (empty($row['entities'])) {
                $twUrl = $url->trimW3($row['url']);
                $twTags = null;
            } else {
                // Get expended url
                $twUrl = $this->getExpendedUrl($row['entities']);

                // Get description tags
                $twTags = $this->getTags($row['entities']);
            }

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
                || $twUser->getTwTags() !== $twTags
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
                $twUser->setTwUrl($twUrl);
                $twUser->setTwTags($twTags);
                $twUser->setTwIsVerified($row['verified']);

                $this->entityManager->persist($twUser);
                $this->entityManager->flush();
            }

            $follow = $this->followManager->getFollowByUser($user, $twUser);

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

                $this->entityManager->persist($follow);
                $this->entityManager->flush();

                $result[$saveFollow][] = $follow->getId();
            }

            $result['twUserIds'][] = $twUser->getId();
        }

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
            'twUserIds' => [], // Total found
            'insert' => [], // Follow insert
            'update' => [], // Follow update
        ];

        if (empty($rows)) {
            return $result;
        }

        $fs = new Filesystem();
        $file = new File();
        $url = new Url();

        // Set max execution time
        if (count($rows) > 999) {
            set_time_limit(360);
        }

        // Save
        foreach ($rows as $row) {
            if (empty($row['id'])) {
                continue;
            }

            $saveTwUser = false;
            $saveFollow = false;

            // Find in db
            $twUser = $this->twUserRepository->findOneBy([
                'twAccountId' => $row['id']
            ]);

            // Get file full name
            $twProfileImage = $url->getPart($row['profile_image_url'], 'basename');

            // Entities
            if (empty($row['entities'])) {
                $twUrl = $url->trimW3($row['url']);
                $twTags = null;
            } else {
                // Get expended url
                $twUrl = $this->getExpendedUrl($row['entities']);

                // Get description tags
                $twTags = $this->getTags($row['entities']);
            }

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
                || $twUser->getTwTags() !== $twTags
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
                $twUser->setTwUrl($twUrl);
                $twUser->setTwTags($twTags);
                $twUser->setTwIsVerified($row['verified']);

                $this->entityManager->persist($twUser);
                $this->entityManager->flush();
            }

            $follow = $this->followManager->getFollowByUser($user, $twUser);

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

                $this->entityManager->persist($follow);
                $this->entityManager->flush();

                $result[$saveFollow][] = $follow->getId();
            }

            $result['twUserIds'][] = $twUser->getId();
        }

        return $result;
    }

    /**
     * Get url
     *
     * @param [type] $entities
     * @return string
     */
    private function getExpendedUrl($entities): ?string
    {
        if (empty($entities['url']['urls'])) {
            return null;
        }

        $url = new Url();

        // Get first item
        foreach ($entities['url']['urls'] as $item) {
            if (empty($item['expanded_url'])) {
                continue;
            }

            // Trim www.
            return $url->trimW3($item['expanded_url']);
        }
    }

    /**
     * Get tags
     *
     * @param [type] $entities
     * @return string
     */
    private function getTags($entities): ?string
    {
        if (empty($entities['description']['hashtags'])) {
            return null;
        }

        $tags = [];

        foreach ($entities['description']['hashtags'] as $item) {
            if (empty($item['tag'])) {
                continue;
            }

            $tags[] = $item['tag'];
        }

        if (empty($tags)) {
            return null;
        }

        $json = new Json();

        return $json->encode($tags);
    }

    /**
     * Errors
     *
     * @param [type] $code
     * @return array
     */
    private function error($code): array
    {
        return [
            'code' => $code,
        ];
    }
}
