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
        // dd(request()->path);
        // return $id;
        // return (response(dd(request()->path(), 200))->header('Content-Type', 'text/html'));
        // return response(dump(request()->path()), 200)
        //     ->header('Content-Type', 'text/html');
        return request()->fullUrl();
    }

    public function store()
    {
        return request()->file('item_image')->getClientOriginalName();
    }
}
