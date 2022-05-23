<?php

namespace App\Api\Twitter;

use App\Utils\JsonUtil;
use App\Utils\StringUtil;

abstract class TwitterApi
{
    // Twitter API v2
    const BASE_URI = 'https://api.twitter.com';

    // Users lookup
    const API_USERS = '/2/users/%s';

    // Follow or unfollow accounts, or retrieve an accounts followers or following.
    const API_USERS_FOLLOWING = '/2/users/%s/following';
    const API_USERS_FOLLOWERS = '/2/users/%s/followers';

    // https://api.twitter.com/2/users/:source_user_id/following/:target_user_id
    const API_USERS_FOLLOWING_DELETE = '/2/users/%s/following/%s';

    // Requst limits [num, interval]
    const LIMIT_USERS_FOLLOWING = [15, 15];
    const LIMIT_USERS_FOLLOWERS = [15, 15];

    const LIMIT_USER_UNFOLLOW = [50, 15];

    // OAuth 2.0 Client ID and Client Secret
    protected ?string $twitterClientId = null;
    protected ?string $twitterClientSecret = null;

    // Api settings
    protected ?string $twitterConsumerKey = null;
    protected ?string $twitterConsumerSecret = null;

    protected ?string $twitterAccessToken = null;
    protected ?string $twitterAccessTokenSecret = null;

    // Acount settings
    protected ?string $twitterAccountId = null;
    protected ?string $twitterAccountName = null;

    // Bearer token
    protected ?string $twitterBearerToken = null;

    // next_token
    protected ?string $nextToken = null;

    // Global settings
    protected array $settings = [
        'max_pagination' => 10,
        'sleep_pagination_token' => 5,
        'sleep_unfollow' => 5,
    ];

    // Api query fields
    protected array $queryFields = [];

    // Select fields
    protected array $responseFields = [];

    // target_user_id
    protected int $targetUserId = 0;

    // For CURLINFO_HTTP_CODE storage
    protected $httpStatusCode;

    /**
     * @param array $twitterSettings
     */
    public function __construct(array $twitterSettings)
    {
        if (!function_exists('curl_init')) {
            throw new \RuntimeException(
                'Twitthor requires cURL extension to be loaded, see: http://curl.haxx.se/docs/install.html'
            );
        }

        // Utils text
        $stringUtil = new StringUtil();

        // Set api settings
        foreach ($twitterSettings as $key => $val) {
            $var = $stringUtil->camelize($key);

            if (!in_array($var, [
                'twitterClientId',
                'twitterClientSecret',

                'twitterConsumerKey',
                'twitterConsumerSecret',

                'twitterAccessToken',
                'twitterAccessTokenSecret',

                'twitterBearerToken',
            ])) {
                throw new \InvalidArgumentException(
                    'Incomplete settings passed to Twitthor'
                );
            }

            $this->$var = $val;
        }
    }

    /**
     * Http Status code
     */
    public function getHttpStatusCode(): int
    {
        return $this->httpStatusCode;
    }

    /**
     * Get queryFields
     */
    public function getQueryFields(): array
    {
        return $this->queryFields;
    }

    /**
     * Set Account id
     */
    public function setTwitterAccountId(?string $twitterAccountId): self
    {
        $this->twitterAccountId = $twitterAccountId;

        return $this;
    }

    /**
     * Set account name
     */
    public function setTwitterAccountName(?string $twitterAccountName): self
    {
        $this->twitterAccountName = $twitterAccountName;

        return $this;
    }

    /**
     * Get nextToken
     */
    public function getNextToken(): ?string
    {
        return empty($this->nextToken) ? null : $this->nextToken;
    }

    /**
     * Set nextToken
     */
    public function setNextToken(?string $nextToken)
    {
        $this->nextToken = empty($nextToken) ? null : $nextToken;
    }

    /**
     * Set settings
     */
    public function setSettings(array $settings): self
    {
        foreach ($settings as $key => $val) {
            $this->settings[$key] = $val;
        }

        return $this;
    }

    /**
     * Set query fields
     * Comma-separated fields for the user object.
     * Allowed values:
     * created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,witheld
     * Default values:
     * id,name,username
     */
    public function setQueryFields(array $fields): self
    {
        foreach ($fields as $key => $val) {
            $this->queryFields[$key] = $val;
        }

        return $this;
    }

    /**
     * Select fileds from response data
     */
    public function setResponseFields(array $fields): self
    {
        foreach ($fields as $field) {
            if (!in_array($field, $this->responseFields)) {
                $this->responseFields[] = $field;
            }
        }

        return $this;
    }

