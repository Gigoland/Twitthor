<?php

namespace App\Utils;

use App\Utils\JsonUtil;
use Symfony\Component\HttpFoundation\Request;

class AjaxUtil
{
    private $parts = [];

    public function __construct(
        private Request $request
    ) {
        $content = $this->request->getContent();

        if (empty($content)) {
            return false;
        }

        $jsonUtil = new JsonUtil();

        $this->parts = $jsonUtil->decode($content, true);
    }

    /**
     * Get string
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
     */
    public function getBool(string $param, bool $default = false): bool
    {
        $result = $this->get($param, $default);

        return !empty($result)
            ? true
            : $default;
    }
}
