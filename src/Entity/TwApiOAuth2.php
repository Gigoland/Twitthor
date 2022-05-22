<?php

namespace App\Entity;

use App\Entity\TwApi;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TwApiOAuth2Repository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: TwApiOAuth2Repository::class)]
class TwApiOAuth2
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 50, nullable: true)]
    private ?string $tokenType;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(max: 255)]
    private ?string $accessToken;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(max: 255)]
    private ?string $refreshToken;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    #[Assert\Length(max: 255)]
    private ?string $scope;

    #[ORM\Column(type: 'integer', nullable: true)]
    private ?int $expiresIn;

    #[ORM\Column(type: 'datetime_immutable', nullable: false)]
    #[Assert\NotNull()]
    private \DateTimeImmutable $updateAt;

    #[ORM\OneToOne(inversedBy: 'twApiOAuth2', targetEntity: TwApi::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TwApi $twApi;

    /**
     * Constructor
     */
    public function __construct()
    {
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

    public function getTokenType(): ?string
    {
        return $this->tokenType;
    }

    public function setTokenType(?string $tokenType): self
    {
        $this->tokenType = $tokenType;

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

    public function getRefreshToken(): ?string
    {
        return $this->refreshToken;
    }

    public function setRefreshToken(?string $refreshToken): self
    {
        $this->refreshToken = $refreshToken;

        return $this;
    }

    public function getScope(): ?string
    {
        return $this->scope;
    }

    public function setScope(?string $scope): self
    {
        $this->scope = $scope;

        return $this;
    }

    public function getExpiresIn(): ?int
    {
        return $this->expiresIn;
    }

    public function setExpiresIn(?int $expiresIn): self
    {
        $this->expiresIn = $expiresIn;

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

    public function getTwApi(): ?TwApi
    {
        return $this->twApi;
    }

    public function setTwApi(TwApi $twApi): self
    {
        $this->twApi = $twApi;

        return $this;
    }
}
