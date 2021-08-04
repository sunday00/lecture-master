<?php

namespace Api\v1;

use Models\DevLang as model;
use Helpers\Request;
use Helpers\Response;

/**
 * @OA\Schema(
 *    schema="devLang",
 *    description="A list of languages for test"
 * )
 */
class DevLang extends BaseController
{
  public function run(string $act, array|null $params = null): string
  {
    return parent::__init('devLang', new model(), $act, $params);
  }

  /**
   * @OA\Get(
   *     path="/api/v1/dev-lang",
   *     tags={"devLang"},
   *     @OA\Response(response="200", description="list of pages")
   * )
   */
  public function index()
  {
    return Response::raiseJson200($this->model->selectAll());
  }
}