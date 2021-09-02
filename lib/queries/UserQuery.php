<?php

namespace Lib\queries;

use App\Models\User;
use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;
use Lib\types\UserType;

class UserQuery
{
  private $type;

  public function __construct() {
    $this->type = (new UserType)->get();
  }

  public function getQuery ()
  {
    return new ObjectType([
      'name'    => 'Query',
      'fields'  => [
        'user'    => [
          'type'  =>  $this->type,
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