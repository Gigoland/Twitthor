<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[ORM\Entity(repositoryClass: UserRepository::class)]
#[ORM\HasLifecycleCallbacks]
#[UniqueEntity('email')]
#[UniqueEntity('twUserId')]
#[UniqueEntity('twUsername')]
class User
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank()]
    #[Assert\Email()]
    private string $email;

    #[ORM\Column(type: 'string', length: 255)]
    #[Assert\NotBlank()]
    private string $password;

    #[ORM\Column(type: 'string', length: 55)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 1, max: 55)]
    private string $twUserId;

    #[ORM\Column(type: 'string', length: 22)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 1, max: 22)]
    private string $twUsername;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private string $walletEth;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private string $welletSol;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private ?\DateTimeImmutable $createAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    #[Assert\NotNull()]
    private ?\DateTimeImmutable $updateAt;

    #[ORM\OneToMany(mappedBy: 'user', targetEntity: Follower::class, orphanRemoval: true)]
    private $followers;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
        $this->updateAt = new \DateTimeImmutable();
        $this->followers = new ArrayCollection();
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

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getTwUserId(): ?string
    {
        return $this->twUserId;
    }

    public function setTwUserId(string $twUserId): self
    {
        $this->twUserId = $twUserId;

        return $this;
    }

    public function getTwUsername(): ?string
    {
        return $this->twUsername;
    }

    public function setTwUsername(string $twUsername): self
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

    public function getWelletSol(): ?string
    {
        return $this->welletSol;
    }

    public function setWelletSol(?string $welletSol): self
    {
        $this->welletSol = $welletSol;

        return $this;
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

    public function setUpdateAt(?\DateTimeImmutable $updateAt): self
    {
        $this->updateAt = $updateAt;

        return $this;
    }

    /**
     * @return Collection<int, Follower>
     */
    public function getFollowers(): Collection
    {
        return $this->followers;
    }

    public function addFollower(Follower $follower): self
    {
        if (!$this->followers->contains($follower)) {
            $this->followers[] = $follower;
            $follower->setUser($this);
        }

        return $this;
    }

    public function removeFollower(Follower $follower): self
    {
        if ($this->followers->removeElement($follower)) {
            // set the owning side to null (unless already changed)
            if ($follower->getUser() === $this) {
                $follower->setUser(null);
            }
        }

        return $this;
    }
}
