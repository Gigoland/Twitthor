<?php

namespace App\Utils;

class StringUtil
{
    /**
     * Convert string camel_case to camelCase
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
     * Get generated hashe by string
     */
    public function getHash(string $string): string
    {
        return rtrim(
            strtr(
                base64_encode($string),
                '+/',
                '-_'
            ),
            '='
        );
    }
}
