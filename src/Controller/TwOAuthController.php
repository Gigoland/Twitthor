<?php

namespace App\Controller;

use App\Entity\TwApi;
use App\Api\Twitter\OAuth2;
use App\Entity\TwApiOAuth2;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TwOAuthController extends AbstractController
{
    public function __construct(
        private EntityManagerInterface $entityManager
    ) {}

    /**
     * Twitter OAuth2 - Get code
     *
     * @param CsrfTokenManagerInterface $csrfTokenManager
     * @param OAuth2 $oAuth2
     * @return Response
     */
    #[Route('/tw/oauth/2/code', name: 'app_twitter_oauth2_code', methods: ['GET'])]
    #[Security("is_granted('ROLE_USER')")]
    public function getOAuth2Code(
        CsrfTokenManagerInterface $csrfTokenManager,
        OAuth2 $oAuth2
    ): Response {
        // Get api params from activate setting
        $twApi = $this->entityManager
            ->getRepository(TwApi::class)
            ->findActiveSettingsByUser($this->getUser(), 'access_token')
        ;

        // Set params
        $oAuth2
            ->setClientId($twApi->getClientId())
            ->setClientSecret($twApi->getClientSecret())
        ;

        return $this->redirect(
            $oAuth2->getCodeUrl(
                $csrfTokenManager->refreshToken(OAuth2::CSRF_ID)
            )
        );
    }

    /**
     * Twitter OAuth2 - Get access_token
     *
     * @param Request $request
     * @param OAuth2 $oAuth2
     * @return Response
     */
    #[Route('/tw/oauth/2/token', name: 'app_twitter_oauth2_check', methods: ['GET'])]
    #[Security("is_granted('ROLE_USER')")]
    public function getOAuth2AccessToken(
        Request $request,
        OAuth2 $oAuth2
    ): Response {
        // CSRF checking
        if (!$this->isCsrfTokenValid(OAuth2::CSRF_ID, $request->query->get('state'))) {
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

        // Set params
        $oAuth2
            ->setClientId($twApi->getClientId())
            ->setClientSecret($twApi->getClientSecret())
        ;

        // Call
        $result = $oAuth2->getAccessTokenByCode(
            $request->query->get('code')
        );

        // Not have access_token
        if (empty($result['access_token'])) {
            $this->addFlash(
                'errors',
                'Something went wrong !'
            );

            return $this->redirectToRoute('app_twitter_api_settings');
        }

        // Load for update
        $twApiOAuth2 = $this->entityManager
            ->getRepository(TwApiOAuth2::class)
            ->findOneBy(['twApi' => $twApi])
        ;

        // Not found / Add new
        if (!$twApiOAuth2) {
            $twApiOAuth2 = new TwApiOAuth2();
            $twApiOAuth2->setTwApi($twApi);
        }

        $twApiOAuth2->setTokenType($result['token_type']);
        $twApiOAuth2->setAccessToken($result['access_token']);
        $twApiOAuth2->setRefreshToken($result['refresh_token']);
        $twApiOAuth2->setScope($result['scope']);
        $twApiOAuth2->setExpiresIn($result['expires_in']);

        $this->entityManager->persist($twApiOAuth2);
        $this->entityManager->flush();

        $this->addFlash(
            'success',
            'Settings created with success !'
        );

        return $this->redirectToRoute('app_twitter_api_settings');
    }
}
