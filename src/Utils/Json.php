<?php

namespace App\Utils;

class Json
{
    /**
     * Json encode
     * @todo error manager
     *
     * @param array $data
     * @return void
     */
    public function encode(array $data)
    {
        return json_encode($data);
    }

    /**
     * Json decode
     * @todo error manager
     *
     * @param string $data
     * @param bool $isAssoc
     * @return void
     */
    public function decode($data, $isAssoc = true): ?array
    {
        return json_decode($data, $isAssoc);
    }

    /**
     * Json error manager
     *
     * @param int $jsonLastError
     *
     * @return bool|string
     */
    public function getJsoneError($jsonLastError): ?string
    {
        switch ($jsonLastError) {
            case JSON_ERROR_NONE:
                return false;

            case JSON_ERROR_DEPTH:
                return "The maximum stack depth has been exceeded.";

            case JSON_ERROR_STATE_MISMATCH:
                return "Invalid or malformed JSON.";

            case JSON_ERROR_CTRL_CHAR:
                return "Control character error, possibly incorrectly encoded.";

            case JSON_ERROR_SYNTAX:
                return "Syntax error, malformed JSON.";

            case JSON_ERROR_UTF8:
                return "Malformed UTF-8 characters, possibly incorrectly encoded.";

            case JSON_ERROR_RECURSION:
                return "One or more recursive references in the value to be encoded.";

            case JSON_ERROR_INF_OR_NAN:
                return "One or more NAN or INF values in the value to be encoded.";

            case JSON_ERROR_UNSUPPORTED_TYPE:
                return "A value of a type that cannot be encoded was given.";

            default:
                return "Unknown JSON error occured.";
        }
    }
}
