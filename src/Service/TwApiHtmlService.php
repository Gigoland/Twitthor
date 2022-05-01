<?php

namespace App\Service;

use App\Api\Twitter\Api as TwitterApi;
use App\Entity\User;
use App\Repository\TwApiCallRepository;
use App\Repository\TwApiRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Twig\Environment;

class TwApiHtmlService
{
    const OK = 'success';
    const KO = 'error';

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
     * @return JsonResponse
     */
    public function getSelectKeysByUser(User $user, ?string $for): JsonResponse
    {
        if (!$user) {
            return $this->error(self::KO);
        }

        // Get select options data
        $rows = $this->twApiRepository->findWithCallByUser($user, $for);
        $callIdsForInit = [];
        $options = [];

        // Check & generate select options
        foreach ($rows as $index => $row) {
            switch ($for) {
                case 'following':
                    $callLimit = TwitterApi::LIMIT_USERS_FOLLOWING[0];
                    $callInterval = TwitterApi::LIMIT_USERS_FOLLOWING[1];

                    // Check intervale
                    if (!empty($row['followingAt'])
                     && $row['followingAt'] < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
                    ) {
                        // For init in db
                        $callIdsForInit[] = $row['id'];
                        // Set zero
                        $row['followingCnt'] = 0;
                    }

                    // Check limit out
                    if ($row['followingCnt'] < $callLimit) {
                        // Set option
                        $options[$index] = [
                            'value' => $row['id'],
                            'text' => $row['name'],
                            'data' => $row['followingCnt'],
                        ];
                    }
                    break;
                case 'followers':
                    $callLimit = TwitterApi::LIMIT_USERS_FOLLOWERS[0];
                    $callInterval = TwitterApi::LIMIT_USERS_FOLLOWERS[1];

                    // Check intervale
                    if (!empty($row['followersAt'])
                     && $row['followersAt'] < (new \DateTimeImmutable())->modify('-' . $callInterval . ' minute')
                    ) {
                        // For init in db
                        $callIdsForInit[] = $row['id'];
                        // Set zero
                        $row['followersCnt'] = 0;
                    }

                    // Check limit out
                    if ($row['followersCnt'] < $callLimit) {
                        // Set option
                        $options[$index] = [
                            'value' => $row['id'],
                            'text' => $row['name'],
                            'data' => $row['followersCnt'],
                        ];
                    }
                    break;
            }
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

        // Generate <select/> html
        if (!empty($options)) {
            $html = $this->environment->render('theme/admin/common/custom/_select_with_keys.html.twig', [
                'options' => $options,
                'twApiCallCount' => $options[0]['data'], // Get first for selected option
                'twApiCallLimit' => $callLimit,
                'twApiCallIntervale' => $callInterval . ' mins',
            ]);
        }

        // Response
        return new JsonResponse([
            'code' => self::OK,
            'html' => $html,
        ]);
    }

    /**
     * @todo
     *
     * @return JsonResponse
     */
    private function error($code): JsonResponse
    {
        return new JsonResponse([
            'code' => $code,
        ]);
    }
}
