<?php

$opened_white_list = [
  '/',
  '/favicon.ico',
  '/login',
  '/signup',
  '/api/route',
];

permission($opened_white_list, $_SERVER['PHP_SELF']);
