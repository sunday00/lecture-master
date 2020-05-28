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
        $chats = Chatroom::find($room)->chat()->with('user:id,name')->get();
        return view('chat', compact('chats'));
    }

    public function send(int $room)
    {
        $chat = Chat::create([
            'chatroom_id' => $room,
            'user_id'     => Auth::id(),
            'message'     => request('message')
        ])->load('user:id,name');
        $chat->userName = auth()->user()->name;
        event(new \App\Events\Chat($chat));
        return $chat;
    }
}
