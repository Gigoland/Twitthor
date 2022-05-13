<?php

namespace App\Service;

use App\Entity\User;
use Twig\Environment;
use App\Manager\TwApiCallManager;
use App\Repository\TwApiRepository;
use App\Api\Twitter\Api as TwitterApi;

class TwApiHtmlService
{
    public function __construct(
        private Environment $environment,
        private TwApiCallManager $twApiCallManager,
        private TwApiRepository $twApiRepository
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

        $html = 'No settings available. Check in menu "Configurations"';

        // Get activated settings
        $twApi = $this->twApiRepository->findActiveSettingsByUser($user, $for);

        // Not have settings
        if (!$twApi) {
            // Response
            return [
                'success' => true,
                'html' => $html,
            ];
        }

        // Load TwApiCall in manager
        $this->twApiCallManager->loadTwApiCall($twApi);
        $settings = [];

        // Check & generate select options
        switch ($for) {
            case 'following':
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWING;

                // Check & Update
                if ($this->twApiCallManager->isFollowingLimitExceeded()) {
                    // Set warning message
                    $settings['warning'] = 'You have exceeded the limit. Please try later.';
                } else {
                    // Set settings
                    $settings = [
                        'name' => $twApi->getName(),
                        'callCnt' => $this->twApiCallManager->getFollowingCnt(),
                    ];
                }
                break;
            case 'followers':
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;

                // Check & Update
                if ($this->twApiCallManager->isFollowingLimitExceeded()) {
                    // Set warning message
                    $settings['warning'] = 'You have exceeded the limit. Please try later.';
                } else {
                    // Set settings
                    $settings = [
                        'name' => $twApi->getName(),
                        'callCnt' => $this->twApiCallManager->getFollowersCnt(),
                    ];
                }
                break;
        }

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
