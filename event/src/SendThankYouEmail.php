<?php

namespace App;

class SendThankYouEmail
{
    public function __invoke()
    {
        dump('invoke style');
    }

    public function handle()
    {
        dump('??');
    }
}