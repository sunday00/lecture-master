<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function login()
    {
        return view('auth.login');
    }

    public function attempt()
    {
        $user = User::where('role', request('role', 'member'))->first();
        auth()->login($user);

        return response()->redirectTo('/user');
    }
}
