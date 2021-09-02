<?php

namespace App;

use Lib\Graphql;

class BaseController {
  protected $Graphql;
  
  public function __construct() {
    $this->Graphql = new Graphql;
  }
}