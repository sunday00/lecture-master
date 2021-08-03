<?php

$routes = [
  'Pages' => [
    'test' => ['GET', '/read/:slug/maybe/:otherParam', 'test'],
    'read' => ['GET', '/read/:slug', 'read'],
    'list' => ['GET', '/',  'index'],
  ],

  'FruitSeeder' => [
    'generate' => ['GET', '/generate/:cnt', 'generate'],
  ],

  'FruitStock' => [
    'index' => ['GET', '/', 'index'],
  ],
];

return $routes;