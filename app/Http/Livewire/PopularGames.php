<?php

namespace App\Http\Livewire;

use App\Services\Common\IgdbTokenService;
use Carbon\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Livewire\Component;

class PopularGames extends Component
{
    private $games = [];

    public function loadPopularGames(IgdbTokenService $igdbTokenService)
    {
        $before = Carbon::now()->subMonth(2)->timestamp;
        $after = Carbon::now()->addMonth(2)->timestamp;

        $this->games = Cache::remember('popular-games', 60, function () use ($igdbTokenService, $before, $after) {
            $response = Http::withHeaders([
                'Client-ID'     => config('services.igdb.key'),
                'Authorization' => 'Bearer '.$igdbTokenService->getAccessToken()
            ])->withBody("
                fields name, slug, cover.url, first_release_date, rating, platforms.abbreviation;
                where rating != null
                   & platforms = (48,49,6,130,167,5,169,14)
                   & (first_release_date >= {$before} & first_release_date <= {$after});
                sort rating desc;
                limit 12;
            ", 'text')->post('https://api.igdb.com/v4/games');

            return collect($response->object())->map(function($g){
                $g->rating = isset($g->rating) ? round($g->rating) : null;
                $g->coverImage = isset($g->cover)
                    ? Str::replaceFirst('thumb','cover_big',$g->cover->url)
                    : 'https://via.placeholder.com/264x352.png?text=Not+prepared';
                $g->platforms = collect($g->platforms)->filter(function($p){
                    if( property_exists($p, 'abbreviation') ){
                        return $p->abbreviation != 'Linux';
                    }
                    return false;
                });
                $g->stringPlatforms = implode(' | ', Arr::pluck($g->platforms, 'abbreviation'));

                return $g;
            });
        });

        collect($this->games)->map(function ($g){
            $this->emit('popularGameRatingAdded', [
                'container' => '.popular-games-container .round-score-'.$g->slug,
                'rating'    => $g->rating,
            ]);
        });
    }

    public function render()
    {
        return view('livewire.popular-games', [
            'popularGames' => $this->games
        ]);
    }
}
