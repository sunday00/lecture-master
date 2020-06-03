<?php

namespace App;

use App\Shape;

class AreaCalculator {
    public function calculate(Shape $shapes)
    {
        // foreach( $shapes as $shape ){
        //     $area[] = $shape->width * $shape->height;
        // }

        $area[] = $shape->area();

        return array_sum( $area );
    }
}
