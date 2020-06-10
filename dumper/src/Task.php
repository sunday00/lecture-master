<?php

namespace App;

class Task{
    protected $description;

    public function __construct($description) {
        $this->description = $description;
    }

}

