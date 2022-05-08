<?php

namespace App\Entity;

use App\Entity\User;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TwApiRepository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TwApiRepository::class)]
class TwApi
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    #[Assert\Length(max: 55)]
    private $name;

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

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private $isActive;

    #[ORM\ManyToOne(targetEntity: User::class, inversedBy: 'twApis')]
    #[ORM\JoinColumn(nullable: false)]
    private $user;

    #[ORM\OneToOne(mappedBy: 'twApi', targetEntity: TwApiCall::class, cascade: ['persist', 'remove'])]
    private $twApiCall;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
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

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(bool $isActive): self
    {
        $this->isActive = $isActive;

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

    public function getTwApiCall(): ?TwApiCall
    {
        return $this->twApiCall;
    }

    public function setTwApiCall(TwApiCall $twApiCall): self
    {
        // set the owning side of the relation if necessary
        if ($twApiCall->getTwApi() !== $this) {
            $twApiCall->setTwApi($this);
        }

        $this->twApiCall = $twApiCall;

        return $this;
    }
}
