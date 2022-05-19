<?php

namespace App\Filters;

use App\Models\User;

class ThreadFilter extends Filter
{
    protected $filters = ['by'];

    /**
     * @param string $username
     * @return mixed
     */
    public function by(string $username): mixed
    {
        $user = User::where('name', $username)->firstOrFail();
        return $this->builder->where('user_id', $user->id);
    }
}
