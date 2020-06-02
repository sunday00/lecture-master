<?php 

use Illuminate\Database\Eloquent\Model as Eloquent;

class Customer extends Eloquent{
    // protected $type;
    // public function __construct($type) {
    //     $this->type = $type;
    // }

    protected $fillable = ['name','type'];

    public function type()
    {
        return $this->type;
    }
}