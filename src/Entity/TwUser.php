<?php

namespace App\Entity;

use App\Entity\Follow;
use Doctrine\ORM\Mapping as ORM;
use App\Repository\TwUserRepository;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

#[UniqueEntity('twUserId')]
#[UniqueEntity('twUsername')]
#[ORM\HasLifecycleCallbacks]
#[ORM\Entity(repositoryClass: TwUserRepository::class)]
class TwUser
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'bigint', nullable: false)]
    #[Assert\NotNull()]
    private string $twUserId;

    #[ORM\Column(type: 'string', length: 22)]
    #[Assert\Length(min: 1, max: 22)]
    #[Assert\NotBlank()]
    private string $twUsername;

    #[ORM\Column(type: 'text')]
    #[Assert\NotBlank()]
    private string $twName;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $twProfileImageUrl;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private ?string $twUrl;

    #[ORM\Column(type: 'boolean', nullable: false, options: ['default' => 0])]
    #[Assert\NotNull()]
    private bool $twIsVerified = false;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $twCreatedAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $createAt;

    #[ORM\Column(type: 'datetime_immutable')]
    #[Assert\NotNull()]
    private \DateTimeImmutable $updateAt;

    #[ORM\OneToMany(mappedBy: 'twUser', targetEntity: Follow::class, orphanRemoval: true)]
    private $follows;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->createAt = new \DateTimeImmutable();
        $this->updateAt = new \DateTimeImmutable();

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

    public function getTwProfileImageUrl(): ?string
    {
        return $this->twProfileImageUrl;
    }

    public function setTwProfileImageUrl(?string $twProfileImageUrl): self
    {
        $this->twProfileImageUrl = $twProfileImageUrl;

        return $this;
    }

    public function getTwUrl(): ?string
    {
        return $this->twUrl;
    }

    public function seTwtUrl(?string $twUrl): self
    {
        $this->twUrl = $twUrl;

        return $this;
    }

    public function getTwIsVerified(): ?bool
    {
        return $this->twIsVerified;
    }

    public function setTwIsVerified(string $twIsVerified): self
    {
        $this->twIsVerified = $twIsVerified;

        return $this;
    }

    public function getTwCreatedAt(): ?\DateTimeImmutable
    {
        return $this->twCreatedAt;
    }

    public function setTwCreatedAt(\DateTimeImmutable $twCreatedAt): self
    {
        $this->twCreatedAt = $twCreatedAt;

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
            $follow->setTwUser($this);
        }

        return $this;
    }

    public function removeFollow(Follow $follow): self
    {
        if ($this->follows->removeElement($follow)) {
            // set the owning side to null (unless already changed)
            if ($follow->getTwUser() === $this) {
                $follow->setTwUser(null);
            }
        }

        return $this;
    }
}
