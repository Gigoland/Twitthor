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
            'client_id' => 'LTNlOVZsSmk3LVhBa3MzdU1WRWo6MTpjaQ',
            'redirect_uri' => self::REDIRECT_URI,
            'scope' => 'tweet.write like.write users.read follows.write offline.access',
            'code_challenge' => $varString->getHash(self::CODE_VERIFIER_ID),
            'code_challenge_method' => 'plain',
            'state' => $state->getValue(), // For CSRF checking
        ], '', '&');
    }

    /**
     * Undocumented function
     *
     * @param string $code
     * @return void
     */
    public function getAuthorizationCode(string $code)
    {
        $varString = new VarString();
        $json = new Json();

        // Headers
        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization' => 'Basic ' . base64_encode(sprintf(
                '%s:%s',
                'LTNlOVZsSmk3LVhBa3MzdU1WRWo6MTpjaQ',
                'YhGJodL5Z5H1EtAdTEqmnFAs112XuDJqBvrsVFMAFUggvihdiL'
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
            return $e->getResponse()->getBody()->getContents();
        }

        return $json->decode(
            (string) $response->getBody()
        );
    }
}
