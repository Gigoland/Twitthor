<?php

namespace App\Api\Twitter;

use App\Utils\Json;
use App\Utils\VarString;
use Symfony\Component\Security\Csrf\CsrfToken;

class OAuth2
{
    const CSRF_ID = 'twitter-oauth2-state';
    const CODE_VERIFIER_ID = 'twitter-oauth2-code-verifier';
    const REDIRECT_URI = 'http://127.0.0.1:8000/tw/oauth/2/token';

    // Client params
    private ?string $clientId;
    private ?string $clientSecret;

    /**
     * Set client_id
     *
     * @param string $clientId
     * @return OAuth2
     */
    public function setClientId(string $clientId): OAuth2
    {
        $this->clientId = $clientId;

        return $this;
    }

    /**
     * Set client_secret
     *
     * @param string $clientSecret
     * @return OAuth2
     */
    public function setClientSecret(string $clientSecret): OAuth2
    {
        $this->clientSecret = $clientSecret;

        return $this;
    }

    /**
     * Twitter OAuth2 - Get code url
     *
     * @param CsrfToken $state
     * @return string
     */
    public function getCodeUrl(CsrfToken $state): string
    {
        $varString = new VarString();

        return 'https://twitter.com/i/oauth2/authorize?' . http_build_query([
            'response_type' => 'code',
            'client_id' => $this->clientId,
            'redirect_uri' => self::REDIRECT_URI,
            'scope' => 'offline.access tweet.write like.write users.read follows.write',
            'code_challenge' => $varString->getHash(self::CODE_VERIFIER_ID),
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
     * "scope" => "offline.access tweet.write like.write users.read follows.write"
     * "refresh_token" => "QV9HUkVRNUpkdFdDNHhsTUN0LWtEVkNrZUZaY212MmdaV01Ebl9oUlNGNFZkOjE2NTI0ODEzMTQzNjQ6MToxOnJ0OjE"
     *
     * @param string $code
     * @return ?array
     */
    public function getAccessTokenByCode(string $code)
    {
        $json = new Json();
        $varString = new VarString();

        // Headers
        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization' => 'Basic ' . base64_encode(sprintf(
                '%s:%s',
                $this->clientId,
                $this->clientSecret
            )),
        ];

        // Fields
        $formParams = [
            'code' => $code,
            'code_verifier' => $varString->getHash(self::CODE_VERIFIER_ID),
            'grant_type' => 'authorization_code',
            'redirect_uri' => self::REDIRECT_URI,
        ];

        // Verify
        $ssl = file_exists(__DIR__ . '/../../../cacert.pem')
            ? __DIR__ . '/../../../cacert.pem'
            : false;

        // Guzzle
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'https://api.twitter.com',
            'verify' => $ssl,
            'headers' => $headers,
        ]);

        // Call
        try {
            $response = $client->request('POST', '/2/oauth2/token', [
                'form_params' => $formParams
            ]);
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            return $json->decode(
                $e->getResponse()->getBody()->getContents()
            );
        }

        return $json->decode(
            (string) $response->getBody()
        );
    }

    /**
     * Twitter OAuth2 - Get refresh tokens
     *
     * @param string $refreshToken
     * @return void
     */
    public function getRefreshAccessToken(string $refreshToken)
    {
        $json = new Json();

        // Headers
        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
        ];

        // Fields
        $formParams = [
            'refresh_token' => $refreshToken,
            'grant_type' => 'refresh_token',
            'client_id' => self::CLIENT_ID,
        ];

        // Verify
        $ssl = file_exists(__DIR__ . '/../../../cacert.pem')
            ? __DIR__ . '/../../../cacert.pem'
            : false;

        // Guzzle
        $client = new \GuzzleHttp\Client([
            'base_uri' => 'https://api.twitter.com',
            'verify' => $ssl,
            'headers' => $headers,
        ]);

        // Call
        try {
            $response = $client->request('POST', '/2/oauth2/token', [
                'form_params' => $formParams
            ]);
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            return $json->decode(
                $e->getResponse()->getBody()->getContents()
            );
        }

        return $json->decode(
            (string) $response->getBody()
        );
    }
}
