<?php

namespace App\Utils;

use App\Utils\Json;
use Symfony\Component\HttpFoundation\Request;

class Ajax
{
    private $parts = [];

    public function __construct(
        private Request $request
    ) {
        $content = $this->request->getContent();

        if (empty($content)) {
            return false;
        }

        $json = new Json();

        $this->parts = $json->decode($content, true);
    }

    /**
     * Get string
     *
     * @param string $param
     * @return null|string
     */
    public function get(string $param, $default = null): ?string
    {
        if (empty($param)) {
            return $default;
        }

        return isset($this->parts[$param])
            ? $this->parts[$param]
            : $default;
    }

    /**
     * Get integer only
     *
     * @param string $param
     * @return integer
     */
    public function getInt(string $param, int $default = 0): int
    {
        $result = $this->get($param, $default);

        return is_numeric($result)
            ? intval($result)
            : $default;
    }

    /**
     * Get bool only
     *
     * @param string $param
     * @return bool
     */
    public function getBool(string $param, bool $default = false): bool
    {
        $result = $this->get($param, $default);

        return !empty($result)
            ? true
            : $default;
    }
}
