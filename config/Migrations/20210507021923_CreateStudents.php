<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class CreateStudents extends AbstractMigration
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
        $table = $this->table('students');
        $table->addColumn('name', 'string', [
            'limit' => 50,
            'null'  => false
        ]);
        $table->addColumn('age', 'integer', [
            'null'  => false
        ]);
        $table->addColumn('country', 'string', [
            'limit' => 50,
            'null'  => true
        ]);
        $table->addColumn('created_at', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('modified_at', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->create();
    }
}
