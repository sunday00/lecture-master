<?php 
/**
 * @OA\Info(
 *   title="Example API",
 *   version="1.0",
 *   @OA\Contact(
 *     email="support@example.com",
 *     name="Support Team"
 *   )
 * )
 */
/**
 * @OA\Get(
 *     path="/sample",
 *     tags={"sample"},
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Post(
 *     path="/sample2",
 *     tags={"sample"},
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Get(
 *     path="/sample/{id}",
 *     tags={"sample"},
 *     @OA\Parameter(
 *         description="show coming id",
 *         in="path",
 *         name="id",
 *         required=true,
 *         @OA\Schema(
 *            type="integer",
 *            format="int64"
 *         )
 *     ),
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Get(
 *     path="/sample/optional/{id}",
 *     tags={"sample"},
 *     description="show coming id is null",
 *     @OA\Parameter(
 *         description="id is optional",
 *         in="path",
 *         name="id",
 *         required=true,
 *         @OA\Schema(
 *            type="integer",
 *            format="int64"
 *         )
 *     ),
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Get(
 *     path="/sample/optional/",
 *     tags={"sample"},
 *     description="show coming id is null",
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Get(
 *     path="/sample/auth",
 *     tags={"sample"},
 *     description="check auth",
 *     @OA\Parameter(
 *         description="api_token",
 *         in="header",
 *         name="api_token",
 *         required=false,
 *         @OA\Schema(
 *            type="string",
  *         )
 *     ),
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\JsonContent()
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */