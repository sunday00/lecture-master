<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }
    
    public function index()
    {
        return 'works!';
    }

    public function show($id)
    {
        return ['yourId' => (int)$id];
    }

    public function showOp($id = null)
    {
        return ['yourId' => $id ? 'not null' : 'empty'];
    }

    public function auth()
    {
        return "HI";
    }
}
