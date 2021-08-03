<?php

namespace Helpers;

use Exception;

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

  public static function raiseJson400(Exception $e = null): void
  {
    echo json_encode([
      'result'  => false,
      'code'    => $e ? $e->getCode() : 400,
      'data'     => $e ? $e->getMessage() : 'Bad Request',
    ]);
    header('HTTP/1.0 400 Something is wrong...');
    exit;
  }

  public static function raiseJson500(Exception $e = null): void
  {
    echo json_encode([
      'result'  => false,
      'code'    => $e ? $e->getCode() : 400,
      'data'     => $e ? $e->getMessage() : 'something is wrong',
    ]);
    header('HTTP/1.0 500 something is wrong');
    exit;
  }
  
}