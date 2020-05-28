<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function index(int $room)
    {
        $chats = Project::find($room)->task()->get();
        return view('chat', compact('chats'));
    }
}
