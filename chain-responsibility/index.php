<?php

require 'vendor/autoload.php';

abstract class HomeChecker {

    protected $successor;

    public abstract function check(HomeStatus $home);

    public function setSuccessor(HomeChecker $successor)
    {
        $this->successor = $successor;
    }

    public function next(HomeStatus $home)
    {
        if( $this->successor ){
            $this->successor->check($home);
        }
    }
}

class Locks extends HomeChecker{
    public function check(HomeStatus $home)
    {
        if( !$home->locked ){
            throw new Exception(<<<EOL
            ========================
            ========================
            the door is not locked
            ========================
            ========================
            EOL);
        }

        $this->next($home);
    }
}

class Light extends HomeChecker{
    public function check(HomeStatus $home)
    {
        if( !$home->lightOff ){
            throw new Exception(<<<EOL
            ========================
            ========================
            the light is not off
            ========================
            ========================
            EOL);
        }
        $this->next($home);
    }
}

class Alarm extends HomeChecker{
    public function check(HomeStatus $home)
    {
        if( !$home->alarmOn ){
            throw new Exception(<<<EOL
            ========================
            ========================
            the alarm is not work
            ========================
            ========================
            EOL);
        }
        $this->next($home);
    }
}

class HomeStatus {
    public $alarmOn = true;
    public $locked = true;
    public $lightOff = true;
}

//---

$locks = new Locks;
$light = new Light;
$alarm = new Alarm;

$locks->setSuccessor($light);

$locks->check(new HomeStatus);
