<?php
namespace App;

use Symfony\Contracts\EventDispatcher\Event;

class UserSignedUp extends Event
{
    public $user;

    public function __construct($user) {
        $this->user = $user;
    }
}