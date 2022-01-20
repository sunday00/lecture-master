<?php

namespace App\Http\Controllers;

class ExampleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
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
    public function __construct()
    {
        //
    }

    /**
     * @OA\Get(
     *     path="/sample",
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
    public function index()
    {
        return 'works!';
    }
}
