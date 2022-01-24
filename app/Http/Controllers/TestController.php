<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class TestController extends Controller
{
    public function index()
    {
        return "now working";
    }

    public function show(string $id)
    {
        return $id;
    }
}
