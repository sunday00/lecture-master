<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require 'vendor/autoload.php';

use Acme\Book;
use Acme\BookInterface;

use Acme\Kindle;
use Acme\eReaderAdapter;

class Person 
{
    public function read( BookInterface $book )
    {
        $book->open();
        $book->turn();
    }
}

(new Person)->read(new eReaderAdapter(new Kindle));