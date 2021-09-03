<?php

namespace Lib;

use Exception;
use GraphQL\GraphQL as GraphQLGraphQL;
use GraphQL\Type\Schema;

use Lib\types\UserType;
class Graphql
{
  private $types = [];
  private $query;
  private $mutation;

  public function __construct() {
    $this->types['user'] = (new UserType)->get();
  }

  public function setQuery($queryName) {
    $this->query = new ("Lib\\queries\\".$queryName."Query");
  }

  public function setMutation($mutationName) {
    $this->mutation = new ("Lib\\mutations\\".$mutationName."Mutation");
  }

  public function boot($param = null)
  {
    $schema = new Schema([
      'query'     => $this->query->getQuery($this->types, $param),
      'mutation'  => $this->mutation->getMutation($this->types, $param),
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