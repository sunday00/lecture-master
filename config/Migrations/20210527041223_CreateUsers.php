<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class CreateUsers extends AbstractMigration
{
    /**
     * Change Method.
     *
     * More information on this method is available here:
     * https://book.cakephp.org/phinx/0/en/migrations.html#the-change-method
     * @return void
     */
    public function change()
    {
        $table = $this->table('users');
        $table->addColumn('username', 'string', [
            'limit' => 150,
            'null'  => false
        ]);
        $table->addColumn('email', 'string', [
            'limit' => 150,
            'null'  => false
        ]);
        $table->addColumn('image', 'string', [
            'limit' => 255,
            'null'  => true
        ]);
        $table->addColumn('password', 'string', [
            'limit' => 255,
            'null'  => false
        ]);
        $table->addColumn('created_at', 'datetime', [
            'default' => 'CURRENT_TIMESTAMP',
            'null'  => true
        ]);
        $table->addColumn('modified_at', 'datetime', [
            'default' => 'CURRENT_TIMESTAMP',
            'null' => true,
        ]);
        $table->create();
    }
}
