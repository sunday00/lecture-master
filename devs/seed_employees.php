<?php

require dirname(__FILE__).'/../vendor/autoload.php';
require_once dirname(__FILE__).'/../includes/db.php';

$faker = Faker\Factory::create();

function seeding( $times = 1 )
{
  global $mysqli, $faker;

  $stmt = $mysqli->prepare("INSERT INTO employees (fname, lname, phone) VALUES (
    ?, ?, ?
  )");

  $result = [];
  for($i=0; $i<$times; $i++){
    $fname = $faker->firstName();
    $lname = $faker->lastName();
    $phone = $faker->numerify('###-###-####');

    $stmt->bind_param('sss', $fname, $lname, $phone);
    $stmt->execute();
    array_push($result, $stmt->insert_id);
  }
  $stmt->close();

  dd( $result );
}

$times = isset( $argv[1] ) ? $argv[1] : 1;

seeding( $times );