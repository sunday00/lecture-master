<?php

namespace Models;

use Models\BaseModel;

class Page extends BaseModel
{
  private string $tableName = 'pages';

  public function selectAll(object $option = null) : array
  {
    $order = isset($option->order) ? $option->order : "id DESC";
    $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} ORDER BY {$order}");
    $stmt->execute();
    $result = $stmt->get_result();

    if( $result->num_rows == 0 ){
      return [0=>'no result'];
    }

    $pages = [];
    while( $r = $result->fetch_assoc() ){
      $pages[] = $r;
    }

    return $pages;
  }

  public function selectOne(string $slug) : array
  {
    if( $slug == 'home' ){
      $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE slug is null");
    } else {
      $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} WHERE slug = ?");
      $stmt->bind_param('s', $slug);
    }
    $stmt->execute();
    $result = $stmt->get_result();

    if( $result->num_rows == 0 ){
      return [0=>'no result'];
    }

    $page;
    while( $r = $result->fetch_assoc() ){
      $page = $r;
    }

    return $page;
  }


}