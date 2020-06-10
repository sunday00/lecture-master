<?php

require "vendor/autoload.php";

use App\Tasks;
use App\Task;

$tasks = new Tasks([
    new Task('Go to the store'),
    new Task('Finish homework'),
    new Task('Pay for another lecture')
]);

dump($tasks);