<?php

namespace App\Manager;

use App\Api\Twitter\Api as TwitterApi;

class TwitthorManager extends TwitterApi
{
    /**
     * Get Twitter account public metrics
     *
     * @return array
     */
    public function getPublicMetrics()
    {
        // Get public metrics
        return $this
            ->clearQueryFields()
            ->setQueryFields([
                'user.fields' => 'public_metrics',
            ])
            ->setResponseFields([
                'public_metrics',
            ])
            ->getUserByAccountId()
        ;
    }

    /**
     * Unfollow target user
     *
     * @return void
     */
    public function unfollow(): ?array
    {
        $result = $this->unfollowByAccountId();

        // Check error
        if ($error = $this->checkError($result)) {
            return $error;
        }

        return $result;
    }

    /**
     * Get all following
     *
     * @return array
     */
    public function getFollowing()
    {
        // Get all following
        return $this->getFollowingLoop(
            $this->getQueryFields()
        );
    }

    /**
     * Get all followers
     *
     * @return array
     */
    public function getFollowers()
    {
        // Get all followers
        return $this->getFollowersLoop(
            $this->getQueryFields()
        );
    }

    /**
     * Get all following page by page
     *
     * @param array $queryFields
     * @return array
     */
    private function getFollowingLoop(array $queryFields)
    {
        $result = [];
        $loop = 0;

        // Get by next_token
        do {
            // Get following list
            $rows = $this
                ->getFollowingByAccountId()
            ;

            // Check error
            if ($error = $this->checkError($rows)) {
                return $error;
            }

            // Merge
            $result = array_merge(
                $result,
                $rows['data']
            );

            // Exit
            if (empty($rows['meta']['next_token'])) {
                break;
            }

            // Set next_token
            $this->setNextToken($rows['meta']['next_token']);

            // Waiting
            sleep($this->settings['sleep_pagination_token']);

            $loop++;
        } while (!empty($rows['meta']['next_token']) && $this->settings['max_pagination'] > $loop);

        return $result;
    }

    /**
     * Get all followers page by page
     *
     * @param array $queryFields
     * @return array
     */
    private function getFollowersLoop(array $queryFields)
    {
        $result = [];
        $loop = 0;

        // Get by next_token
        do {
            // Get followers list
            $rows = $this
                ->getFollowersByAccountId()
            ;

            // Check error
            if ($error = $this->checkError($rows)) {
                return $error;
            }

            // Merge
            $result = array_merge(
                $result,
                $rows['data']
            );

            // Exit
            if (empty($rows['meta']['next_token'])) {
                break;
            }

            // Set next_token
            $this->setNextToken($rows['meta']['next_token']);

            // Waiting
            sleep($this->settings['sleep_pagination_token']);

            $loop++;
        } while (!empty($rows['meta']['next_token']) && $this->settings['max_pagination'] > $loop);

        return $result;
    }

    /**
     * Check result errors & warnings
     * @todo
     *
     * @param array $data
     * @return false|array
     */
    private function checkError($data)
    {
        // Errors & wrnings
        if (isset($data['status']) && $data['status'] != 200) {
            return [
                'error' => $data,
            ];
        }

        /*
        array:4 [
            "errors" => array:1 [
                0 => array:2 [
                "parameters" => []
                "message" => "Requests with bodies must have content-type of application/json."
                ]
            ]
            "title" => "Invalid Request"
            "detail" => "One or more parameters to your request was invalid."
            "type" => "https://api.twitter.com/2/problems/invalid-request"
        ]
        */
        if (!empty($data['errors'])) {
            return $data;
        }

        return false;
    }
}
