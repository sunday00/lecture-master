<?php

namespace Api\v1;

use Models\DevLang as model;
use Helpers\Request;

class DevLang
{
  private model $model ;
  private Request $req;

  public function run() : void
  {
    $this->model = new model();    
    $this->req = new Request();

    if( $this->req->get('method') == 'GET' && count($this->req->get('followUris')) == 0){
      $this->index();
    }
  }

  private function index()
  {
    echo json_encode( $this->model->selectAll() );
  }
}