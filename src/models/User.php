<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
  protected $table = "users";
  public $timestamps = false;
  protected $guarded = [];

  public function addresses()
  {
    return $this->hasMany(Address::class);
  }


}