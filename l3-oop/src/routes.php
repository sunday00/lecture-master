<?php

$routes = [
  'Pages' => [
    'test'    => ['GET'  , '/read/:slug/maybe/:otherParam', 'test'],
    'update'  => ['PATCH', '/update/:slug', 'update'],
    'read'    => ['GET'  , '/read/:slug', 'read'],
    'delete'  => ['DELETE'  , '/delete/:slug', 'delete'],
    'create'  => ['POST', '/create', 'create'],
    'list'    => ['GET'  , '/',  'index'],
  ],

  'FruitSeeder' => [
    'generate' => ['GET', '/generate/:cnt', 'generate'],
  ],

  'FruitStock' => [
    'index' => ['GET', '/', 'index'],
  ],
];

return $routes;