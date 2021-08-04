<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ALL & ~MYSQLI_REPORT_INDEX);

if (isset($_SERVER['HTTP_ORIGIN'])){
  switch($_SERVER['HTTP_ORIGIN']){
    case 'http://localhost:8088':
      header('Access-Control-Allow-Origin: http://localhost:8088');
    break;
    case 'https://validator.swagger.io':
      header('Access-Control-Allow-Origin: https://validator.swagger.io');
    break;
  }
}
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');

define('__DOCUMENT_ROOT__', $_SERVER['DOCUMENT_ROOT']);
define('__SERVER_ROOT__', $_SERVER['DOCUMENT_ROOT'].'/../..');

require __DIR__.'/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/..');
$dotenv->safeLoad();

require __DIR__.'/../configs/helpers.php';

foreach( $_ENV as $k => $env ){
  putenv("{$k}={$env}");
}

$uris = explode('/', getenv('REQUEST_URI'));
array_shift($uris);

if($_SERVER["CONTENT_TYPE"] == "application/json"){
  $reqData = json_decode(file_get_contents('php://input'));
} else {
  $reqData = file_get_contents('php://input');
}

$_REQUEST['input'] = $reqData;
$_REQUEST['followUris'] = array_slice($uris, 3);

$router = new Libs\Router($uris);

