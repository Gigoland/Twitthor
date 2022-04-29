<?php

namespace App\EntityListener;

use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserListener
{
    public function __construct(
        private UserPasswordHasherInterface $hasher
    ) {}

    /**
     * Persist
     *
     * @param User $user
     * @return void
     */
    public function prePersist(User $user)
    {
        $this->encodePassword($user);
    }

    /**
     * Update
     *
     * @param User $user
     * @return void
     */
    public function preUpdate(User $user)
    {
        $this->encodePassword($user);
    }

    /**
     * Password hasher
     *
     * @param User $user
     * @return void
     */
    private function encodePassword(User $user)
    {
        if (empty($user->getPlainPassword())) {
            return;
        }

        $user->setPassword(
            $this->hasher->hashPassword(
                $user,
                $user->getPlainPassword()
            )
        );

        $user->setPlainPassword(null);
    }
}
