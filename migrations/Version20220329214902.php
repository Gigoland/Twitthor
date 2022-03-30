<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220329214902 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE follower ADD tw_user_id INT NOT NULL');
        $this->addSql('ALTER TABLE follower ADD CONSTRAINT FK_B9D609463EEE0E09 FOREIGN KEY (tw_user_id) REFERENCES tw_user (id)');
        $this->addSql('CREATE INDEX IDX_B9D609463EEE0E09 ON follower (tw_user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE follower DROP FOREIGN KEY FK_B9D609463EEE0E09');
        $this->addSql('DROP INDEX IDX_B9D609463EEE0E09 ON follower');
        $this->addSql('ALTER TABLE follower DROP tw_user_id');
    }
}
