<?php

namespace App;

use App\Shape;

class Square extends Shape {
    public $width;
    public $height;

    public function __construct($height, $width) {
        $this->height = $height;
        $this->width = $width;
    }

    public function area()
    {
        return $width * $height;
    }

}
