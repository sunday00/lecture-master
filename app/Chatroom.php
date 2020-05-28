<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chatroom extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsToMany('App\User', 'chat_members', 'chatroom_id', 'user_id');
    }

    public function chat()
    {
        return $this->hasMany("App\Chat");
    }
}
