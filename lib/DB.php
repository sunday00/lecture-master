<?php

namespace Lib;

use Illuminate\Database\Capsule\Manager as Capsule;

class DB
{
  public function conn()
  {
    $capsule = new Capsule;

    $capsule->addConnection(require('../confs/db.php'));

    $capsule->setAsGlobal();
    $capsule->bootEloquent();
  }
}
