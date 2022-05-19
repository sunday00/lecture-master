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

Route::resource('threads', 'App\\Http\\Controllers\\ThreadController')->except(['show']);
Route::get('threads/{channel:slug}/{thread}', 'App\\Http\\Controllers\\ThreadController@show')->name('threads.show');
Route::get('threads/{channel:slug}', 'App\\Http\\Controllers\\ThreadController@index')->name('threads.list');

Route::post('/threads/{channel:slug}/{thread}/replies', 'App\\Http\\Controllers\\ReplyController@store')->name('reply.store');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/test/ver', fn () => phpversion());
