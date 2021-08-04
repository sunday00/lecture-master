<?php

namespace Models;

use Models\BaseModel;
use PDO;

class DevLang extends BaseModel
{
  private string $tableName = 'dev_langs';

  public function selectAll(object $option = null) : array
  {
    $order = isset($option->order) ? $option->order : "id DESC";
    $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} ORDER BY {$order}");
    $stmt->execute();
    
    if( $stmt->rowCount() == 0 ){
      return [0=>'no result'];
    }

    $langs = [];
    while( $r = $stmt->fetch(PDO::FETCH_ASSOC) ){
      $langs[] = $r;
    }

    return $langs;
  }


}