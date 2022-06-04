<?php

namespace App\Entity;

use App\Repository\TwUserMetaDataRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TwUserMetaDataRepository::class)]
class TwUserMetaData
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private ?int $id;

    #[ORM\Column(type: 'string', length: 255, nullable: false)]
    private ?string $name;

    #[ORM\Column(type: 'text', nullable: true)]
    private ?string $content;

    #[ORM\ManyToOne(targetEntity: TwUser::class, inversedBy: 'twUserMetaData')]
    #[ORM\JoinColumn(nullable: false)]
    private ?TwUser $twUser;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getContentInt(): int
    {
        return is_numeric($this->content)
            ? intval($this->content)
            : 0;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(?string $content): self
    {
        $this->content = $content;

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
