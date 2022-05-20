<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function owner()
    {
        return $this->user();
    }

    public function favorites()
    {
        return $this->morphMany(Favorite::class, 'favorite');
    }

    public function favorite()
    {
        return $this->favorites()->create(['user_id' => auth()->id()]);
    }
}
