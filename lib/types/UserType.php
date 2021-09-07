<?php

namespace Lib\types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

use App\Models\Address;

class UserType
{
  public static function get($addressType)
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
          'type'    => Type::listOf($addressType),
          'resolve' => function($root, $args){
            return Address::where('user_id', $root['id'])->get()->toArray();
          }
        ]
      ]
    ]);
  } 
}