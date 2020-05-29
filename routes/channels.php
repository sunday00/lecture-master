<?php

use App\Chatroom;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('tasks.{projectId}', function ($user, $projectId) {
    return (int) $user->id === (int) $projectId;
});


Broadcast::channel('chat.{chatroomId}', function ($user, $chatroomId) {
    if( in_array( $user->id, Chatroom::find($chatroomId)->user->pluck('id')->toArray() ) ) {
        return ['name'=>$user->name];
    }
});