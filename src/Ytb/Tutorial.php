<?php

namespace App\Ytb;

use App\Models\User;

class Tutorial
{
  public function index($id)
  {
    $user = User::find($id);
    dd($user->addresses->toArray());
  }
}