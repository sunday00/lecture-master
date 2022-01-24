<?php

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->group([
    'prefix'        => '/sample',
], function () use ($router) {
    $name_prefix = "sample.";

    $router->get('/', [
        'as' => $name_prefix.'index', 'uses' => 'ExampleController@index'
    ]);
    
    $router->get('/{id:[0-9]+}', [
        'as' => $name_prefix.'params', 'uses' => 'ExampleController@show'
    ]);
    
    $router->get('/optional[/{id}]', [
        'as' => $name_prefix.'optional_params', 'uses' => 'ExampleController@showOp'
    ]);

    $router->get('/auth', [
        'middleware' => ['auth', 'fLogger:apple,banana'],
        'as' => $name_prefix.'auth_middleware',
        'uses' => 'ExampleController@auth'
    ]);
});

$router->group(['namespace' => 'SampleNestedLongNamespace'], function() use ($router){
    $router->get('/sample/namespace', [
        'uses' => 'ShortController@test'
    ]);
});

$router->group([
    'prefix'        => '/test',
], function () use ($router) {
    $name_prefix = "test.";

    $router->get('/', [
        'as' => $name_prefix.'index',
        'uses' => 'TestController@index'
    ]);
    
    $router->get('/{id}', [
        'as' => $name_prefix.'show',
        'uses' => 'TestController@show'
    ]);

    $router->post('/file', [
        'as' => $name_prefix.'store',
        'uses' => 'TestController@store'
    ]);
});
