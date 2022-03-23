<?php

namespace App\Entity;

use App\Repository\FollowerRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: FollowerRepository::class)]
class Follower
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 55)]
    #[Assert\Unique()]
    #[Assert\NotBlank()]
    #[Assert\Length(max: 55)]
    private $twUserId;

    #[ORM\Column(type: 'string', length: 22)]
    #[Assert\Unique()]
    #[Assert\NotBlank()]
    #[Assert\Length(max: 22)]
    private $twUsername;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank()]
    private $twName;

    #[ORM\Column(type: 'boolean')]
    private $twVerified;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(max: 55)]
    private $walletEth;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(max: 55)]
    private $walletSol;

    #[ORM\Column(type: 'boolean')]
    private $favorite;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private $createAt;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private $updateAt;

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

    public function getTwVerified(): ?bool
    {
        return $this->twVerified;
    }

    public function setTVerified(bool $twVerified): self
    {
        $this->twVerified = $twVerified;

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

    public function getFavorite(): ?bool
    {
        return $this->favorite;
    }

    public function setFavorite(bool $favorite): self
    {
        $this->favorite = $favorite;

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
