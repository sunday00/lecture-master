<?php

namespace Lib;

use Exception;
use GraphQL\GraphQL as GraphQLGraphQL;
use GraphQL\Type\Schema;
use GraphQL\Type\Definition\ObjectType;

use HaydenPierce\ClassFinder\ClassFinder;

use Lib\types\UserType;
use Lib\types\AddressType;
class Graphql
{
  private $types = [];
  private $queries = [];
  private $mutation;

  public function __construct() {
    $this->types['address'] = AddressType::get();
    $this->types['user'] = UserType::get($this->types['address']);
  }

  public function setQuery() {
    // $this->query = new ("Lib\\queries\\".$queryName."Query");


    $queries = [];
    foreach( ClassFinder::getClassesInNamespace('Lib\\queries') as $qc ) {
      $qcInstance = new ($qc);
      $queries[$qcInstance->name] = $qcInstance->getQuery($this->types);
    }

    $this->queries = new ObjectType([
      'name'    => 'Query',
      'fields'  => $queries
    ]);
  }

  public function setMutation() {
    // $this->mutation = new ("Lib\\mutations\\".$mutationName."Mutation");


    $mutations = [];
    foreach( ClassFinder::getClassesInNamespace('Lib\\mutations') as $mc ) {
      $mcInstance = new ($mc);
      $mutations += $mcInstance->getMutation($this->types);
    }

    $this->mutations = new ObjectType([
      'name'    => 'Mutation',
      'fields'  => $mutations
    ]);
  }

  public function boot()
  {
    $schema = new Schema([
      // 'query'     => $this->query->getQuery($this->types, $param),
      'query'     => $this->queries,
      'mutation'  => $this->mutations,
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