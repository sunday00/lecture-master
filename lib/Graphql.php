<?php

namespace Lib;

use Exception;
use GraphQL\GraphQL as GraphQLGraphQL;
use GraphQL\Type\Schema;

class Graphql
{
  private $query;

  public function setQuery($queryName) {
    $this->query = new ("Lib\\queries\\".$queryName."Query");
  }

  public function boot($param = null)
  {
    $schema = new Schema([
      'query'     => $this->query->getQuery($param),
      'mutation'  => null
    ]);

    try{
      $rawInput = file_get_contents('php://input');
      $input = json_decode($rawInput, true);
      $query = isset($input['query']) ? $input['query'] : '';
      
      $result = GraphQLGraphQL::executeQuery($schema, $query);
      $output = $result->toArray();
    }catch(Exception $e){
      $output = [
        'error' => [
          'message' => $e->getMessage()
        ]
      ];
    }

    header('Content-Type: application/json');
    echo json_encode($output);
  }
}