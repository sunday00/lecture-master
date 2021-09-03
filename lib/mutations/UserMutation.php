<?php

namespace Lib\mutations;

use App\Models\User;
use GraphQL\Type\Definition\Type;
use GraphQL\Type\Definition\ObjectType;
use Lib\types\UserType;

class UserMutation
{
  public function getMutation($types, $param = null)
  {
    return $this->getAdd($types['user'])
        // + $this->getAdd()
        // + $this->getAdd()
    ;   // + $this->getAdd()
        
    ;
  }

  private function getAdd($type)
  {
    return [
      'addUser' => [
        'type' => $type,
        'args' => [
          'first_name'  => Type::string(),
          'last_name'   => Type::string(),
          'email'       => Type::string(),
        ],
        'resolve' => function($root, $args){
          $user = new User([
            'first_name'  => $args[  'first_name' ],
            'last_name'   => $args[  'last_name'  ],
            'email'       => $args[  'email'      ],
          ]);
          $user->save();
          return $user->toArray();
        }
      ]
    ];
  }
}
