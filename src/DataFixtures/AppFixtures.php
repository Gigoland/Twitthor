<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Entity\Follower;
use App\Entity\TwUser;
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
        $users = [];
        $twUsers = [];

        // Users
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

            $users[] = $user;
            $manager->persist($user);
        }

        $manager->flush();

        // Twitter users created by API
        for ($i = 0; $i < 100; $i++) {
            $twUser = new TwUser();
            $twUser
                ->setTwUserId($this->faker->randomNumber(5, true))
                ->setTwUsername($this->faker->numerify('user-#####'))
                ->setTwName($this->faker->name())
                ->setTwIsVerified(mt_rand(0, 1) == 1 ? true : false)
            ;

            $twUsers[] = $twUser;
            $manager->persist($twUser);
        }

        $manager->flush();

        // User followers
        for ($i = 0; $i < 50; $i++) {
            $follower = new Follower();
            $follower
                ->setWalletEth($this->faker->uuid())
                ->setWalletSol($this->faker->uuid())
                ->setIsFavorite(mt_rand(0, 1) == 1 ? true : false)
                ->setUser($users[0]) // User
                ->setTwUser($twUsers[$i]) // Twitter user
            ;

            $manager->persist($follower);
        }

        $manager->flush();
    }
}
