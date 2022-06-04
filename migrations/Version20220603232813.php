<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220603232813 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE tw_user_meta_data (id INT AUTO_INCREMENT NOT NULL, tw_user_id INT NOT NULL, name VARCHAR(255) NOT NULL, content LONGTEXT DEFAULT NULL, INDEX IDX_C9D300C13EEE0E09 (tw_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE tw_user_meta_data ADD CONSTRAINT FK_C9D300C13EEE0E09 FOREIGN KEY (tw_user_id) REFERENCES tw_user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE tw_user_meta_data');
    }
}
