<?php

namespace App\Entity;

use App\Repository\TwApiRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TwApiRepository::class)]
class TwApi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $consumerKey = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $consumerSecret = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $accessToken = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $accessTokenSecret = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $bearerToken = null;

    #[ORM\Column(type: 'bigint', nullable: true)]
    private ?string $accountId = null;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(min: 1, max: 255)]
    private ?string $accountName = null;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'twApis')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getConsumerKey(): ?string
    {
        return $this->consumerKey;
    }

    public function setConsumerKey(?string $consumerKey): self
    {
        $this->consumerKey = $consumerKey;

        return $this;
    }

    public function getConsumerSecret(): ?string
    {
        return $this->consumerSecret;
    }

    public function setConsumerSecret(?string $consumerSecret): self
    {
        $this->consumerSecret = $consumerSecret;

        return $this;
    }

    public function getAccessToken(): ?string
    {
        return $this->accessToken;
    }

    public function setAccessToken(?string $accessToken): self
    {
        $this->accessToken = $accessToken;

        return $this;
    }

    public function getAccessTokenSecret(): ?string
    {
        return $this->accessTokenSecret;
    }

    public function setAccessTokenSecret(?string $accessTokenSecret): self
    {
        $this->accessTokenSecret = $accessTokenSecret;

        return $this;
    }

    public function getBearerToken(): ?string
    {
        return $this->bearerToken;
    }

    public function setBearerToken(?string $bearerToken): self
    {
        $this->bearerToken = $bearerToken;

        return $this;
    }

    public function getAccountId(): ?string
    {
        return $this->accountId;
    }

    public function setAccountId(?string $accountId): self
    {
        $this->accountId = $accountId;

        return $this;
    }

    public function getAccountName(): ?string
    {
        return $this->accountName;
    }

    public function setAccountName(?string $accountName): self
    {
        $this->accountName = $accountName;

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
