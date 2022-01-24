<?php
/**
 * @OA\Get(
 *     path="/test",
 *     tags={"test"},
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
 *     path="/test/dd",
 *     tags={"test"},
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *         @OA\Link(
 *           link="/test/dd",
 *           operationId="seeInHtml",
 *           parameters="",
 *         )
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */
/**
 * @OA\Get(
 *     path="/test/res",
 *     tags={"test"},
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */

 /**
 * @OA\Get(
 *     path="/test/down",
 *     tags={"test"},
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */

/**
 * @OA\Post(
 *     path="/test/file",
 *     tags={"test"},
 *     operationId="uploadFile",
 *     @OA\RequestBody(
 *         required=true,
 *         @OA\MediaType(
 *             mediaType="multipart/form-data",
 *             @OA\Schema(
 *                 @OA\Property(
 *                     description="Item image",
 *                     property="item_image",
 *                     type="string",
 *                     format="binary"
 *                 )
 *             )
 *         )
 *     ),
 *     @OA\Response(
 *         response="200",
 *         description="Returns some sample category things",
 *     ),
 *     @OA\Response(
 *         response="400",
 *         description="Error: Bad request. When required parameters were not supplied.",
 *     ),
 * )
 */