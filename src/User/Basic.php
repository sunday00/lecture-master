<?php

namespace App\User;

use App\BaseController;

class Basic extends BaseController
{
  public function list()
  {
    $this->Graphql->setQuery('user');
    $this->Graphql->boot();
  }
}