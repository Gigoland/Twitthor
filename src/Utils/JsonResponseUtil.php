<?php

namespace App\Utils;

class JsonResponseUtil
{
    /**
     * Get success response
     */
    public static function getSuccess(
        string $title,
        string $message,
        string $code = 'success'
    ): array {
        return [
            'success' => true,
            'success' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => 200,
            ],
        ];
    }

    /**
     * Get info response
     */
    public static function getInfo(
        string $title,
        string $message,
        string $code = 'info',
        int $status = 0,
        bool $success = false
    ): array {
        return [
            'success' => $success,
            'info' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => $status,
            ],
        ];
    }

    /**
     * Get warning response
     */
    public static function getWarning(
        string $title,
        string $message,
        string $code = 'warning',
        int $status = 0,
        bool $success = false
    ): array {
        return [
            'success' => $success,
            'warning' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => $status,
            ],
        ];
    }

    /**
     * Get error response
     */
    public static function getError(
        string $title,
        string $message,
        string $code = 'error',
        int $status = 0
    ): array {
        return [
            'success' => false,
            'error' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => $status,
            ],
        ];
    }

    /**
     * Get error 403 response
     */
    public static function getError403(
        string $title = 'Error',
        string $message = 'Unauthorized',
        string $code = 'unauthorized'
    ): array {
        return [
            'success' => false,
            'error' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => 403,
            ],
        ];
    }

    /**
     * Get error response from Twitter api
     */
    public static function getTwApiError(
        array $result,
        string $code = 'error',
        int $status = 0
    ): array {
        $title = 'Error';
        $message = 'Something went wrong !';

        /**
         * Api request examples :
         *
         *   array:4 [
         *       "errors" => array:1 [
         *           0 => array:2 [
         *           "parameters" => []
         *           "message" => "Requests with bodies must have content-type of application/json."
         *           ]
         *       ]
         *       "title" => "Invalid Request"
         *       "detail" => "One or more parameters to your request was invalid."
         *       "type" => "https://api.twitter.com/2/problems/invalid-request"
         *   ]
         */

        /**
         * OAuth exmples
         *
         * [
         *  "error" => "unauthorized_client"
         *  "error_description" => "Missing valid authorization header"
         * ]
         *
         * or
         *
         * [
         *  "error" => "invalid_request"
         *  "error_description" => "Value passed for the token was invalid."
         * ]
         */

        if (!empty($result['errors'])) {
            $title = $result['title'];
            $message = $result['detail'];
        } elseif (!empty($result['error'])) {
            $message = $result['error_description'];
            $code = $result['error'];
        }

        return [
            'success' => false,
            'error' => [
                'title' => $title,
                'message' => $message,
                'code' => $code,
                'status' => $status,
            ],
        ];
    }
}
