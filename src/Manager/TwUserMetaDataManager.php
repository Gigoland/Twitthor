<?php

namespace App\Manager;

use App\Entity\TwUser;
use App\Entity\TwUserMetaData;
use App\Utils\StringUtil;
use App\Repository\TwUserMetaDataRepository;
use Doctrine\ORM\EntityManagerInterface;

class TwUserMetaDataManager
{
    public function __construct(
        private EntityManagerInterface $entityManager,
        private TwUserMetaDataRepository $metaDataRepository,
    ) {}

    /**
     * Save
     */
    public function saveIncrementMetaData(TwUser $twUser, string $name, int $content = 1)
    {
        $stringUtil = new StringUtil();
        $name = $stringUtil->normalizeKey($name);

        $metaData = $this->metaDataRepository->findOneBy([
            'twUser' => $twUser,
            'name' => $name,
        ]);

        // Insert / Update
        if (!$metaData) {
            $metaData = new TwUserMetaData();
            $metaData
                ->setTwUser($twUser)
                ->setName($name)
            ;
        } else {
            $content = $metaData->getContentInt() + $content;
        }


        $metaData->setContent($content);

        $this->entityManager->persist($metaData);
        $this->entityManager->flush();
    }
}
