<?php

namespace Helpers;

class Response
{
  public static function raiseJson200(array $data): string
  {
    header('Content-Type: application/json');
    return json_encode([
      'result'  => true,
      'code'    => 200,
      'data'     => $data,
    ]);
  }
  
}