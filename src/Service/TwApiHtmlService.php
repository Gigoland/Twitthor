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

    private $environment;
    private $repository;

	public function __construct(
        Environment $environment,
        TwApiRepository $repository
    ) {
        $this->environment = $environment;
        $this->repository = $repository;
	}

    /**
     * @param User $user
     * @return JsonResponse
     */
    public function getSelectKeysByUser(User $user): JsonResponse
    {
        if (!$user) {
            return $this->error(self::KO);
        }

        $rows = $this->repository->findConsumerKeyByUser($user);

        return new JsonResponse([
            'code' => self::OK,
            'html' => $this->environment->render('theme/admin/common/custom/_select_with_keys.html.twig', [
                'rows' => $rows,
            ]),
        ]);
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
