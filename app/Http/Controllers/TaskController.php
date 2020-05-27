<?php

namespace App\Http\Controllers;

use App\Events\TaskCreated;
use Illuminate\Http\Request;
use App\Task;
use App\Project;

class TaskController extends Controller
{
    public function index($taskId)
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
        event( new TaskCreated($task) );
    }

    public function add(Project $project)
    {
        $task = $project->task()->create(request(['body']));
        event( new TaskCreated($task) );
        return $task;
    }
}
