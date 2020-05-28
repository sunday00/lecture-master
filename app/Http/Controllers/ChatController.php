<?php

namespace App\Http\Controllers;

use App\Chatroom;
use App\Chat;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function index(int $room)
    {
        $chats = Chatroom::find($room)->chat()->get();
        return view('chat', compact('chats'));
    }

    public function send(int $room)
    {
        $chat = Chat::create([
            'chatroom_id' => $room,
            'user_id'     => Auth::id(),
            'message'     => request('message')
        ]);
        event(new App\Events\Chat($chat));
        return $chat;
    }
}
