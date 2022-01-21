<?php

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->group([
    'prefix'        => '/sample',
    'name'          => 'sample',
], function () use ($router) {
    $router->get('/', [
        'as' => 'index', 'uses' => 'ExampleController@index'
    ]);
    
    $router->get('/{id:[0-9]+}', [
        'as' => 'params', 'uses' => 'ExampleController@show'
    ]);
    
    $router->get('/optional[/{id}]', [
        'as' => 'optional_params', 'uses' => 'ExampleController@showOp'
    ]);

    $router->get('/auth', [
        'middleware' => 'auth',
        'as' => 'auth_middleware',
        'uses' => 'ExampleController@auth'
    ]);
});
