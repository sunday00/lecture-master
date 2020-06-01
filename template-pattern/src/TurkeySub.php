<?php

namespace App;

class TurkeySub extends Sub {

    public function addPrimaryTopping()
    {
        var_dump('addTurkey');
        return $this;
    }

}