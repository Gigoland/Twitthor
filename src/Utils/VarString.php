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
}
