<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function path($flag = null)
    {
        return route(
            $flag === 'replies' ? 'reply.store' : 'threads.show',
            [$this->channel->slug, $this->id]
        );
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function channel()
    {
        return $this->belongsTo(Channel::class);
    }

    public function replies()
    {
        return $this->hasMany(Reply::class);
    }

    public function addReply(array $params)
    {
        return $this->replies()->create($params);
    }
}
