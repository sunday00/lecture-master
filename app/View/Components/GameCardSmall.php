<?php

namespace App\View\Components;

use Illuminate\View\Component;

class GameCardSmall extends Component
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
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.game-card-small', [
            'game' => $this->game
        ]);
    }
}
