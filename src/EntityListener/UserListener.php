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
     */
    public function prePersist(User $user)
    {
        $this->encodePassword($user);
    }

    /**
     * Update
     */
    public function preUpdate(User $user)
    {
        $this->encodePassword($user);
    }

    /**
     * Password hasher
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
