<?php

$routes = [
  'Pages' => [
    'test' => ['GET', '/read/:slug/maybe/:otherParam', 'test'],
    'read' => ['GET', '/read/:slug', 'read'],
    'list' => ['GET', '/',  'index'],
  ]
];

return $routes;