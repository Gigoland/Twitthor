<?php

namespace App\Utils;

class VarString
{
    /**
     * Convert string camel_case to camelCase
     *
     * @param string $string
     * @param string $symbol
     *
     * @return string
     */
    public function camelize(string $string, string $symbol = '_'): string
    {
        return str_replace(
            $symbol,
            '',
            lcfirst(
                ucwords(
                    strtolower($string),
                    $symbol
                )
            )
        );
    }

    /**
     * This removes either http:// or https:// or wwww.
     *
     * @param string $url
     * @return string
     */
    public function trimUrlProtocol(string $url): string
    {
        return preg_replace(
            '/((^https?:\/\/)?(w{3}\.)?)|(\/$)/',
            '',
            trim($url)
        );
    }

    /**
     * This removes either wwww.
     *
     * @param string $url
     * @return string
     */
    public function trimUrlW3(string $url): string
    {
        return preg_replace(
            '/(w{3}\.)?|(\/$)/',
            '',
            trim($url)
        );
    }
}
