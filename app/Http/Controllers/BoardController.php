<?php

namespace App\Http\Controllers;

use App\Models\Board;
use App\Models\User;
use Illuminate\Http\Request;

class BoardController extends Controller
{
    public function lazy()
    {
        $boards = Board::latest()->orderBy('id', 'desc')->paginate(10);
        return view('boards.board', compact('boards'));
    }

    public function eager()
    {
        $boards = Board::with(['comments', 'user'])
            ->latest()->orderBy('id', 'desc')->paginate(10);

        return view('boards.board', compact('boards'));
    }

    public function conditionalEager()
    {
        $boards = Board::when(
            auth()->user()->role === 'admin',
            fn($q) => $q->with('user')
        )->latest()->paginate(10);

        return view('boards.noname', compact('boards'));
    }

    public function lazyEager()
    {
        $boards = Board::latest()->paginate(10);

        if(auth()->user()->role === 'admin') $boards->load('user');

        return view('boards.noname', compact('boards'));
    }
}
