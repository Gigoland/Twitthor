<?php

namespace App\Utils;

use Symfony\Component\Filesystem\Filesystem;

class FileUtil
{
    /**
     * Save image from url
     * Need check with FileValidaror->isValidStreamFile() / $isValid
     */
	public function copyImageByUrl(string $url, string $file, $isValid = false)
    {
        if (!$isValid) {
            return false;
        }

        if (!filter_var($url, FILTER_VALIDATE_URL)) {
            return false;
        }

        // php.ini
        if (!ini_get('allow_url_fopen')) {
            return false;
        }

        $content = file_get_contents($url);

        if (empty($content)) {
            return false;
        }

        $fs = new Filesystem();

        return $fs->dumpFile($file, $content);
    }
}
