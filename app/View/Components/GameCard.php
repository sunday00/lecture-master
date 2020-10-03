<?php

namespace App\View\Components;

use Illuminate\View\Component;
use Illuminate\View\View;

class GameCard extends Component
{
    private object $game;

    /**
     * Create a new component instance.
     *
     * @param $game
     */
    public function __construct($game)
    {
        $this->game = $game;
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return View
     */
    public function render()
    {
        return view('components.game-card', [
            'game' => $this->game
        ]);
    }
}
