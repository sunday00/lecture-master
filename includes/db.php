<?php

$mysqli = new mysqli("192.168.123.56", "sunday00", "zktm500cc", "devdrawer", "3306");
if( $mysqli->connect_error ){
  exit('Error : ' . $mysqli->connect_error);
}


