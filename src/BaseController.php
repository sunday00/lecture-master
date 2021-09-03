<?php

namespace App;

use Lib\Graphql;

class BaseController {
  protected $Graphql;
  
  public function __construct() {
    $this->Graphql = new Graphql;
    $this->Graphql->setQuery();
    $this->Graphql->setMutation();
    $this->Graphql->boot();
  }
}