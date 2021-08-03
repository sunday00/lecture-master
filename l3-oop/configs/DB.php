<?php

namespace Configs;

use PDO;

class DB
{
  private PDO $conn;
  public function __construct() {
      $this->conn = new PDO(
        "mysql:host={$_ENV['DB_HOST']};
        port={$_ENV['DB_PORT']};
        dbname={$_ENV['DB_NAME']}",
        $_ENV['DB_USER'],
        $_ENV['DB_PASS']
      );
  }

  public function conn() : PDO
  {
    return $this->conn;
  }
}