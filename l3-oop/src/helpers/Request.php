<?php

namespace Helpers;

class Request
{
  private object $req;
  public function __construct()
  {
    $this->req = (object) $_REQUEST;
    $this->req->fullUri = $_SERVER['REQUEST_URI'];
    $this->req->method = $_SERVER['REQUEST_METHOD'];
    
    $_exploded = explode('/', $this->req->fullUri);

    $this->req->mode = $_exploded[1];
    $this->req->version = $_exploded[2];
    $this->req->controller = $_exploded[3];
  }

  public function get(string $key){
    return $this->req->$key;
  }

  
}