<?php

namespace App\Utils;

class UrlUtil
{
    /**
     * This removes either http:// or https:// or wwww.
     */
    public function trimProtocol(string $url): string
    {
        $url = filter_var(trim($url), FILTER_SANITIZE_URL);

        return preg_replace(
            '/((^https?:\/\/)?(w{3}\.)?)|(\/$)/',
            '',
            $url
        );
    }

    /**
     * This removes either wwww.
     */
    public function trimW3(string $url): string
    {
        $url = filter_var(trim($url), FILTER_SANITIZE_URL);

        return preg_replace(
            '/(w{3}\.)?|(\/$)/',
            '',
            $url
        );
    }

    /**
     * Get part from url
     */
    public function getPart(string $url, string $part): string
    {
        $url = filter_var(trim($url), FILTER_SANITIZE_URL);

        $parse = parse_url($url);

        if (in_array($part, ['scheme', 'host', 'path'])) {
            return $parse[$part];
        }

        $info = pathinfo($parse['path']);

        if (in_array($part, ['dirname', 'basename', 'extension', 'filename'])) {
            return $info[$part];
        }

        return null;
    }

    /**
     * Undocumented function
     */
    public function getEncoded(string $url, $withRaw = false): ?string
    {
        if (empty($url)) {
            return '';
        }

        if ($withRaw) {
            return rawurlencode($url);
        }

        return urlencode($url);
    }

    /**
     * Undocumented function
     */
    public function getRawEncoded(string $url): ?string
    {
        return $this->getEncoded($url, true);
    }
}
