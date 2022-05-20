<?php

namespace App\Http\Controllers;

use App\Models\Channel;
use App\Models\Favorite;
use App\Models\Reply;
use App\Models\Thread;
use Illuminate\Http\Request;

class ReplyController extends Controller
{
    public function __construct(){
        $this->middleware('auth');
    }

    public function store(Channel $channel, Thread $thread)
    {
        $reply = $thread->addReply([
            'body' => request('body'),
            'user_id' => auth()->id(),
        ]);

        return redirect($thread->path() . '#' . $reply->id)->with('message', 'replied');
    }

    public function favorite(Reply $reply)
    {
//        return Favorite::create([
//            'user_id' => auth()->id(),
//            'favorite_id' => $reply->id,
//            'favorite_type' => get_class($reply),
//        ]);

//        $reply->favorites()->create([
//            'user_id' => auth()->id(),
//        ]);

        $fv = $reply->favorites()->where('user_id', auth()->id())->first();

        if( $fv ) {
            return $fv->delete();
        }

        return $reply->favorite();
    }
}
