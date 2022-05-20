<?php

namespace App\Filters;

use App\Models\User;

class ThreadFilter extends Filter
{
    protected $filters = ['by', 'popular'];

    /**
     * @param string $username
     * @return mixed
     */
    protected function by(string $username): mixed
    {
        $user = User::where('name', $username)->firstOrFail();
        return $this->builder->where('user_id', $user->id);
    }

    protected function popular()
    {
        $this->builder->getQuery()->orders = [];
        return $this->builder->orderBy('replies_count', 'desc');
    }
}
