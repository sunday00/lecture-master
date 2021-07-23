<?php 

include_once("./commons.php");

if( $_GET['mode'] === 'list') {
  $employees = selectAll();
  $result = [
    'length' => count($employees),
    'data' => $employees
  ];
  
  echo json_encode( $result );
}
