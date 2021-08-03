<?php

namespace Models;

use Configs\DB;
use PDO;

class BaseModel implements Model
{
  protected PDO $db;

  public function __construct() {
    $this->db = (new DB())->conn();
  }

  
}