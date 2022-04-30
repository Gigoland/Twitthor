<?php

namespace App\Api\Twitter;

use App\Utils\Json;
use App\Utils\VarString;

abstract class Api
{
    // Twitter API v2
    const API_SERVER = 'https://api.twitter.com/2/';

    // Users lookup
    const API_USERS = 'users/%s';

    // Follow or unfollow accounts, or retrieve an accounts followers or following.
    const API_USERS_FOLLOWING = 'users/%s/following';
    const API_USERS_FOLLOWERS = 'users/%s/followers';
    const API_USERS_FOLLOWING_DELETE = 'users/%s/following/%s';

    // Requst limits [num, interval]
    const LIMIT_USERS_FOLLOWING = [15, 15];
    const LIMIT_USERS_FOLLOWERS = [15, 15];

    // Api settings
    protected ?string $twitterConsumerKey = null;
    protected ?string $twitterConsumerSecret = null;
    protected ?string $twitterBearerToken = null;
    protected ?string $twitterAccessToken = null;
    protected ?string $twitterAccessTokenSecret = null;

    // Acount settings
    protected ?string $twitterAccountId = null;
    protected ?string $twitterAccountName = null;

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
        $varString = new VarString();

        // Set api settings
        foreach ($twitterSettings as $key => $val) {
            $var = $varString->camelize($key);

            if (!in_array($var, [
                'twitterConsumerKey',
                'twitterConsumerSecret',
                'twitterBearerToken',
                'twitterAccessToken',
                'twitterAccessTokenSecret',
            ])) {
                throw new \InvalidArgumentException(
                    'Incomplete settings passed to Twitthor'
                );
            }

            $this->$var = $val;
        }
    }

    /**
     * @return int
     */
    public function getHttpStatusCode()
    {
        return $this->httpStatusCode;
    }

    /**
     * Get queryFields
     *
     * @return array
     */
    public function getQueryFields(): array
    {
        return $this->queryFields;
    }

    /**
     * Set Account id
     *
     * @param string $twitterAccountId
     * @return Api
     */
    public function setTwitterAccountId(?string $twitterAccountId): Api
    {
        $this->twitterAccountId = $twitterAccountId;

        return $this;
    }

    /**
     * Set account name
     *
     * @param string $twitterAccountName
     * @return Api
     */
    public function setTwitterAccountName(?string $twitterAccountName): Api
    {
        $this->twitterAccountName = $twitterAccountName;

        return $this;
    }

    /**
     * Get nextToken
     *
     * @return string
     */
    public function getNextToken(): ?string
    {
        return $this->nextToken;
    }

    /**
     * Set nextToken
     * @param string $nextToken
     */
    public function setNextToken(?string $nextToken)
    {
        $this->nextToken = $nextToken;
    }

    /**
     * Set settings
     *
     * @param array $settings
     * @return API
     */
    public function setSettings(array $settings): Api
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
     *
     * @param array $fields
     * @return Api
     */
    public function setQueryFields(array $fields): Api
    {
        foreach ($fields as $key => $val) {
            $this->queryFields[$key] = $val;
        }

        return $this;
    }

    /**
     * Select fileds from response data
     *
     * @param array $fields
     * @return Api
     */
    public function setResponseFields(array $fields): Api
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
     *
     * @return Api
     */
    public function clearQueryFields(): Api
    {
        $this->queryFields = [];

        return $this;
    }

    /**
     * Get user info by Twitter account id
     *
     * @param bool $isJson
     * @return array|object
     */
    public function getUserByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterAccountId)) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $url = sprintf(
            self::API_SERVER . self::API_USERS,
            $this->twitterAccountId
        );

        $result = $this->getRequest($url, 'get', $isJson);

        if (empty($this->responseFields)) {
            return $result;
        }

        return $this->getSelectedResponseFileds($result);
    }

    /**
     * Get following by Twitter account id
     *
     * @param bool $isJson
     * @return array|object
     */
    public function getFollowingByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterAccountId)) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $url = sprintf(
            self::API_SERVER . self::API_USERS_FOLLOWING,
            $this->twitterAccountId
        );

        return $this->getRequest($url, 'get', $isJson);
    }

    /**
     * Get followers by Twitter account id
     *
     * @param bool $isJson
     * @return array|object
     */
    public function getFollowersByAccountId(bool $isJson = true)
    {
        if (empty($this->twitterAccountId)) {
            throw new \InvalidArgumentException(
                'Incomplete settings passed to Twitthor'
            );
        }

        $url = sprintf(
            self::API_SERVER . self::API_USERS_FOLLOWERS,
            $this->twitterAccountId
        );

        return $this->getRequest($url, 'get', $isJson);
    }

    /**
     * Call Twitter API with Curl request
     *
     * @param string $url
     * @param string $methode
     * @param bool $isJson
     * @return array|object
     */
    private function getRequest(string $url, string $methode, bool $isJson = true)
    {
        // For header (Bearer)
        $authorization = sprintf(
            'Authorization: Bearer %s',
            $this->twitterBearerToken
        );

        // Set pagination_token for get next
        if (!empty($this->getNextToken())) {
            $this->queryFields['pagination_token'] = $this->getNextToken();
        }

        // Fields for methode GET only
        if ($methode === 'get' && !empty($this->queryFields)) {
            $url .= '?' . http_build_query($this->queryFields, '', '&');
        }

        // Curl options
        $options = [
            CURLOPT_URL => $url,
            CURLOPT_HTTPHEADER => ['Content-Type: application/json', $authorization],
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HEADER => false,
            CURLOPT_TIMEOUT => 10,
            CURLOPT_SSL_VERIFYPEER => false, // Not recommended
        ];

        // Set metodes PUT, DELETE
        if (in_array($methode, ['put', 'delete'])) {
            $options[CURLOPT_CUSTOMREQUEST] = $methode;
        }

        // Fields for POST methode only
        if ($methode === 'post' && !empty($this->queryFields)) {
            $options[CURLOPT_POSTFIELDS] = http_build_query($this->queryFields, '', '&');
        }

        // Curl init & set options
        $ch = curl_init();
        curl_setopt_array($ch, $options);

        // Curl exec
        try {
            $result = curl_exec($ch);
        } catch (\Exception $e) {
            throw $e;
        }

        // Set curl http code
        $this->httpStatusCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

        // Curl error
        if (($error = curl_error($ch)) !== '') {
            curl_close($ch);

            throw new \Exception($error);
        }

        // Curl close
        curl_close($ch);

        // Get jsone format
        if ($isJson) {
            $json = new Json();
            $result = $json->decode($result);

            if ($error = $json->getJsoneError(json_last_error())) {
                throw new \Exception($error);
            }
        }

        // Clear next token
        $this->setNextToken(null);

        return $result;
    }

    /**
     * Search and get selected fields
     *
     * @param array $data
     * @return array
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
