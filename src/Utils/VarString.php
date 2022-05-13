<?php

namespace App\Utils;

class VarString
{
    /**
     * Convert string camel_case to camelCase
     *
     * @param string $string
     * @param string $symbol
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
     * Get generated hashe by string
     *
     * @param string $string
     * @return string
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
