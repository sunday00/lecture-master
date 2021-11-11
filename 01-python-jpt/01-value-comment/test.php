<?php

function a ($x = 100, $y = 1) {
    return ["x" => $x, "y" => $y];
}

var_dump( a(y:4) );

echo "<br />";

function b (...$args) {
    return array_sum($args);
}

echo  b(1,2, 3, 4, 5, 6, 7, 8, 9, 10);