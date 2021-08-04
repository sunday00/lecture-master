<?php

namespace Api\v1;

use Models\Model;
use Helpers\Request;
use Helpers\Errors;

/**
 * @OA\Info(title="php api and swagger examples", version="1.0")
 */
class BaseController
{
  protected string $controller;
  protected Model $model;
  protected Request $req;

  public function __init(string $controller, Model $model, string $act, array|null $params = null) : string{
    $this->controller = $controller;
    $this->model = $model;
    $this->req = new Request();

    if( !in_array($act, get_class_methods($this)) ){
      Errors::raiseJson404();
      exit;
    }

    return $params != null ? $this->$act($params) : $this->$act();
  }

}