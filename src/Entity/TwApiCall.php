<?php

namespace App\Entity;

use App\Entity\TwApi;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TwApiCallRepository;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: TwApiCallRepository::class)]
class TwApiCall
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private int $followingCnt = 0;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $followingAt;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private int $followersCnt = 0;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $followersAt;

    #[ORM\Column(type: 'integer', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private int $unfollowCnt = 0;

    #[ORM\Column(type: 'datetime_immutable', nullable: true)]
    private ?\DateTimeImmutable $unfollowAt;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    private ?string $nextToken;

    #[ORM\Column(type: 'string', length: 55, nullable: true)]
    private ?string $processToken;

    #[ORM\OneToOne(inversedBy: 'twApiCall', targetEntity: TwApi::class, cascade: ['persist', 'remove'])]
    #[ORM\JoinColumn(nullable: false)]
    private ?TwApi $twApi;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFollowingCnt(): int
    {
        return $this->followingCnt;
    }

    public function setFollowingCnt(int $followingCnt): self
    {
        $this->followingCnt = $followingCnt;

        return $this;
    }

    public function getFollowingAt(): ?\DateTimeImmutable
    {
        return $this->followingAt;
    }

    public function setFollowingAt(?\DateTimeImmutable $followingAt): self
    {
        $this->followingAt = $followingAt;

        return $this;
    }

    public function getFollowersCnt(): int
    {
        return $this->followersCnt;
    }

    public function setFollowersCnt(int $followersCnt): self
    {
        $this->followersCnt = $followersCnt;

        return $this;
    }

    public function getFollowersAt(): ?\DateTimeImmutable
    {
        return $this->followersAt;
    }

    public function setFollowersAt(?\DateTimeImmutable $followersAt): self
    {
        $this->followersAt = $followersAt;

        return $this;
    }

    public function getUnfollowCnt(): ?int
    {
        return $this->unfollowCnt;
    }

    public function setUnfollowCnt(int $unfollowCnt): self
    {
        $this->unfollowCnt = $unfollowCnt;

        return $this;
    }

    public function getUnfollowAt(): ?\DateTimeImmutable
    {
        return $this->unfollowAt;
    }

    public function setUnfollowAt(?\DateTimeImmutable $unfollowAt): self
    {
        $this->unfollowAt = $unfollowAt;

        return $this;
    }

    public function getNextToken(): ?string
    {
        return $this->nextToken;
    }

    public function setNextToken(?string $nextToken): self
    {
        $this->nextToken = $nextToken;

        return $this;
    }

    public function getProcessToken(): ?string
    {
        return $this->processToken;
    }

    public function setProcessToken(?string $processToken): self
    {
        $this->processToken = $processToken;

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
