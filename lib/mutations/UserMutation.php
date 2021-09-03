<?php

namespace Lib\mutations;

use App\Models\User;
use GraphQL\Type\Definition\Type;

class UserMutation
{
  public function getMutation($types, $param = null)
  {
    return $this->getAdd($types['user'])
        + $this->getEdit($types['user'])
        + $this->getDelete($types['user'])
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

  private function getEdit($type)
  {
    return [
      'editUser' => [
        'type' => $type,
        'args' => [
          'id'          => Type::nonNull(Type::int()),
          'first_name'  => Type::string(),
          'last_name'   => Type::string(),
          'email'       => Type::string(),
        ],
        'resolve' => function($root, $args){
          $user = User::find($args['id']);
          $user->update([
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

  private function getDelete($type)
  {
    return [
      'deleteUser' => [
        'type' => $type,
        'args' => [
          'id' => Type::nonNull(Type::int()),
        ],
        'resolve' => function($root, $args){
          $user = User::find($args['id']);
          $user->delete();
          return $user->toArray();
        }
      ]
    ];
  }

}

