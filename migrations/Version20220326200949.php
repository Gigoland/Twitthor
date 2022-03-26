<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220326200949 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, tw_user_id VARCHAR(55) NOT NULL, tw_username VARCHAR(22) NOT NULL, wallet_eth VARCHAR(55) DEFAULT NULL, wellet_sol VARCHAR(55) DEFAULT NULL, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('DROP INDEX tw_user_id ON follower');
        $this->addSql('ALTER TABLE follower ADD user_id INT NOT NULL');
        $this->addSql('ALTER TABLE follower ADD CONSTRAINT FK_B9D60946A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_B9D60946A76ED395 ON follower (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE follower DROP FOREIGN KEY FK_B9D60946A76ED395');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP INDEX IDX_B9D60946A76ED395 ON follower');
        $this->addSql('ALTER TABLE follower DROP user_id, CHANGE tw_user_id tw_user_id VARCHAR(55) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE tw_username tw_username VARCHAR(22) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE tw_name tw_name LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE wallet_eth wallet_eth VARCHAR(55) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE wallet_sol wallet_sol VARCHAR(55) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('CREATE UNIQUE INDEX tw_user_id ON follower (tw_user_id, tw_username)');
    }
}
