<?php

/**
 * @OA\Post(
 *   tags={"Auth"},
 *   path="/auth/register",
 *   description="create new user",
 *   @OA\RequestBody(
 *       description="create new user data",
 *       required=true,
 *       @OA\JsonContent(
 *           allOf={
 *               @OA\Schema(
 *                   @OA\Property(
 *                     property="username",
 *                     type="string",
 *                     description="이름",
 *                     example="kim"
 *                   ),
 *                   @OA\Property(
 *                     property="password",
 *                     type="string",
 *                     description="password",
 *                     example="1111"
 *                   ),
 *                   @OA\Property(
 *                     property="password_confirmation",
 *                     type="string",
 *                     description="password",
 *                     example="1111"
 *                   ),
 *                   @OA\Property(
 *                     property="email",
 *                     type="string",
 *                     description="email",
 *                     example="aaa@aaa.com"
 *                   )
 *               )
 *           }
 *       )
 *   ),
 *   @OA\Response(response=201, description="CREATED"),
 * )
 */
/**
 * @OA\Post(
 *   tags={"Auth"},
 *   path="/auth/login",
 *   description="login user",
 *   @OA\RequestBody(
 *       description="user data",
 *       required=true,
 *       @OA\JsonContent(
 *           allOf={
 *               @OA\Schema(
 *                   @OA\Property(
 *                     property="username",
 *                     type="string",
 *                     description="이름",
 *                     example="kim"
 *                   ),
 *                   @OA\Property(
 *                     property="password",
 *                     type="string",
 *                     description="password",
 *                     example="1111"
 *                   )
 *               )
 *           }
 *       )
 *   ),
 *   @OA\Response(response=200, description="success"),
 * )
 */

/**
 *     @OA\SecurityScheme(
 *         securityScheme="bearerAuth",
 *         in="header",
 *         name="bearerAuth",
 *         type="http",
 *         scheme="bearer",
 *         bearerFormat="JWT",
 *     )
 */
 
/**
 * @OA\Post(
 *     path="/auth/me",
 *     tags={"Auth"},
 *     description="check auth",
 *     security={{ "bearerAuth": {} }},
 *     @OA\RequestBody(
 *         description="user data",
 *         required=true,
 *         @OA\JsonContent(
 *             allOf={
 *                 @OA\Schema(
 *                     @OA\Property(
 *                       property="username",
 *                       type="string",
 *                       description="이름",
 *                       example="kim"
 *                     ),
 *                     @OA\Property(
 *                       property="password",
 *                       type="string",
 *                       description="password",
 *                       example="1111"
 *                     )
 *                 )
 *             }
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