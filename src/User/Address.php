<?php

namespace App\User;

use App\BaseController;

class Address extends BaseController
{
  public function one()
  {
    $this->Graphql->setQuery('address');
    $this->Graphql->boot();
  }

  public function list()
  {
    $this->Graphql->setQuery('address');
    $this->Graphql->boot('list');
  }
}