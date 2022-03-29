<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;

#[UniqueEntity('email')]
#[ORM\HasLifecycleCallbacks]
#[ORM\EntityListeners(['App\EntityListener\UserListener'])]
#[ORM\Entity(repositoryClass: UserRepository::class)]
class User implements UserInterface, PasswordAuthenticatedUserInterface
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 180, unique: true)]
    #[Assert\Email()]
    #[Assert\Length(min: 5, max: 180)]
    private string $email;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $TwUserId = null;

    #[ORM\Column(type: 'string', length: 22, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $twUsername = null;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletEth = null;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletSol = null;

    #[ORM\Column(type: 'json')]
    #[Assert\NotNull()]
    private array $roles = [];

    #[ORM\Column(type: 'string')]
    #[Assert\NotBlank()]
    private string $password = 'password';

    private ?string $plainPassword = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $createAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $updateAt;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
        $this->updateAt = new \DateTimeImmutable();
    }

    #[ORM\PrePersist()]
    public function setUpdateAtValue()
    {
        $this->updateAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * A visual identifier that represents this user.
     *
     * @see UserInterface
     */
    public function getUserIdentifier(): string
    {
        return (string) $this->email;
    }

    public function getTwUserId(): ?string
    {
        return $this->TwUserId;
    }

    public function setTwUserId(?string $TwUserId): self
    {
        $this->TwUserId = $TwUserId;

        return $this;
    }

    public function getTwUsername(): ?string
    {
        return $this->twUsername;
    }

    public function setTwUsername(?string $twUsername): self
    {
        $this->twUsername = $twUsername;

        return $this;
    }

    public function getWalletEth(): ?string
    {
        return $this->walletEth;
    }

    public function setWalletEth(?string $walletEth): self
    {
        $this->walletEth = $walletEth;

        return $this;
    }

    public function getWalletSol(): ?string
    {
        return $this->walletSol;
    }

    public function setWalletSol(?string $walletSol): self
    {
        $this->walletSol = $walletSol;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function getRoles(): array
    {
        $roles = $this->roles;
        $roles[] = 'ROLE_USER';

        return array_unique($roles);
    }

    public function setRoles(array $roles): self
    {
        $this->roles = $roles;

        return $this;
    }

    /**
     * @see PasswordAuthenticatedUserInterface
     */
    public function getPassword(): string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getPlainPassword()
    {
        return $this->plainPassword;
    }

    public function setPlainPassword($plainPassword): self
    {
        $this->plainPassword = $plainPassword;

        return $this;
    }

    /**
     * @see UserInterface
     */
    public function eraseCredentials()
    {
        // If you store any temporary, sensitive data on the user, clear it here
        // $this->plainPassword = null;
    }

    public function getCreateAt(): ?\DateTimeImmutable
    {
        return $this->createAt;
    }

    public function setCreateAt(\DateTimeImmutable $createAt): self
    {
        $this->createAt = $createAt;

        return $this;
    }

    public function getUpdateAt(): ?\DateTimeImmutable
    {
        return $this->updateAt;
    }

    public function setUpdateAt(\DateTimeImmutable $updateAt): self
    {
        $this->updateAt = $updateAt;

        return $this;
    }
}
