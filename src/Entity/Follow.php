<?php

namespace App\Entity;

use App\Entity\User;
use App\Entity\TwUser;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\FollowRepository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: FollowRepository::class)]
class Follow
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private bool $isFollowing = false;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private bool $isFollower = false;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private bool $isFavorite = false;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletEth = null;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletSol = null;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $createAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $updateAt;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'follows')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[ORM\ManyToOne(targetEntity: TwUser::class, inversedBy: 'follows')]
    #[ORM\JoinColumn(nullable: false)]
    private $twUser;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
        $this->updateAt = new \DateTimeImmutable();
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

    public function getIsFollower(): ?bool
    {
        return $this->isFollower;
    }

    public function setIsFollower(bool $isFollower): self
    {
        $this->isFollower = (bool) $isFollower;

        return $this;
    }

    public function getIsFollowing(): ?bool
    {
        return $this->isFollowing;
    }

    public function setIsFollowing(bool $isFollowing): self
    {
        $this->isFollowing = (bool) $isFollowing;

        return $this;
    }

    public function getIsFavorite(): ?bool
    {
        return $this->isFavorite;
    }

    public function setIsFavorite(bool $isFavorite): self
    {
        $this->isFavorite = (bool) $isFavorite;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    public function getTwUser(): ?TwUser
    {
        return $this->twUser;
    }

    public function setTwUser(?TwUser $twUser): self
    {
        $this->twUser = $twUser;

        return $this;
    }
}
