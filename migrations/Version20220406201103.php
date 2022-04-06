<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220406201103 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE follow (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, tw_user_id INT NOT NULL, is_follower TINYINT(1) NOT NULL DEFAULT 0, is_following TINYINT(1) NOT NULL DEFAULT 0, is_favorite TINYINT(1) NOT NULL DEFAULT 0, wallet_eth VARCHAR(55) DEFAULT NULL, wallet_sol VARCHAR(55) DEFAULT NULL, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_68344470A76ED395 (user_id), INDEX IDX_683444703EEE0E09 (tw_user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tw_api (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, consumer_key VARCHAR(255) DEFAULT NULL, consumer_secret VARCHAR(255) DEFAULT NULL, access_token VARCHAR(255) DEFAULT NULL, access_token_secret VARCHAR(255) DEFAULT NULL, bearer_token VARCHAR(255) DEFAULT NULL, account_id BIGINT DEFAULT NULL, account_name VARCHAR(255) DEFAULT NULL, UNIQUE INDEX UNIQ_ABA9CC42A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tw_user (id INT AUTO_INCREMENT NOT NULL, tw_user_id BIGINT NOT NULL, tw_username VARCHAR(22) NOT NULL, tw_name LONGTEXT NOT NULL, tw_is_verified TINYINT(1) NOT NULL DEFAULT 0, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, tw_user_id VARCHAR(55) DEFAULT NULL, tw_username VARCHAR(22) DEFAULT NULL, wallet_eth VARCHAR(55) DEFAULT NULL, wallet_sol VARCHAR(55) DEFAULT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, create_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', update_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE follow ADD CONSTRAINT FK_68344470A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE follow ADD CONSTRAINT FK_683444703EEE0E09 FOREIGN KEY (tw_user_id) REFERENCES tw_user (id)');
        $this->addSql('ALTER TABLE tw_api ADD CONSTRAINT FK_ABA9CC42A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE follow DROP FOREIGN KEY FK_683444703EEE0E09');
        $this->addSql('ALTER TABLE follow DROP FOREIGN KEY FK_68344470A76ED395');
        $this->addSql('ALTER TABLE tw_api DROP FOREIGN KEY FK_ABA9CC42A76ED395');
        $this->addSql('DROP TABLE follow');
        $this->addSql('DROP TABLE tw_api');
        $this->addSql('DROP TABLE tw_user');
        $this->addSql('DROP TABLE user');
    }
}
