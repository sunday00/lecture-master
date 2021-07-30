<?php

namespace Models;

use Configs\DB;
use mysqli;

class BaseModel
{
  protected mysqli $db;

  public function __construct() {
    $this->db = (new DB())->conn();
  }

  
}