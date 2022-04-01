<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/threads', 'App\\Http\\Controllers\\ThreadController@index' )->name('threads.index');
Route::get('/threads/{thread}', 'App\\Http\\Controllers\\ThreadController@show' )->name('threads.show');

Route::post('/threads/{thread}/replies', 'App\\Http\\Controllers\\ReplyController@store')->name('reply.store');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');
