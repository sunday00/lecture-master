<?php
declare(strict_types=1);

use Migrations\AbstractSeed;
use Faker\Factory;
use Cake\Auth\DefaultPasswordHasher;

/**
 * User seed.
 */
class UserSeed extends AbstractSeed
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
        $table = $this->table('users');
        for($i=0; $i<10; $i++){

            $name = $faker->userName;
            $pw = $faker->password;

            array_push($data, [
                'username' => $name,
                'email' => $faker->email,
                'password' => (new DefaultPasswordHasher)->hash($pw),
                'created_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
                'modified_at' => $faker->dateTimeBetween('-1 years', 'now', null)->format('Y-m-d H:i:s'),
            ]);

            echo "\n {$name} : $pw ";
        }
        $table->insert($data)->save();
    }
}
