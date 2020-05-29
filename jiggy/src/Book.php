<?php
namespace Acme;

class Book implements BookInterface
{
    public function open()
    {
        var_dump("open the paper");
    }

    public function turn()
    {
        var_dump("turning the page");
    }
}