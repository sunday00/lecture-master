<?php

namespace Lib\queries;

use App\Models\Address;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Lib\types\AddressType;

class AddressQuery
{
  private $type;

  public function __construct() {
    $this->type = (new AddressType)->get();
  }

  public function getQuery ($param = null)
  {
    if ($param) {
        return $this->getListQuery();
    }
    return new ObjectType([
      'name'    => 'Query',
      'fields'  => [
        'address'    => [
          'type'  =>  $this->type,
          'args'  =>  [
            'id'  =>  Type::nonNull(Type::int()),
          ],
          'resolve' => function($root, $args){
            return Address::find($args['id'])->toArray();
          }
        ]
      ]
    ]);
  }

  public function getListQuery()
  {
    return new ObjectType([
      'name'    => 'Query',
      'fields'  => [
        'addresses'    => [
          'type'  =>  Type::listOf($this->type),
          'args'  =>  [
            'user_id'  =>  Type::nonNull(Type::int()),
          ],
          'resolve' => function($root, $args){
            return Address::where('user_id', $args['user_id'])
              ->get()->toArray();
          }
        ]
      ]
    ]);
  }
}