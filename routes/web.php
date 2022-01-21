<?php

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->get('/sample', [
    'as' => 'index', 'uses' => 'ExampleController@index'
]);

$router->get('/sample/{id:[0-9]+}', [
    'as' => 'params', 'uses' => 'ExampleController@show'
]);

$router->get('/sample/optional[/{id}]', [
    'as' => 'optional_params', 'uses' => 'ExampleController@showOp'
]);