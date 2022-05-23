<?php

namespace App\Manager;

use App\Api\Twitter\TwitterApi;

class TwitthorManager extends TwitterApi
{
    /**
     * Get Twitter account public metrics
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
     */
    private function checkError($data)
    {
        // Error
        if (!empty($data['errors'])) {
            return ['error' => $data];
        }

        // Errors & wrnings by status
        if (isset($data['status']) && $data['status'] != 200) {
            return ['error' => $data];
        }

        return false;
    }
}
