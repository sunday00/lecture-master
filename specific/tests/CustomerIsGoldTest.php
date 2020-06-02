<?php

class CustomerIsGoldTest extends \PHPUnit\Framework\TestCase
{

    /** @test */
    public function a_customer_is_gold_if_they_have_the_respective_type()
    {
        $spec = new CustomerIsGold;

        $customer = new Customer(['type' => 'gold']);

        $this->assertTrue( $spec->isSatisfiedBy($customer) );
    }
    
    
    
}
