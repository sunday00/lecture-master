<?php

namespace App\GettingStart;

use GraphQL\Type\Definition\ObjectType;
use GraphQL\Type\Definition\Type;

use GraphQL\GraphQL;
use GraphQL\Type\Schema;

class HelloWorld
{
  public function index($params = null)
  {
    $queryType = new ObjectType([
      'name' => 'Query',
      'fields' => [
        'echo' => [
          'type' => Type::string(),
          'args' => [
            'message' => Type::nonNull(Type::string()),
          ],
          'resolve' => function ($rootValue, $args) {
              return $rootValue['prefix'] . $args['message'];
          }
        ],
      ],
    ]);

    $schema = new Schema([
      'query' => $queryType
    ]);
    
    $rawInput = file_get_contents('php://input');
    $input = json_decode($rawInput, true);

    if( gettype($input) == 'array' ){
      $query = $input['query'];
      $variableValues = isset($input['variables']) ? $input['variables'] : null;
    } else {
      $query = 'query { echo(';
      foreach($_GET as $k => $v){
        if ($k == 'variables') {
            continue;
        }
        $query .= $k . ": \"" . $v . "\" ,";
      }
      $query .= ") }";
      $variableValues = isset($_GET['variables']) ? $_GET['variables'] : null;
    }
    
    try {
        $rootValue = ['prefix' => 'You said: '];
        $result = GraphQL::executeQuery($schema, $query, $rootValue, null, $variableValues);
        $output = $result->toArray();
    } catch (\Exception $e) {
        $output = [
            'errors' => [
                [
                    'message' => $e->getMessage()
                ]
            ]
        ];
    }
    header('Content-Type: application/json');
    echo json_encode($output);
  }
}
