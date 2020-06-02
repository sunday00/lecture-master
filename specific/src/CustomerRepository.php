<?php

class CustomerRepository
{
    protected $customers;

    public function bySpecification($customerSpecification)
    {
        // $matches = [];
        // foreach ( $this->all() as $customer ) {
        //     if( $customerSpecification->isSatisfiedBy($customer) ) $matches[] = $customer ;
        // }
        // return $matches;

        $customers = Customer::query();
        $customers = $customerSpecification->asScope($customers);

        return $customers->get();
    }

    public function all()
    {
        return Customer::all();
    }
}