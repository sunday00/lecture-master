<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Thread extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('replyCount', function ($builder) {
            $builder->withCount('replies');
        });
    }

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
        return $this->hasMany(Reply::class)->with(['favorites', 'owner']);
    }

//    public function getReplyCountAttribute()
//    {
//        return $this->replies()->count();
//    }

    public function addReply(array $params)
    {
        return $this->replies()->create($params);
    }

    public function scopeFilter($query, $filter)
    {
        return $filter->apply($query);
    }
}
