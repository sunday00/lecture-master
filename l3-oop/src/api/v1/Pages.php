<?php

namespace Api\v1;

use Models\Page as model;
use Helpers\Response;

/**
 * @OA\Schema(
 *    schema="pages",
 *    description="A list of pages on this site"
 * )
 */
class Pages extends BaseController
{
  public function run(string $act, array|null $params = null): string
  {
    return parent::__init('pages', new model(), $act, $params);
  }

  /**
   * @OA\Get(
   *     path="/api/v1/pages",
   *     tags={"pages"},
   *     @OA\Response(response="200", description="list of pages")
   * )
   */
  public function index() : string
  {
    $options = (object) [
      'order' => 'orderId ASC'
    ];

    return Response::raiseJson200($this->model->selectAll($options));
  }

  /**
   * @OA\Get(
   *    tags={"pages"},
   *    path="/api/v1/pages/read/{slug}",
   *    @OA\Parameter(in="path", name="slug"),
   *    @OA\Response(response="200", description="One of pages"),
   *    @OA\Response(response="404", description="Not Found")
   * )
   */
  public function read(array $params) : string
  {
    return Response::raiseJson200($this->model->selectOne($params['slug']));
  }

  /**
   * @OA\Post(
   *    path="/api/v1/pages/create",
   *    tags={"pages"},
   *    @OA\RequestBody(
   *      @OA\MediaType(
   *        mediaType="application/json",
   *        @OA\Schema(required={"orderId, slug, title, content"},
   *          @OA\Property(property="orderId", type="integer"),
   *          @OA\Property(property="slug", type="string"),
   *          @OA\Property(property="title", type="string"),
   *          @OA\Property(property="content", type="string", example="please input here html")
   *        )
   *      )
   *    ),
   *    @OA\Response(response="200", description="create success"),
   *    @OA\Response(response="400", description="Bad request"),
   * )
   */
  public function create() : string
  {
    return Response::raiseJson200($this->model->create($this->req->get('input')));
  }

  /**
   * @OA\Patch(
   *    path="/api/v1/pages/update/{slug}",
   *    tags={"pages"},
   *    @OA\Parameter(in="path", name="slug"),
   *    @OA\RequestBody(
   *      @OA\MediaType(
   *        mediaType="application/json",
   *        @OA\Schema(required={"orderId, slug, title, content"},
   *          @OA\Property(property="orderId", type="integer"),
   *          @OA\Property(property="slug", type="string"),
   *          @OA\Property(property="title", type="string"),
   *          @OA\Property(property="content", type="string", example="please input here html")
   *       )
   *     )
   *   ),
   *   @OA\Response(response="200", description="update success"),
   *   @OA\Response(response="400", description="Bad request"),
   * )
   */
  public function update(array $params) : string
  {
    return Response::raiseJson200($this->model->update($params['slug'], $this->req->get('input')));
  }

  /**
   * @OA\Delete(
   *    tags={"pages"},
   *    path="/api/v1/pages/delete/{slug}",
   *    @OA\Parameter(in="path", name="slug"),
   *    @OA\Response(response="200", description="Delete one of pages"),
   *    @OA\Response(response="404", description="Not Found")
   * )
   */
  public function delete(array $params) : string
  {
    return Response::raiseJson200($this->model->delete($params['slug']));
  }
}