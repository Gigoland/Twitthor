<?php

namespace App\Service;

use App\Entity\User;
use App\Repository\TwApiRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Twig\Environment;

class TwApiHtmlService
{
    const OK = 'success';
    const KO = 'error';

    public function __construct(
        private Environment $environment,
        private TwApiRepository $repository
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
        $rows = $this->repository->findConsumerKeyByUser($user, $for);

        return new JsonResponse([
            'code' => self::OK,
            'html' => $this->environment->render('theme/admin/common/custom/_select_with_keys.html.twig', [
                'options' => $rows,
                'twApiCallCount' => $rows[0]['optionData'],
                'twApiCallLimit' => 15,
                'twApiCallIntervale' => '15 mins'
            ]),
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
