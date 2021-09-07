<?php

namespace Lib\queries;

use App\Models\User;
use GraphQL\Type\Definition\Type;

class UsersQuery
{
  public $name = 'users';

  public function getQuery ($types)
  {
    return [
      'type'  =>  Type::listOf($types['user']),
      'resolve' => function($root, $args){
        return User::get()->toArray();
      }
    ];
  }
}
