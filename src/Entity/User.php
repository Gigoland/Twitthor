<?php

namespace App\Entity;

use App\Entity\TwApi;
use App\Entity\Follow;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\UserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;

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
    #[Assert\Length(min: 5, max: 180)]
    #[Assert\Email()]
    private string $email;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $twUserId = null;

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

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: TwApi::class, cascade: ['remove'], orphanRemoval: true)]
    private $twApis;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Follow::class, cascade: ['remove'], orphanRemoval: true)]
    private $follows;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
        $this->updateAt = new \DateTimeImmutable();

        $this->twApis = new ArrayCollection();
        $this->follows = new ArrayCollection();
    }

    #[ORM\PrePersist()]
    #[ORM\PreUpdate()]
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
        return $this->twUserId;
    }

    public function setTwUserId(?string $twUserId): self
    {
        $this->twUserId = $twUserId;

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

    /**
     * @return Collection<int, TwApi>
     */
    public function getTwApis(): Collection
    {
        return $this->twApis;
    }

    public function addTwApi(TwApi $twApi): self
    {
        if (!$this->twApis->contains($twApi)) {
            $this->twApis[] = $twApi;
            $twApi->setUser($this);
        }

        return $this;
    }

    public function removeTwApi(TwApi $twApi): self
    {
        if ($this->twApis->removeElement($twApi)) {
            // set the owning side to null (unless already changed)
            if ($twApi->getUser() === $this) {
                $twApi->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Follow>
     */
    public function getFollows(): Collection
    {
        return $this->follows;
    }

    public function addFollow(Follow $follow): self
    {
        if (!$this->follows->contains($follow)) {
            $this->follows[] = $follow;
            $follow->setUser($this);
        }

        return $this;
    }

    public function removeFollow(Follow $follow): self
    {
        if ($this->follows->removeElement($follow)) {
            // set the owning side to null (unless already changed)
            if ($follow->getUser() === $this) {
                $follow->setUser(null);
            }
        }

        return $this;
    }
}
