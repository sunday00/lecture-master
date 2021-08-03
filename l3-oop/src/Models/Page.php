<?php

namespace Models;

use Exception;
use Helpers\Errors;
use Models\BaseModel;
use PDO;
use PDOException;

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

  public function create(object $data) : int
  {
    $stmt = $this->db->prepare("INSERT INTO {$this->tableName} (
      orderId, slug, title, content
    ) VALUES (
      :orderId, :slug, :title, :content
    )");
    $stmt->bindParam(':orderId', $data->orderId);
    $stmt->bindParam(':slug', $data->slug);
    $stmt->bindParam(':title', $data->title);
    $stmt->bindParam(':content', $data->content);

    try{
      $stmt->execute();
    } catch (PDOException $e){
      if( str_starts_with($e->getCode(), '4') ) Errors::raiseJson400($e);
      else Errors::raiseJson500($e);
    }

    if( $stmt->rowCount() == 0 ){
      Errors::raiseJson404();
      return 0;
    }

    return $this->db->lastInsertId();
  }

  public function update(string $slug, object $data) : int
  {
    $setSqlArr = [];
    foreach($data as $k => $d){
      $setSqlArr[] = "{$k}=:{$k}";
    }
    $setSql = "SET ".implode(', ', $setSqlArr);

    if( $slug == 'home' ){
      $stmt = $this->db->prepare("UPDATE {$this->tableName} 
        {$setSql}
        WHERE slug is null");
    } else {
      $stmt = $this->db->prepare("UPDATE {$this->tableName} 
        {$setSql}
      WHERE slug = :slug");
      $stmt->bindValue(':slug', $slug);
    }

    foreach($data as $k => $d){
      $stmt->bindValue(":{$k}", $d);
    }

    try{
      $stmt->execute();
    } catch (PDOException $e){
      if( str_starts_with($e->getCode(), '4') ) Errors::raiseJson400($e);
      else Errors::raiseJson500($e);
    }

    if( $stmt->rowCount() == 0 ){
      Errors::raiseJson404();
      return 0;
    }

    return $stmt->rowCount();
  }

  public function delete(string $slug) : int
  {
    if( $slug == 'home' ){
      Errors::raiseJson400(new Exception('You can\'t delete home'));
    } else {
      $stmt = $this->db->prepare("DELETE FROM {$this->tableName} 
        WHERE slug = :slug"
      );
      $stmt->bindValue(':slug', $slug);
    }

    try{
      $stmt->execute();
    } catch (PDOException $e){
      if( str_starts_with($e->getCode(), '4') ) Errors::raiseJson400($e);
      else Errors::raiseJson500($e);
    }

    if( $stmt->rowCount() == 0 ){
      Errors::raiseJson404();
      return 0;
    }

    return $stmt->rowCount();
  }

}