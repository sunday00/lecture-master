<?php

namespace Helpers;

class Errors
{
  public static function raiseJson404(): void
  {
    echo json_encode([
      'result'  => false,
      'code'    => 404,
      'data'     => 'Not Found',
    ]);
    header('HTTP/1.0 404 Not Found');
    exit;
  }
  
}