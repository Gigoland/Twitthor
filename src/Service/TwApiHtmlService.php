<?php

namespace App\Service;

use App\Api\Twitter\Api as TwitterApi;
use App\Entity\User;
use App\Repository\TwApiCallRepository;
use App\Repository\TwApiRepository;
use Twig\Environment;

class TwApiHtmlService
{
    public function __construct(
        private Environment $environment,
        private TwApiRepository $twApiRepository,
        private TwApiCallRepository $twApiCallRepository
    ) {}

    /**
     * Undocumented function
     *
     * @param User $user
     * @param string $for
     * @return array
     */
    public function getActiveSettingsByUser(User $user, ?string $for): array
    {
        if (!$user) {
            return $this->error('Error'); // @todo message
        }

        // Get activated settings
        $twApi = $this->twApiRepository->findActiveSettingsByUser($user, $for);
        $twApiCall = $twApi->getTwApiCall();
        $callIdsForInit = [];
        $settings = [];

        // Check & generate select options
        switch ($for) {
            case 'following':
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWING;

                // Check intervale
                if (!empty($twApiCall->getFollowingAt())
                 && $twApiCall->getFollowingAt() < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
                ) {
                    // For init in db
                    $callIdsForInit[] = $twApi->getId();
                    // Set zero
                    $twApiCall->setFollowingCnt(0);
                }

                // Check limit out
                if ($twApiCall->getFollowingCnt() < $callLimit) {
                    // Set settings
                    $settings = [
                        'name' => $twApi->getName(),
                        'callCnt' => $twApiCall->getFollowingCnt(),
                    ];
                } else {
                    // Set warning message
                    $settings['warning'] = 'You have exceeded the limit. Please try later.';
                }
                break;
            case 'followers':
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;

                // Check intervale
                if (!empty($twApiCall->getFollowersAt())
                 && $twApiCall->getFollowersAt() < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
                ) {
                    // For init in db
                    $callIdsForInit[] = $twApi->getId();
                    // Set zero
                    $twApiCall->setFollowersCnt(0);
                }

                // Check limit out
                if ($twApiCall->getFollowersCnt() < $callLimit) {
                    // Set settings
                    $settings = [
                        'name' => $twApi->getName(),
                        'callCnt' => $twApiCall->getFollowersCnt(),
                    ];
                } else {
                    // Set warning message
                    $settings['warning'] = 'You have exceeded the limit. Please try later.';
                }
                break;
        }

        // Init api calls
        if (!empty($callIdsForInit)) {
            switch ($for) {
                case 'following':
                    $this->twApiCallRepository->initFollowingCallsByIds($callIdsForInit);
                    break;
                case 'followers':
                    $this->twApiCallRepository->initFollowersCallsByIds($callIdsForInit);
                    break;
            }
        }

        $html = 'No settings available. Check in menu "Configurations"';

        // Generate settings info html
        if (!empty($settings)) {
            $html = $this->environment->render('theme/admin/common/custom/_tw_active_settings_info.html.twig', [
                'settings' => $settings,
                'twApiCallLimit' => $callLimit,
                'twApiCallIntervale' => $callInterval,
            ]);
        }

        // Response
        return [
            'success' => true,
            'html' => $html,
        ];
    }

    /**
     * Errors
     *
     * @param string $message
     * @return array
     */
    private function error(string $message): array
    {
        return [
            'success' => false,
            'message' => $message,
        ];
    }
}
