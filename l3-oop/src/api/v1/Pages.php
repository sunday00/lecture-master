<?php

namespace Api\v1;

use Models\Page as model;
use Helpers\Request;
use Helpers\Errors;

class Pages
{
  private model $model ;
  private Request $req;

  public function run() : int
  {
    $this->model = new model();    
    $this->req = new Request();

    if( $this->req->get('method') == 'POST' && count($this->req->get('followUris')) == 0){
      $this->index();
      return 1;
    }

    Errors::raiseJson404();
    return 0;
  }

  private function index() : int
  {
    $options = (object) [
      'order' => 'orderId ASC'
    ];
    echo json_encode( $this->model->selectAll($options) );
    return 1;
  }
}