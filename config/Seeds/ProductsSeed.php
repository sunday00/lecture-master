<?php
declare(strict_types=1);

use Migrations\AbstractSeed;
use Faker\Factory;

/**
 * Products seed.
 */
class ProductsSeed extends AbstractSeed
{
    /**
     * Run Method.
     *
     * Write your database seeder using this method.
     *
     * More information on writing seeds is available here:
     * https://book.cakephp.org/phinx/0/en/seeding.html
     *
     * @return void
     */
    public function run()
    {
        $data = [];
        $faker = Factory::create();
        $faker->addProvider(new \Bezhanov\Faker\Provider\Commerce($faker));
        $table = $this->table('products');

        for($i=0; $i<10; $i++){
            array_push($data, [
                'name' => $faker->productName(),
                'stocks' => $faker->numberBetween(0, 100),
                'manufacturer' => $faker->company(),
                'price' => $faker->numberBetween(1, 1000),
                'created_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
                'modified_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
                'category_id' => $faker->numberBetween(1, 2),
            ]);
        }

        $table->insert($data)->save();
    } 
}
