<?php

namespace Lib\types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

use App\Models\Address;
use Lib\types\AddressType;

class UserType
{
  private $addressType;

  public function __construct() {
    $this->addressType = new AddressType;
  }

  public function get()
  {
    return new ObjectType([
      'name'        => 'User',
      'description' => 'this is user for qraphql tutorial',
      'fields'      => [
        'id'          => Type::int(),
        'first_name'  => Type::string(),
        'last_name'   => Type::string(),
        'email'       => Type::string(),
        'addresses'   => [
          'type'    => Type::listOf($this->addressType->get()),
          'resolve' => function($root, $args){
            // $userId = $root['id'];
            // return User::where('id', $userId)
            //   ->with(['addresses'])->first()
            //   ->addresses->toArray();
            return Address::where('user_id', $root['id'])->get()->toArray();
          }
        ]
      ]
    ]);
  } 
}