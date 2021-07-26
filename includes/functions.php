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

function signup(string $nick, string $password, string $phone, int $level = 1){
  global $mysqli;
  $stmt = $mysqli->prepare("SELECT id FROM employees 
    WHERE phone = ?");

  $stmt->bind_param('s', $phone);
  $stmt->execute();
  $employees = $stmt->get_result();

  if($employees->num_rows === 0){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'You should registered as employee first. Contact Administrator.'
    ];
    return null;
  }

  $employeeRow = $employees->fetch_assoc();

  $stmt = $mysqli->prepare("INSERT INTO users (
    nick, password, active, level, employee_id
  ) VALUES (
    ?, ?, 1, ?, ?
  )");
  $stmt->bind_param('ssss', 
    $nick,
    password_hash($password, PASSWORD_BCRYPT, [
      'salt' => '!!Th!s!$$@|t~',
      'cost' => 5
    ]),
    $level,
    $employeeRow['id']
  );
  $stmt->execute();

  $_SESSION['flash'] = [
    'type'  => 'success',
    'msg'   => 'SIGNED'
  ];

  return $mysqli->insert_id;
}

function login (string $nick, string $password)
{
  global $mysqli;
  $stmt = $mysqli->prepare("SELECT u.*, e.* FROM users u
    LEFT JOIN employees e
    ON u.employee_id = e.id
    WHERE nick = ? AND active = 1");

  $stmt->bind_param('s', $nick);
  $stmt->execute();
  $result = $stmt->get_result();
  $data;

  $row = $result->fetch_assoc();
  if($result->num_rows === 0 || !password_verify($password, $row['password']) ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => 'Not valid user. Sign up or Contact Administrator.'
    ];
  } else {
    $data = $row;
    unset($data['password']);
    unset($data['phone']);
    $_SESSION['user']['id'] = $row['id'];
    $_SESSION['user']['nick'] = $row['nick'];
    $_SESSION['user']['fname'] = $row['fname'];
    $_SESSION['user']['lname'] = $row['lname'];
    $_SESSION['user']['level'] = $row['level'];
    $_SESSION['flash'] = [
      'type'  => 'success',
      'msg'   => "Hello, {$nick}?"
    ];
  }

  $stmt->close();

  return $data;
}

function logout()
{
  if( $_POST['id'] ){
    $_SESSION['flash'] = [
      'type'  => 'success',
      'msg'   => "Bye, {$_SESSION['user']['nick']}~!"
    ];
    unset($_SESSION['user']);
    return 'success';
  }
}

function permission(array $whitelist, string $php_self){
  $is_permitted = in_array($php_self, $whitelist) || isset($_SESSION['user']['id']);

  if( !$is_permitted ){
    $_SESSION['flash'] = [
      'type'  => 'danger',
      'msg'   => "You need to logged in"
    ];
    header('Location: /login');
    exit();
  }
}
