<?php

use App\Events\OrderStatusUpdate;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

class Order
{
    public $id;
    public function __construct($id)
    {
        $this->id = $id;
    }
}

Route::get('/', function () {
    
    // === 
    // event(new OrderStatusUpdate());

    return view('welcome');
});

Route::get("/update", function(){
    OrderStatusUpdate::dispatch(new Order(1));
});