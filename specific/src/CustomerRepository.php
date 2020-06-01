<?php

class CustomerRepository
{
    protected $customers;

    public function __construct($customers) {
        $this->customers = $customers;
    }

    public function bySpecification($customerSpecification)
    {
        $matches = [];
        foreach ( $this->customers as $customer ) {
            if( $customerSpecification->isSatisfiedBy($customer) ) $matches[] = $customer ;
        }
        return $matches;
    }

    public function all()
    {
        return $this->customers;
    }
}