<?php
declare(strict_types=1);

use Migrations\AbstractMigration;

class CreateProducts extends AbstractMigration
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
        $table = $this->table('products');
        $table->addColumn('name', 'string', [
            'limit' => 50,
            'null'  => false
        ]);
        $table->addColumn('stocks', 'integer', [
            'null'  => false
        ]);
        $table->addColumn('manufacturer', 'string', [
            'limit' => 50,
            'null'  => true
        ]);
        $table->addColumn('price', 'integer', [
            'null'  => false
        ]);
        $table->addColumn('created_at', 'datetime', [
            'default' => null,
            'null' => false,
        ]);
        $table->addColumn('modified_at', 'datetime', [
            'default' => null,
            'null' => false,
        ]);

        $table->addColumn('category_id', 'integer')
            ->addForeignKey(
            'category_id',
            'categories',
            'id',
            ['delete'=> 'CASCADE', 'update'=> 'CASCADE']);

        $table->create();
    }
}
