<?php

namespace App\Http\Controllers;

use App\Models\Thread;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function store(Thread $thread)
    {
        $reply = $thread->addReply([
            'body' => request('body'),
            'user_id' => auth()->id(),
        ]);

        return redirect($thread->path() . '#' . $reply->id)->with('message', 'replied');
    }
}
