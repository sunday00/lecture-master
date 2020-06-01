<?php

class CustomerRepositoryTest extends \PHPUnit\Framework\TestCase
{

    protected $customers;

    protected function setUp() :void
    {
        $this->customers = new CustomerRepository(
            [
                new Customer('gold'),
                new Customer('bronze'),
                new Customer('silver'),
                new Customer('gold'),
            ]
        );
    }

    /** @test */
    public function it_fetches_all_customer_who_match_a_given_specification()
    {
        $customers = new CustomerRepository(
            [
                new Customer('gold'),
                new Customer('bronze'),
                new Customer('silver'),
                new Customer('gold'),
            ]
        );

        $results = $customers->bySpecification(new CustomerIsGold);

        $this->assertCount( 2, $results );
    }

    /** @test */
    public function is_fetches_all_customers()
    {
        $results = $this->customers->all();
        $this->assertCount( 4, $results );
    }
}
