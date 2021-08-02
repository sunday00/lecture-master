<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
mysqli_report(MYSQLI_REPORT_ALL & ~MYSQLI_REPORT_INDEX);

header("Access-Control-Allow-Origin: http://localhost:8088");
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Max-Age: 86400');

require __DIR__.'/../vendor/autoload.php';
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/..');
$dotenv->safeLoad();

require __DIR__.'/../configs/helpers.php';

foreach( $_ENV as $k => $env ){
  putenv("{$k}={$env}");
}

$uris = explode('/', getenv('REQUEST_URI'));
array_shift($uris);
$_REQUEST['followUris'] = array_slice($uris, 3);

$uris[2] = preg_replace_callback('/(-.|^.)/', function($match){
  return str_starts_with($match[0], '-') ? str_replace('-', '', ucfirst($match[0][1])) : ucfirst($match[0]);
}, $uris[2], PREG_OFFSET_CAPTURE );

switch ($uris[0]) {
  case 'api':
    $className = "Api\\{$uris[1]}\\".$uris[2];
    $app = new $className;
    return $app->run();
  break;
}