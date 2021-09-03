<?php

namespace Lib\queries;

use App\Models\User;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

class UserQuery
{
  private $type;

  public function getQuery ($types, $param = null)
  {
    return new ObjectType([
      'name'    => 'Query',
      'fields'  => [
        'user'    => [
          'type'  =>  $types['user'],
          'args'  =>  [
            'id'  =>  Type::nonNull(Type::int()),
          ],
          'resolve' => function($root, $args){
            return User::find($args['id'])->toArray();
          }
        ]
      ]
    ]);
  }
}