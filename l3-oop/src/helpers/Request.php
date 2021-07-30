<?php

namespace Helpers;

class Request
{
  private object $req;
  public function __construct()
  {
    $this->req = clone (object) $_REQUEST;
    $this->req->method = $_SERVER['REQUEST_METHOD'];
  }

  public function get(string $key){
    return $this->req->$key;
  }

  
}