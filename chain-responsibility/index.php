<?php

require 'vendor/autoload.php';

abstract class HomeChecker {
    public abstract function check(HomeStatus $home);
}

class Locks extends HomeChecker{
    public function check(HomeStatus $home)
    {
         if( !$home->locked ){
             throw new Exception('the door is not locked');
         }
    }
}

class Light extends HomeChecker{
    public function check(HomeStatus $home)
    {
         if( !$home->locked ){
             throw new Exception('the door is not locked');
         }
    }
}

class Alarm extends HomeChecker{
    public function check(HomeStatus $home)
    {
         if( !$home->locked ){
             throw new Exception('the door is not locked');
         }
    }
}

class HomeStatus {
    public $alarmOn = true;
    public $locked = true;
    public $lightOff = true;
}

//---

$locks = new Locks;

$status = new HomeStatus;

$locks->check($status);
