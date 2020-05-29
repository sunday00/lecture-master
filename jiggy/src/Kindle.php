<?php

namespace Acme;

use Acme\eReaderInterface;

class Kindle implements eReaderInterface
{
    public function turnOn()
    {
        var_dump('kindle on');
    }

    public function pressNextButton()
    {
        var_dump('press kindle next btn');
    }
}