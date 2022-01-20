<?php

// $router->get('/', function () use ($router) {
//     return $router->app->version();
// });

$router->get('/sample', [
    'as' => 'index', 'uses' => 'ExampleController@index'
]);
