<?php

namespace App\Utils;

class Url
{
    /**
     * This removes either http:// or https:// or wwww.
     *
     * @param string $url
     * @return string
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
     *
     * @param string $url
     * @return string
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
     *
     * @param string $url
     * @param string $part
     * @return string
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
     *
     * @param string $url
     * @param boolean $withRaw
     * @return string|null
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
     *
     * @param string $url
     * @return string|null
     */
    public function getRawEncoded(string $url): ?string
    {
        return $this->getEncoded($url, true);
    }
}
