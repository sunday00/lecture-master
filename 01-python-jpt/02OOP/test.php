<?php

class a {

    public $a = 0;

    public function __construct() {
        
    }
}

$a = new a;
echo $a->a;

$a->b = 4;
echo $a->b;

var_dump($a);