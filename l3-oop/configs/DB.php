<?php

namespace Configs;

use mysqli;

class DB
{
  private mysqli $conn;
  public function __construct() {
    $this->conn = new mysqli(
      $_ENV['DB_HOST'], $_ENV['DB_USER'], $_ENV['DB_PASS'], $_ENV['DB_NAME'], $_ENV['DB_PORT']
    );
  }

  public function conn() : mysqli
  {
    return $this->conn;
  }
}