<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('lazy', [\App\Http\Controllers\BoardController::class, 'lazy']);
Route::get('eager', [\App\Http\Controllers\BoardController::class, 'eager']);

Route::get('normal-noname', [\App\Http\Controllers\BoardController::class, 'normal_noname']);
