<?php

namespace Models;

use Configs\DB;
use mysqli;

class BaseModel implements Model
{
  protected mysqli $db;

  public function __construct() {
    $this->db = (new DB())->conn();
  }

  
}