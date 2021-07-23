<?php

require_once('db.php');

session_start();

/**
 * array format
 */
function formatcode(array $arr)
{
  echo '<pre>';
  print_r($arr);
  echo '</pre>';
}

/**
 * select statement
 */

function selectAll()
{
  global $mysqli;
  $stmt = $mysqli->prepare('SELECT * FROM employees');
  $stmt->execute();
  $result = $stmt->get_result();
  if( $result->num_rows === 0 ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'There\'s no data yet!'
    ];
  }

  $data = [];
  while($row = $result->fetch_assoc()){
    $data[] = $row;
  }
  $stmt->close();
  return $data;
}

function selectOne(int $id = null)
{
  global $mysqli;
  $stmt = $mysqli->prepare('SELECT * FROM employees WHERE id=?');
  $stmt->bind_param('i', $id);
  $stmt->execute();
  $result = $stmt->get_result();
  if( $result->num_rows === 0 ){
    // echo "no rows";
  }
  $data = $result->fetch_assoc();
  $stmt->close();
  return $data;
}

function insert(string $fname=null, string $lname=null, string $phone=null)
{
  global $mysqli;
  $stmt = $mysqli->prepare("INSERT INTO employees (fname, lname, phone) VALUES (
    ?, ?, ?
  )");
  $stmt->bind_param('sss', $fname, $lname, $phone);
  $stmt->execute();
  $stmt->close();

  if( !$mysqli->insert_id ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'Something is wrong...'
    ];
  } else {
    $_SESSION['flash'] = [
      'type'  => 'success',
      'msg'   => "Added {$mysqli->insert_id}"
    ];
  }

  return $mysqli->insert_id;
}

function update(int $id, string $fname=null, string $lname=null, string $phone=null)
{
  global $mysqli;
  $stmt = $mysqli->prepare("UPDATE employees SET
    fname = ?,
    lname = ?,
    phone = ? WHERE id = ?
  ");
  $stmt->bind_param('sssi', $fname, $lname, $phone, $id);
  $stmt->execute();
  $affected_rows = $mysqli->affected_rows;

  if( $affected_rows === 0 ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'Nothing is changed.'
    ];
  } else {
    $_SESSION['flash'] = [
      'type'  => 'success',
      'msg'   => 'updated.'
    ];
  }

  $stmt->close();
  return $affected_rows;
}

function delete(int $id)
{
  global $mysqli;
  $stmt = $mysqli->prepare("DELETE FROM employees WHERE id = ?");
  $stmt->bind_param('i', $id);
  $stmt->execute();
  $affected_rows = $mysqli->affected_rows;

  if( $affected_rows === 0 ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'Nothing is changed.'
    ];
  } else {
    $_SESSION['flash'] = [
      'type'  => 'success',
      'msg'   => "deleted {$affected_rows}"
    ];
  }

  $stmt->close();
  return $affected_rows;
}