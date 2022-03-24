<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220323193438 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE follower (id INT AUTO_INCREMENT NOT NULL, tw_user_id VARCHAR(55) NOT NULL, tw_username VARCHAR(22) NOT NULL, tw_name LONGTEXT NOT NULL, tw_is_verified TINYINT(1) NOT NULL, wallet_eth VARCHAR(55) DEFAULT NULL, wallet_sol VARCHAR(55) DEFAULT NULL, is_favorite TINYINT(1) NOT NULL, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id), UNIQUE(tw_user_id, tw_username)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE follower');
    }
}
