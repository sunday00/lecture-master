<?php

namespace Helpers;

class Response
{
  public static function raiseJson200(array|int $data, string $contentType = 'application/json'): string
  {
    header("Content-Type: {$contentType}");
    return json_encode([
      'result'  => true,
      'code'    => 200,
      'data'     => $data,
    ]);
  }
  
}