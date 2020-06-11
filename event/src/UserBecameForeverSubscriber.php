<?php

namespace App;

use Symfony\Contracts\EventDispatcher\Event;

class UserBecameForeverSubscriber extends Event
{
    public $user;

    public function __construct($user)
    {
        $this->user = $user;
    } 
}