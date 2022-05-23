<?php

namespace App\Controller;

use App\Api\Twitter\TwitterOAuth2;
use App\Entity\TwApi;
use App\Manager\TwApiManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;

class TwOAuthController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Twitter OAuth2 - Get code
     */
    #[Route('/tw/oauth/2/code', name: 'app_twitter_oauth2_code', methods: ['GET'])]
    #[Security("is_granted('ROLE_USER')")]
    public function getOAuth2Code(
        TwApiManager $twApiManager
    ): Response {
        // Get api params from activate setting
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'access_token')
        ;

        // Wrong settings params
        if (!$twApi) {
            $this->addFlash(
                'errors',
                'Something went wrong !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        return $this->redirect(
            $twApiManager->getCodeUrl(
                $twApi
            )
        );
    }

    /**
     * Twitter OAuth2 - Get access_token
     */
    #[Route('/tw/oauth/2/token', name: 'app_twitter_oauth2_check', methods: ['GET'])]
    #[Security("is_granted('ROLE_USER')")]
    public function getOAuth2AccessToken(
        Request $request,
        TwApiManager $twApiManager
    ): Response {
        // CSRF checking
        if (!$this->isCsrfTokenValid(TwitterOAuth2::CSRF_ID, $request->query->get('state'))) {
            $this->addFlash(
                'errors',
                'Something went wrong !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        // Not have code
        if (empty($request->query->get('code'))) {
            $this->addFlash(
                'errors',
                'Something went wrong !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        // Get api params from activate setting
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'access_token')
        ;

        // Get and save access_token
        $accessToken = $twApiManager->getAccessTokenByCode(
            $twApi,
            $request->query->get('code')
        );

        // Not have access_token
        if (!$accessToken) {
            $this->addFlash(
                'errors',
                'Something went wrong !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        $this->addFlash(
            'success',
            'Settings created with success !'
        );

        return $this->redirectToRoute('app_twitter_api_settings');
    }
}
