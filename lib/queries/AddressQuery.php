<?php

namespace Lib\queries;

use App\Models\Address;
use GraphQL\Type\Definition\Type;

class AddressQuery
{
  public $name = "address";

  public static function getQuery ($types)
  {
    return [
      'type'  =>  $types['address'],
      'args'  =>  [
        'id'  =>  Type::nonNull(Type::int()),
      ],
      'resolve' => function($root, $args){
        return Address::find($args['id'])->toArray();
      }
    ];
  }
}