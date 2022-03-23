<?php

namespace App\DataFixtures;

use Faker\Factory;
use Faker\Generator;
use App\Entity\Follower;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    /**
     * @var Generator
     */
    private Generator $faker;

    public function __construct()
    {
        $this->faker = Factory::create('fr_FR');
    }

    /**
     * php bin/console doctrine:fixture:load
     *
     * @param ObjectManager $manager
     * @return void
     */
    public function load(ObjectManager $manager): void
    {
        for ($i = 0; $i < 50; $i++) {
            $follower = new Follower();
            $follower
                ->setTwUserId($this->faker->randomNumber(5, true))
                ->setTwUsername($this->faker->numerify('user-#####'))
                ->setTwName($this->faker->name())
                ->setTVerified(false)
                ->setWalletEth($this->faker->uuid())
                ->setWalletSol($this->faker->uuid())
                ->setFavorite(false)
            ;

            $manager->persist($follower);
        }

        $manager->flush();
    }
}
