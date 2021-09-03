<?php

namespace Lib\queries;

use App\Models\User;
use GraphQL\Type\Definition\Type;

class UserQuery
{
  public $name = 'user';

  public function getQuery ($types)
  {
    return [
      'type'  =>  $types['user'],
      'args'  =>  [
        'id'  =>  Type::nonNull(Type::int()),
      ],
      'resolve' => function($root, $args){
        return User::find($args['id'])->toArray();
      }
    ];
  }
}