<?php

namespace Models;

use Models\BaseModel;
use PDO;

class Page extends BaseModel
{
  private string $tableName = 'pages';

  public function selectAll(object $option = null) : array
  {
    $order = isset($option->order) ? $option->order : "id DESC";
    $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} ORDER BY {$order}");
    $stmt->execute();

    if( $stmt->rowCount() == 0 ){
      return [0=>'no result'];
    }

    $pages = [];
    while( $r = $stmt->fetch(PDO::FETCH_ASSOC) ){
      $pages[] = $r;
    }

    return $pages;
  }

  public function selectOne(string $slug) : array
  {
    if( $slug == 'home' ){
      $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE slug is null");
    } else {
      $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE slug = :slug");
      $stmt->bindParam(':slug', $slug);
    }
    $stmt->execute();

    if( $stmt->rowCount() == 0 ){
      return [0=>'no result'];
    }

    $page;
    while( $r = $stmt->fetch(PDO::FETCH_ASSOC) ){
      $page = $r;
    }

    return $page;
  }


}