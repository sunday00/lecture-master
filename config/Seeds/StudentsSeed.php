<?php
declare(strict_types=1);

use Migrations\AbstractSeed;

/**
 * Students seed.
 */
class StudentsSeed extends AbstractSeed
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

        for($i=0; $i<10; $i++){
            $nick = explode('.', $faker->userName)[0] . rand(0,9999);
            $age = rand(1,150);
            $country = $faker->country;

            array_push($data, [
                'name' => $nick,
                'age' => $age,
                'country' => $country,
                'created_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
                'modified_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
            ]);
        }

        $table = $this->table('students');
        $table->insert($data)->save();
    }
}
