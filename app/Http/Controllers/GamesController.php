<?php

namespace App\Http\Controllers;

use App\Games\GameService;
use Illuminate\Http\Request;
use App\Services\Common\IgdbTokenService;
use Illuminate\View\View;

class GamesController extends Controller
{
    private IgdbTokenService $igdbTokenService;
    private GameService $gameService;

    /**
     * GamesController constructor.
     * @param IgdbTokenService $igdbTokenService
     * @param GameService $gameService
     */
    public function __construct(IgdbTokenService $igdbTokenService, GameService $gameService)
    {
        $this->igdbTokenService = $igdbTokenService;
        $this->gameService = $gameService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return View
     */
    public function index()
    {
        return view('index', [
            'igdbTokenService' => $this->igdbTokenService,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param string $slug
     * @return View
     */
    public function show(string $slug)
    {
        $game = $this->gameService->getOneFromIgdbBySlug($slug, $this->igdbTokenService);
        dump($game);
        return view('show', [
            'game' => $game
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
