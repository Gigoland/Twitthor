<?php

namespace App\Manager;

use App\Api\Twitter\Api;

class Twitthor extends Api
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

        // Get by pagination_token
        do {
            // Get following list
            $following = $this
                ->setQueryFields($queryFields)
                ->getFollowingByAccountId()
            ;

            // Check error
            if ($error = $this->checkError($following)) {
                return $error;
            }

            // Merge
            $result = array_merge(
                $result,
                $following['data']
            );

            // Check pagination
            $queryFields['pagination_token'] = empty($following['meta']['next_token'])
                ? null
                : $following['meta']['next_token'];

            // Waiting
            sleep($this->settings['sleep_pagination']);

            $loop++;
        } while (!empty($queryFields['pagination_token']) && $this->settings['max_pagination'] > $loop);

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

        // Get by pagination_token
        do {
            // Get followers list
            $followers = $this
                ->setQueryFields($queryFields)
                ->getFollowersByAccountId()
            ;

            // Check error
            if ($error = $this->checkError($followers)) {
                return $error;
            }

            // Merge
            $result = array_merge(
                $result,
                $followers['data']
            );

            // Check pagination
            $queryFields['pagination_token'] = empty($followers['meta']['next_token'])
                ? null
                : $followers['meta']['next_token'];

            // Waiting
            sleep($this->settings['sleep_pagination']);

            $loop++;
        } while (!empty($queryFields['pagination_token']) && $this->settings['max_pagination'] > $loop);

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
        // Errors
        if (isset($data['errors'])) {
            return [
                'errors' => $data,
            ];
        }

        // Warning
        if (isset($data['status'])
         && $data['status'] == 429
        ) {
            return [
                'warning' => $data,
            ];
        }

        return false;
    }
}
