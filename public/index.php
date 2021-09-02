<?php

ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');
error_reporting(E_ALL);

require '../vendor/autoload.php';

use Lib\DB;
(new DB)->conn();

$routes = explode('/', $_SERVER['PHP_SELF']);

$package = $routes[1];
$controller = $routes[2];
$action = $routes[3];
$mainParam = isset($routes[4]) ? $routes[4] : null;

$appName = "App\\$package\\$controller";
$App = new $appName;
$App->$action($mainParam);



