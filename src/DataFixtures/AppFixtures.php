<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Follower;
use Faker\Generator;
use Faker\Factory;
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
        $user = new User();
        $user
            ->setEmail($this->faker->email())
            ->setPassword($this->faker->password())
            ->setTwUserId($this->faker->randomNumber(5, true))
            ->setTwUsername($this->faker->numerify('user-#####'))
            ->setWalletEth($this->faker->uuid())
            ->setWelletSol($this->faker->uuid())
        ;

        $manager->persist($user);
        $manager->flush();

        for ($i = 0; $i < 50; $i++) {
            $follower = new Follower();
            $follower
                ->setTwUserId($this->faker->randomNumber(5, true))
                ->setTwUsername($this->faker->numerify('user-#####'))
                ->setTwName($this->faker->name())
                ->setTwIsVerified(false)
                ->setWalletEth($this->faker->uuid())
                ->setWalletSol($this->faker->uuid())
                ->setIsFavorite(false)
                ->setUser($user)
            ;

            $manager->persist($follower);
        }

        $manager->flush();
    }
}
