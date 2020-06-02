<?php

use Illuminate\Database\Capsule\Manager as DB;

class CustomerRepositoryTest extends \PHPUnit\Framework\TestCase
{

    protected $customers;

    protected function setUp() :void
    {
        $this->setupDatabase();

        $this->migrateTables();

        $this->customers = new CustomerRepository;
    }

    protected  function setupDatabase ()
    {
        $db = new DB;
        $db->addConnection([
            'driver' => 'sqlite',
            'database' => ':memory:'
        ]);

        $db->bootEloquent();
        $db->setAsGlobal();
    }

    protected function migrateTables()
    {
        DB::schema()->create('customers', function ($table) {
            $table->increments('id');
            $table->string('name');
            $table->string('type');
            $table->timestamps();
        });

        Customer::create(['name' => 'Joe', 'type' => 'gold']);
        Customer::create(['name' => 'Jane', 'type' => 'silver']);
        Customer::create(['name' => 'Moe', 'type' => 'bronze']);
        Customer::create(['name' => 'Kim', 'type' => 'gold']);
    }

    /** @test */
    public function it_fetches_all_customer_who_match_a_given_specification()
    {
        $results = $this->customers->bySpecification(new CustomerIsGold);
        
        $this->assertCount( 2, $results );
    }

    /** @test */
    public function is_fetches_all_customers()
    {
        $results = $this->customers->all();
        $this->assertCount( 4, $results );
    }
}
