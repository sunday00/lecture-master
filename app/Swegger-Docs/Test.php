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
 *     path="/test/{id}",
 *     tags={"test"},
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