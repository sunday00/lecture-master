<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    protected $guarded = [];

    protected $appends = [
        'isFavorited'
    ];

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
        $this->favorites()->create(['user_id' => auth()->id()]);

        return back()->with('status', 'success favorite reply');
    }

    public function getisFavoritedAttribute()
    {
        return $this->favorites->where('user_id', auth()->id())->first();
    }
}
