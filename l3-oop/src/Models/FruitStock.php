<?php

namespace Models;

use Helpers\Errors;

class FruitStock extends BaseModel{
  public function insert(array $row)
  {
    $stmt = $this->db->prepare("INSERT INTO fruits (
        name, price, isStock
      ) VALUES (
        ?, ?, ?
      )");
    $isStock = $row[2] == 'T' ? 1 : 0;
    $stmt->bind_param('sii', $row[0], $row[1], $isStock);
    $stmt->execute();
    $stmt->close();
  
    if( !$this->db->insert_id ){
      Errors::raiseJson400();
    }
    
    return $this->db->insert_id;
  }
}