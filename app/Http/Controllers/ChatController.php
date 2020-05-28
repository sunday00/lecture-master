<?php

namespace App\Http\Controllers;

use App\Chatroom;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(int $room)
    {
        $chats = Chatroom::find($room)->chat()->get();
        return view('chat', compact('chats'));
    }
}
