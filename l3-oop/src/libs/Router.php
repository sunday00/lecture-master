<?php

namespace Libs;

use Helpers\Errors;
use Helpers\Request;

class Router
{
  private Request $req;
  public string|null $name = null;
  private string|null $action = null;
  private array $params_k = [];
  private array $params = [];
  
  public function __construct(array $uris) {
    $this->req = new Request();

    $mode = $this->req->get('mode');

    $controller = preg_replace_callback('/(-.|^.)/', function($match){
      return str_starts_with($match[0], '-') ? str_replace('-', '', ucfirst($match[0][1])) : ucfirst($match[0]);
    }, $this->req->get('controller'), PREG_OFFSET_CAPTURE );

    $version = $this->req->get('version');

    $this->setActionAndParams($controller);

    switch ($mode) {
      case 'api':
        $className = "Api\\{$version}\\".$controller;
        $app = new $className;
        echo $app->run($this->action, $this->params);
      break;
    }
  }

  public function setActionAndParams(string $controller) : array
  {
    $httpMethod = $this->req->get('method');
    $routes = include_once(__DIR__ . '/../routes.php');
   
    if( !isset($routes[$controller]) ) return Errors::raiseJson404();

    $action = current(array_filter($routes[$controller], function($r, $k) use ($httpMethod) {
      if( $r[1] != '/' && !$this->action && $r[0] == $httpMethod){
        $this->params_k = [];
        $pattern = '/'.str_replace('/', '\\/', preg_replace_callback('/(:.+)(?=\/|$)/U', function($match){
          array_push($this->params_k, str_replace(':', '', $match[0]));
          return str_replace($match[0], '(.+)', $match[0]);
        }, $r[1], PREG_OFFSET_CAPTURE )).'$/';

        $strFollowUri = '/'.implode( '/', $this->req->get('followUris') );

        preg_match($pattern, $strFollowUri, $matches);
        
        
        if( count($matches) > 0 && $matches[0]) {
          $this->name = $k;
          $this->action = $r[2];

          foreach($this->params_k as $i => $k){
            if( str_contains( $matches[$i + 1] , '/') ){
              return Errors::raiseJson404();
            }

            $this->params[$k] = $matches[$i + 1];
          }

          return true;
        }

        return false;
      } else if ( $r[1] == '/' && !$this->action && $r[0] == $httpMethod && count($this->req->get('followUris')) == 0 ){
        $this->params_k = [];
        $this->params = [];
        $this->name = $k;
        $this->action = $r[2];

        return true;
      }

      return false;
    }, 1));

    if(!$action) return Errors::raiseJson404();

    return $action;
  }
  
  
}