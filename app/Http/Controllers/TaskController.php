<?php

namespace App\Http\Controllers;

use App\Events\TaskCreated;
use Illuminate\Http\Request;
use App\Task;

class TaskController extends Controller
{
    public function index()
    {
        $task = Task::latest()->pluck('body');
        return view('task', compact('task'));
    }

    public function list(){
        return Task::latest()->pluck('body');
    }

    public function store()
    {
        $task = Task::forceCreate(request(['body']));
        // event(
        //     (new TaskCreated($task))->dontBroadcastToCurrentUser()
        // );
        event( new TaskCreated($task) );
    }
}
