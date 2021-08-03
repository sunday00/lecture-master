<?php

namespace Api\v1;

use Models\Page as model;
use Helpers\Response;

class Pages extends BaseController
{
  public function run(string $act, array|null $params = null): string
  {
    return parent::__init('pages', new model(), $act, $params);
  }

  public function index() : string
  {
    $options = (object) [
      'order' => 'orderId ASC'
    ];

    return Response::raiseJson200($this->model->selectAll($options));
  }

  public function read(array $params) : string
  {
    return Response::raiseJson200($this->model->selectOne($params['slug']));
  }

  public function create() : string
  {
    return Response::raiseJson200($this->model->create($this->req->get('input')));
  }

  public function update(array $params) : string
  {
    return Response::raiseJson200($this->model->update($params['slug'], $this->req->get('input')));
  }

  public function delete(array $params) : string
  {
    return Response::raiseJson200($this->model->delete($params['slug']));
  }
}