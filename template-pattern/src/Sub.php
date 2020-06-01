<?php

namespace App;

abstract class Sub {

    public function make()
    {
        return $this->layBread()->addLettuce()->addPrimaryTopping()->addSauce();
    }

    protected abstract function addPrimaryTopping();

    public function layBread()
    {
        var_dump('layBread');
        return $this;
    }

    public function addLettuce()
    {
        var_dump('addLettuce');
        return $this;
    }

    public function addSauce()
    {
        var_dump('addSauce');
        return $this;
    }
}