<?php

namespace App;

use App\Shape;

class Circle extends Shape {
    public $radius;

    public function __construct($radius) {
        $this->radius = $radius;
    }

    public function area()
    {
        return $this->radius * $this->radius * pi();
    }
}
