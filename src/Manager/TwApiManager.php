<?php

namespace App\Manager;

use App\Api\Twitter\TwitterOAuth2;
use App\Entity\TwApi;
use App\Entity\TwApiOAuth2;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Csrf\CsrfTokenManagerInterface;

class TwApiManager
{
    public function __construct(
        private CsrfTokenManagerInterface $csrfTokenManager,
        private EntityManagerInterface $entityManager,
        private TwitterOAuth2 $twitterOAuth2
    ) {}

    /**
     * Twitter OAuth2 - Get code url
     */
    public function getCodeUrl(TwApi $twApi): string
    {
        // Set params
        $this->twitterOAuth2
            ->setClientId($twApi->getClientId())
            ->setClientSecret($twApi->getClientSecret())
        ;

        return $this->twitterOAuth2->getCodeUrl(
            $this->csrfTokenManager->refreshToken(TwitterOAuth2::CSRF_ID)
        );
    }

    /**
     * Twitter OAuth2 - Get access_token and save by code
     */
    public function getAccessTokenByCode(TwApi $twApi, string $code): ?string
    {
        // Set params & Get access_token
        $result = $this->twitterOAuth2
            ->setClientId($twApi->getClientId())
            ->setClientSecret($twApi->getClientSecret())
            ->getAccessTokenByCode(
                $code
            )
        ;

        // Not have access_token
        if (empty($result['access_token'])) {
            return false;
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

        return $twApiOAuth2->getAccessToken();
    }

    /**
     * Twitter OAuth2 - Get access_token
     */
    public function getAccessToken(TwApi $twApi): ?string
    {
        $twApiOAuth2 = $twApi->getTwApiOAuth2();
        $expiresIn = $twApiOAuth2->getExpiresIn();

        // Check expires intervale
        if ($twApiOAuth2->getUpdateAt() < (new \DateTimeImmutable())->modify('-' . $expiresIn . ' minute')) {
            // Set params & Get access_token
            $result = $this->twitterOAuth2
                ->setClientId($twApi->getClientId())
                ->setClientSecret($twApi->getClientSecret())
                ->getRefreshAccessToken(
                    $twApiOAuth2->getRefreshToken()
                )
            ;

dd($result);
            // Not have access_token
            /**
             * [
             *  "error" => "unauthorized_client"
             *  "error_description" => "Missing valid authorization header"
             * ]
             */
            if (empty($result['access_token'])) {
                return false;
            }

            // Update
            $twApiOAuth2->setTokenType($result['token_type']);
            $twApiOAuth2->setAccessToken($result['access_token']);
            $twApiOAuth2->setRefreshToken($result['refresh_token']);
            $twApiOAuth2->setExpiresIn($result['expires_in']);

            $this->entityManager->persist($twApiOAuth2);
            $this->entityManager->flush();
        }

        return $$twApiOAuth2->getAccessToken();
    }

}
