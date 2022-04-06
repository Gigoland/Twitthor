<?php

namespace App\Entity;

use App\Repository\TwApiRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TwApiRepository::class)]
class TwApi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $ConsumerKey = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $ConsumerSecret = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $AccessToken = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $AccessTokenSecret = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $BearerToken = null;

    #[ORM\Column(type: 'bigint', nullable: true)]
    private ?string $AccountId;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $AccountName = null;

    #[ORM\OneToOne(targetEntity: User::class, inversedBy: 'Follow')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConsumerKey(): ?string
    {
        return $this->ConsumerKey;
    }

    public function setConsumerKey(?string $ConsumerKey): self
    {
        $this->ConsumerKey = $ConsumerKey;

        return $this;
    }

    public function getConsumerSecret(): ?string
    {
        return $this->ConsumerSecret;
    }

    public function setConsumerSecret(string $ConsumerSecret): self
    {
        $this->ConsumerSecret = $ConsumerSecret;

        return $this;
    }

    public function getAccessToken(): ?string
    {
        return $this->AccessToken;
    }

    public function setAccessToken(?string $AccessToken): self
    {
        $this->AccessToken = $AccessToken;

        return $this;
    }

    public function getAccessTokenSecret(): ?string
    {
        return $this->AccessTokenSecret;
    }

    public function setAccessTokenSecret(?string $AccessTokenSecret): self
    {
        $this->AccessTokenSecret = $AccessTokenSecret;

        return $this;
    }

    public function getBearerToken(): ?string
    {
        return $this->BearerToken;
    }

    public function setBearerToken(?string $BearerToken): self
    {
        $this->BearerToken = $BearerToken;

        return $this;
    }

    public function getAccountId(): ?string
    {
        return $this->AccountId;
    }

    public function setAccountId(?string $AccountId): self
    {
        $this->AccountId = $AccountId;

        return $this;
    }

    public function getAccountName(): ?string
    {
        return $this->AccountName;
    }

    public function setAccountName(?string $AccountName): self
    {
        $this->AccountName = $AccountName;

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
}
