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

        // Get activated settings
        $twApi = $this->twApiRepository->findActiveSettingsByUser($user, $for);

        // Not have settings
       if (!$twApi) {
            // Set warning message
            $warning = [
                'code' => 'notFoundSettings',
                'message' => 'No settings available. Check in menu "Configurations"',
            ];

            // Response
            return [
                'success' => true,
                'html' => $this->environment->render('theme/admin/common/custom/_tw_active_settings_info.html.twig', [
                    'warning' => $warning,
                ]),
                'warning' => $warning,
            ];
        }

        // Load TwApiCall in manager
        $this->twApiCallManager->loadTwApiCall($twApi);
        $warning = false;
        $html = false;
        $settings = [];

        // Check & generate select options
        switch ($for) {
            case 'following':
                // Check & Update
                if ($this->twApiCallManager->isFollowingLimitExceeded()) {
                    // Set warning message
                    $warning = [
                        'code' => 'exceededLimit' ,
                        'message' => 'You have exceeded the limit. Please try later.'
                    ];
                }

                // Set settings
                $settings = [
                    'name' => $twApi->getName(),
                    'callCnt' => $this->twApiCallManager->getFollowingCnt(),
                ];
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWING;
                break;
            case 'followers':
                // Check & Update
                if ($this->twApiCallManager->isFollowersLimitExceeded()) {
                    // Set warning message
                    $warning = [
                        'code' => 'exceededLimit' ,
                        'message' => 'You have exceeded the limit. Please try later.'
                    ];
                }

                // Set settings
                $settings = [
                    'name' => $twApi->getName(),
                    'callCnt' => $this->twApiCallManager->getFollowersCnt(),
                ];
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;
                break;
        }

        // Generate settings info html
        if (!empty($settings)) {
            $html = $this->environment->render('theme/admin/common/custom/_tw_active_settings_info.html.twig', [
                'settings' => $settings,
                'twApiCallLimit' => $callLimit,
                'twApiCallIntervale' => $callInterval,
                'warning' => $warning,
            ]);
        }

        // Response
        return [
            'success' => true,
            'html' => $html,
            'warning' => $warning,
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
            'error' => [
                'code' => 0,
                'message' => $message,
            ],
        ];
    }
}
