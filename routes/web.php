<?php

use Illuminate\Http\Request;
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

Route::get('/login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'attempt'])->name('attempt');

Route::middleware('auth:sanctum')->group(function(){
    Route::get('/user', function (Request $request) {
        return view('auth.info', ['user' => $request->user()]);
    });

    Route::get('lazy', [\App\Http\Controllers\BoardController::class, 'lazy']);
    Route::get('eager', [\App\Http\Controllers\BoardController::class, 'eager']);
    Route::get('conditional-eager', [\App\Http\Controllers\BoardController::class, 'conditionalEager']);
    Route::get('lazy-eager', [\App\Http\Controllers\BoardController::class, 'lazyEager']);
});
