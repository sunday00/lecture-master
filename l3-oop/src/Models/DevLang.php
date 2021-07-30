<?php

namespace Models;

use Models\BaseModel;

class DevLang extends BaseModel
{
  private string $tableName = 'dev_langs';

  public function selectAll(object $option = null) : array
  {
    $order = isset($option->order) ? $option->order : "id DESC";
    $stmt = $this->db->prepare("SELECT * FROM {$this->tableName} ORDER BY {$order}");
    $stmt->execute();
    $result = $stmt->get_result();

    if( $result->num_rows == 0 ){
      return ['no result'];
    }

    $langs = [];
    while( $r = $result->fetch_assoc() ){
      $langs[] = $r;
    }

    return $langs;
  }


}