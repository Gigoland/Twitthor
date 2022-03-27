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
        for ($i = 0; $i < 10; $i++) {
            $user = new User();
            $user
                ->setEmail($this->faker->email())
                ->setTwUserId($this->faker->randomNumber(5, true))
                ->setTwUsername($this->faker->numerify('user-#####'))
                ->setWalletEth($this->faker->uuid())
                ->setWalletSol($this->faker->uuid())
                ->setRoles(['ROLE_USER'])
                ->setPlainPassword('password')
            ;

            $manager->persist($user);
        }

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
               // ->setUser($user)
            ;

            $manager->persist($follower);
        }

        $manager->flush();
    }
}
