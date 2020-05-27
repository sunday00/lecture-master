<?php

namespace App\Http\Controllers;

use App\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function index(Project $project)
    {
        $project->load('task');

        return view('project.show', compact('project'));
    }

    public function list(Project $project)
    {
        return $project->task()->pluck(['id','body']);
    }
}
