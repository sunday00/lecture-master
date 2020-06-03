<?php

require 'vendor/autoload.php';

interface Subject
{
    public function attach(Observe $observer) :Subject ;
    public function detach(int $index);
    public function notify();
    public function fire();
}

interface Observe
{
    public function handle();
}

class Login implements Subject
{
    protected $observers = [];

    public function attach(Observe $observer) :Subject
    {
        $this->observers[] = $observer;
        return $this;
    }

    public function detach(int $index)
    {
        unset($this->observers[$index]);
    }

    public function notify()
    {
        foreach( $this->observers as $observer ){
            $observer->handle();
        }
    }

    public function fire()
    {
        $this->notify();
    }
}

class LogHandler implements Observe {
    public function handle()
    {
        var_dump('logging...');
    }
}

class EmailNotifier implements Observe {
    public function handle()
    {
        var_dump('email sended...');
    }
}

$login = new Login();
$login->attach(new LogHandler)->attach(new EmailNotifier);

$login->fire();