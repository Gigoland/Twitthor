<?php

namespace App\Service;

use App\Entity\User;
use App\Entity\TwApi;
use App\Utils\JsonResponseUtil;
use App\Manager\TwApiCallManager;
use App\Repository\TwApiRepository;
use App\Api\Twitter\TwitterApi;
use Twig\Environment;

class TwApiHtmlService
{
    public function __construct(
        private Environment $environment,
        private TwApiCallManager $twApiCallManager,
        private TwApiRepository $twApiRepository
    ) {}

    /**
     * Html for updating following/followers/platonics
     */
    public function getActiveSettingsByUser(User $user, ?string $for): array
    {
        if (!$user) {
            return JsonResponseUtil::getError('Error', 'Error'); // @todo message
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
                        'code' => 'exceededLimit',
                        'message' => 'You have exceeded the rate limit. Please try later.',
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
                        'code' => 'exceededLimit',
                        'message' => 'You have exceeded the rate limit. Please try later.',
                    ];
                }

                // Set settings
                $settings = [
                    'name' => $twApi->getName(),
                    'callCnt' => $this->twApiCallManager->getFollowersCnt(),
                ];
                list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;
                break;
            case 'platonics':
                // Return from methode
                return $this->getActiveSettingsByUserForPlatonics($twApi);
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
     * Html for updationg platonics only
     */
    private function getActiveSettingsByUserForPlatonics(TwApi $twApi): array
    {
        $warning = false;
        $html = false;

        // Check & Update
        if ($this->twApiCallManager->isFollowingLimitExceeded()
         || $this->twApiCallManager->isFollowersLimitExceeded()
        ) {
            // Set warning message
            $warning = [
                'code' => 'exceededLimit',
                'message' => 'You have exceeded the rate limit. Please try later.',
            ];
        }

        // Set settings for following
        list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWING;

        $following = [
            'callCnt' => $this->twApiCallManager->getFollowingCnt(),
            'callLimit' => $callLimit,
            'callIntervale' => $callInterval,
        ];

        // Set settings for followers
        list($callLimit, $callInterval) = TwitterApi::LIMIT_USERS_FOLLOWERS;

        $followers = [
            'callCnt' => $this->twApiCallManager->getFollowersCnt(),
            'callLimit' => $callLimit,
            'callIntervale' => $callInterval,
        ];

        // Generate settings info html
        $html = $this->environment->render('theme/admin/common/custom/_tw_active_settings_info_platonic.html.twig', [
            'settings' => [
                'name' => $twApi->getName(),
                'following' => $following,
                'followers' => $followers,
            ],
            'warning' => $warning,
        ]);

        // Response
        return [
            'success' => true,
            'html' => $html,
            'warning' => $warning,
        ];
    }
}