    /**
     * Delete all query fields
     */
    public function clearQueryFields(): self
    {
        $this->queryFields = [];

        return $this;
    }

    /**
     * Set target_user_id
     */
    public function setTargetUserId(int $targetUserId): self
    {
        $this->targetUserId = $targetUserId;

        return $this;
    }

    /**
     * Get user info by Twitter account id
     *
     * @return array|object
     */
    public function getUserByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterBearerToken)
         || empty($this->twitterAccountId)
         ) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $path = sprintf(self::API_USERS, $this->twitterAccountId);

        $result = $this->getRequest($path, 'GET', $isJson);

        if (empty($this->responseFields)) {
            return $result;
        }

        return $this->getSelectedResponseFileds($result);
    }

    /**
     * Get following by Twitter account id
     *
     * @return array|object
     */
    public function getFollowingByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterBearerToken)
         || empty($this->twitterAccountId)
         ) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $path = sprintf(self::API_USERS_FOLLOWING, $this->twitterAccountId);

        return $this->getRequest($path, 'GET', $isJson);
    }

    /**
     * Get followers by Twitter account id
     *
     * @return array|object
     */
    public function getFollowersByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterBearerToken)
         || empty($this->twitterAccountId)
         ) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $path = sprintf(self::API_USERS_FOLLOWERS, $this->twitterAccountId);

        return $this->getRequest($path, 'GET', $isJson);
    }

    /**
     * Unfollow by Twitter source_user_id and target_user_id
     *
     * @return array|object
     */
    public function unfollowByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterBearerToken)
         || empty($this->twitterAccountId)
         || empty($this->targetUserId)
        ) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor - Unfollow'
            );
        }

        $path = sprintf(
            self::API_USERS_FOLLOWING_DELETE,
            $this->twitterAccountId,
            $this->targetUserId
        );

        return $this->getRequest($path, 'DELETE', $isJson);
    }

    /**
     * Call Twitter API with Guzzle request
     *
     * @return array|object
     */
    private function getRequest(string $path, string $method, bool $isJson = true)
    {
        $jsonUtil = new JsonUtil();
        $options = [];

        // Verify
        $ssl = file_exists(__DIR__ . '/../../../cacert.pem')
            ? __DIR__ . '/../../../cacert.pem'
            : false;

        // Headers
        $headers = [
            'Accept' => 'application/json',
            'Content-Type' => 'application/json',
            'Authorization' => sprintf(
                'Bearer %s',
                $this->twitterBearerToken
            ),
        ];

        // Set pagination_token for get next
        if (!empty($this->getNextToken())) {
            $this->queryFields['pagination_token'] = $this->getNextToken();
        }

        // By method
        switch (strtoupper($method)) {
            case 'GET':
                if (!empty($this->queryFields)) {
                    $options = [
                        'query' => $this->queryFields,
                    ];
                }
                break;
            case 'PUT':
            case 'POST':
            case 'DELETE':
                $headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

                if (!empty($this->queryFields)) {
                    $options = [
                        'form_params' => $this->queryFields,
                    ];
                }
                break;
        }

        // Init Guzzle
        $client = new \GuzzleHttp\Client([
            'base_uri' => self::BASE_URI,
            'verify' => $ssl,
            'headers' => $headers,
        ]);

        // Call Guzzle
        try {
            $response = $client->request(
                strtoupper($method),
                $path,
                $options
            );
        } catch (\GuzzleHttp\Exception\BadResponseException $e) {
            if ($isJson) {
                return $jsonUtil->decode(
                    $e->getResponse()->getBody()->getContents()
                );
            }

            return $e->getResponse()->getBody()->getContents();
        }

        $result = (string) $response->getBody();

        // Get json format
        if ($isJson) {
            $result = $jsonUtil->decode($result);

            if ($error = $jsonUtil->getJsoneError(json_last_error())) {
                throw new \Exception($error);
            }
        }

        // Clear next token
        $this->setNextToken(null);

        return $result;
    }

    /**
     * Search and get selected fields
     */
    private function getSelectedResponseFileds(array $data): array
    {
        // Return if have error
        if (isset($data['errors'])) {
            return $data;
        }

        $result = [];

        foreach ($this->responseFields as $field) {
            if (isset($data['data'][$field])) {
                $result[$field] = $data['data'][$field];
            }
        }

        return $result;
    }

    abstract public function getFollowing();
    abstract public function getFollowers();
}
