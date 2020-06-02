<?php

class CustomerRepository
{
    protected $customers;

    public function bySpecification($customerSpecification)
    {
        $matches = [];
        foreach ( $this->all() as $customer ) {
            if( $customerSpecification->isSatisfiedBy($customer) ) $matches[] = $customer ;
        }
        return $matches;
    }

    public function all()
    {
        return Customer::all();
    }
}