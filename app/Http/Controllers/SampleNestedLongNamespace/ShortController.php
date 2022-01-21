<?php

namespace App\Http\Controllers\SampleNestedLongNamespace;

use Laravel\Lumen\Routing\Controller;

class ShortController extends Controller
{
  public function test()
  {
    return ['result' => 'success'];
  }
}
