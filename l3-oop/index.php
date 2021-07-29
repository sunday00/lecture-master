<?php

include '../vendor/autoload.php';
include './includes/functions.php';

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$employees = new Employees(
  'BB inc', 'George', [
    'email' => '',
    'phone' => '111-222-3333',
    'fax' => null
  ]
);
// $employees->company = "BB inc";
// $employees->setCompany("BB inc");

dd( $employees );

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>OOP</title>
</head>
<body>
  <main class="container">
    <h1>OOP</h1>
  </main>
</body>
</html>