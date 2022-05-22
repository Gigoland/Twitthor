<?php

namespace App\Api\Twitter;

use App\Utils\JsonUtil;
use App\Utils\StringUtil;
use Symfony\Component\Security\Csrf\CsrfToken;

class TwitterOAuth2
{
    const CSRF_ID = 'twitter-oauth2-state';
    const CODE_VERIFIER_ID = 'twitter-oauth2-code-verifier';
    const BASE_URI = 'https://api.twitter.com';
    const REDIRECT_URI = 'http://127.0.0.1:8000/tw/oauth/2/token'; //@todo

    // Client params
    private ?string $clientId;
    private ?string $clientSecret;

    /**
     * Set client_id
     */
    public function setClientId(string $clientId): self
    {
        $this->clientId = $clientId;

        return $this;
    }

    /**
     * Set client_secret
     */
    public function setClientSecret(string $clientSecret): self
    {
        $this->clientSecret = $clientSecret;

        return $this;
    }

    /**
     * Twitter OAuth2 - Get code url
     */
    public function getCodeUrl(CsrfToken $state): string
    {
        $stringUtil = new StringUtil();

        return 'https://twitter.com/i/oauth2/authorize?' . http_build_query([
            'response_type' => 'code',
            'client_id' => $this->clientId,
            'redirect_uri' => self::REDIRECT_URI,
            'scope' => 'offline.access users.read follows.write tweet.read tweet.write like.write',
            'code_challenge' => $stringUtil->getHash(self::CODE_VERIFIER_ID),
            'code_challenge_method' => 'plain',
            'state' => $state->getValue(), // For CSRF checking
        ], '', '&');
    }

    /**
     * Twitter OAuth2 - Get access_token
     *
     * Response :
     * "token_type" => "bearer"
     * "expires_in" => 7200
     * "access_token" => "R2dWd3k3bk90SF9teHZNa18xeWZzb0ZtcnNYTlp4cllXRVJTZ2wybE54WWVQOjE2NTI0ODEzMTQzNjQ6MToxOmF0OjE"
     * "scope" => "offline.access users.read follows.write tweet.read tweet.write like.write"
     * "refresh_token" => "QV9HUkVRNUpkdFdDNHhsTUN0LWtEVkNrZUZaY212MmdaV01Ebl9oUlNGNFZkOjE2NTI0ODEzMTQzNjQ6MToxOnJ0OjE"
     */
    public function getAccessTokenByCode(string $code): ?array
    {
        $stringUtil = new StringUtil();

        return $this->postRequest('/2/oauth2/token', [
            'Accept' => 'application/json',
            'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization' => 'Basic ' . base64_encode(sprintf(
                '%s:%s',
                $this->clientId,
                $this->clientSecret
            )),
        ], [
            'code' => $code,
            'code_verifier' => $stringUtil->getHash(self::CODE_VERIFIER_ID),
            'grant_type' => 'authorization_code',
            'redirect_uri' => self::REDIRECT_URI,
        ]);
    }

    /**
     * Twitter OAuth2 - Get refresh tokens
     */
    public function getRefreshAccessToken(string $refreshToken): ?array
    {
        return $this->postRequest('/2/oauth2/token', [
            'Accept' => 'application/json',
            'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
        ], [
            'refresh_token' => $refreshToken,
            'grant_type' => 'refresh_token',
            'client_id' => $this->clientId,
        ]);
    }

    /**
     * Post request
     */
    private function postRequest(string $url, array $headers, array $formParams): ?array
    {
        $jsonUtil = new JsonUtil();

        // Verify
        $ssl = file_exists(__DIR__ . '/../../../cacert.pem')
            ? __DIR__ . '/../../../cacert.pem'
            : false;

        // Guzzle
        $client = new \GuzzleHttp\Client([
            'base_uri' => self::BASE_URI,
            'verify' => $ssl,
            'headers' => $headers,
        ]);

        // Guzzle request
        try {
            $response = $client->request('POST', $url, [
                'form_params' => $formParams
            ]);
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            return $jsonUtil->decode(
                $e->getResponse()->getBody()->getContents()
            );
        }

        return $jsonUtil->decode(
            (string) $response->getBody()
        );
    }
}
