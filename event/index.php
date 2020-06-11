<?php

use App\UserSignedUp;
use App\SendThankYouEmail;
use App\UserBecameForeverSubscriber;
use Symfony\Contracts\EventDispatcher\Event;
use Symfony\Component\EventDispatcher\EventDispatcher;

require('vendor/autoload.php');

$dispatcher = new EventDispatcher;

$dispatcher->addListener('UserSignedUp', function(Event $event){
    var_dump($event, "apple");
}); 

$dispatcher->addListener('UserSignedUp', function(Event $event){
    var_dump($event, "banana");
}); 

$e = new Event();
// $e->stopPropagation(true);
$dispatcher->dispatch($e, 'UserSignedUp');

$ev = new UserSignedUp( (object) ["name"=>"sunday00", "email"=>"asd@kjn.com" ] );
$dispatcher->dispatch($ev, 'UserSignedUp');

$dispatcher->addListener(UserSignedUp::class, function(Event $event){
    var_dump($event, "cherry");
}); 
$ev2 = new UserSignedUp( (object) ["name"=>"Monday00", "" ] );
$dispatcher->dispatch($ev2, UserSignedUp::class);

$listener = new SendThankYouEmail;
$dispatcher->addListener(UserSignedUp::class, [$listener, 'handle']); 
$ev3 = new UserSignedUp( (object) ["name"=>"Wednesday00", "" ] );
$dispatcher->dispatch($ev3, UserSignedUp::class);

$listener2 = new SendThankYouEmail;
$dispatcher->addListener(UserSignedUp::class, $listener2); 
$ev4 = new UserSignedUp( (object) ["name"=>"111", "" ] );
$dispatcher->dispatch($ev4, UserSignedUp::class);

$ev5 = new UserBecameForeverSubscriber( (object) ["name"=>"Royal"] );
$dispatcher->addListener(UserBecameForeverSubscriber::class, function($evt){
    dd("forever ".$evt->user->name);
}); 
$dispatcher->dispatch($ev5, UserBecameForeverSubscriber::class); 

