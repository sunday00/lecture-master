<?php

namespace Lib\types;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class AddressType
{
  public static function get()
  {
    return new ObjectType([
      'name'        => 'Address',
      'description' => 'this is address for qraphql tutorial',
      'fields'      => [
        'id'          => Type::int(),
        'user_id'     => Type::int(),
        'name'        => Type::string(),
        'description' => Type::string(),
      ]
    ]);
  } 
}