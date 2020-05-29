<?php
namespace Acme;

use Acme\BookInterface;

class eReaderAdapter implements BookInterface {

    private $reader;

    public function __construct(eReaderInterface $reader) {
        $this->reader = $reader;
    }

    public function open()
    {
        return $this->reader->turnOn();
    }

    public function turn()
    {
        return $this->reader->pressNextButton();
    }
}