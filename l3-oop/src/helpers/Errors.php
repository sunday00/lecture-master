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

  public static function raiseJson400(): void
  {
    echo json_encode([
      'result'  => false,
      'code'    => 400,
      'data'     => 'Bad Request',
    ]);
    header('HTTP/1.0 400 Something is wrong...');
    exit;
  }
  
}