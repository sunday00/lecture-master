<?php

namespace App\User;

use App\BaseController;

class Basic extends BaseController
{
  public function list()
  {
    $this->Graphql->setQuery('User');
    $this->Graphql->setMutation('User');
    $this->Graphql->boot();
  }
}