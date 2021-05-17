<?php
declare(strict_types=1);

use Migrations\AbstractSeed;

/**
 * Articles seed.
 */
class ArticlesSeed extends AbstractSeed
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
        $faker = \Faker\Factory::create();

        $table = $this->table('articles');
        for($i=0; $i<10; $i++){
            $title = $faker->realText($faker->numberBetween(10,20));
            $detail = $faker->realText($faker->numberBetween(10,200), $faker->numberBetween(1,5));

            array_push($data, [
                'title' => $title,
                'detail' => $detail,
                'created_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
                'modified_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
            ]);
        }
        $table->insert($data)->save();
    }
}
