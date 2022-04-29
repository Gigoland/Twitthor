<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220428194713 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tw_api_call (id INT AUTO_INCREMENT NOT NULL, tw_api_id INT NOT NULL, following_cnt INT(7) NOT NULL DEFAULT 0, following_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', followers_cnt INT(7) NOT NULL DEFAULT 0, followers_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_1459067FDD1A1F3B (tw_api_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tw_api_call ADD CONSTRAINT FK_1459067FDD1A1F3B FOREIGN KEY (tw_api_id) REFERENCES tw_api (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE tw_api_call');
    }
}
