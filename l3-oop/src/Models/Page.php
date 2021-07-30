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


}