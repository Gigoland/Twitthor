<?php

namespace App\Entity;

use App\Repository\FollowerRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FollowerRepository::class)]
#[UniqueEntity('twUserId')]
#[UniqueEntity('twUsername')]
class Follower
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 55)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 1, max: 55)]
    private string $twUserId;

    #[ORM\Column(type: 'string', length: 22)]
    #[Assert\NotBlank()]
    #[Assert\Length(min: 1, max: 22)]
    private string $twUsername;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank()]
    private string $twName;

    #[ORM\Column(type: 'boolean', nullable: false)]
    private bool $twIsVerified = false;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletEth;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(min: 1, max: 55)]
    private ?string $walletSol;

    #[ORM\Column(type: 'boolean', nullable: false)]
    private bool $isFavorite = false;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private ?\DateTimeImmutable $createAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $updateAt;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getTwName(): ?string
    {
        return $this->twName;
    }

    public function setTwName(string $twName): self
    {
        $this->twName = $twName;

        return $this;
    }

    public function getTwIsVerified(): ?bool
    {
        return $this->twIsVerified;
    }

    public function setTwIsVerified(bool $twIsVerified): self
    {
        $this->twIsVerified = (bool) $twIsVerified;

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

    public function getIsFavorite(): ?bool
    {
        return $this->isFavorite;
    }

    public function setIsFavorite(bool $isFavorite): self
    {
        $this->isFavorite = (bool) $isFavorite;

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
}
