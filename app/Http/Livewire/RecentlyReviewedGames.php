<?php

namespace App\Http\Livewire;

use App\Services\Common\IgdbTokenService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Livewire\Component;

class RecentlyReviewedGames extends Component
{
    private $games = [];

    public function loadRecentlyReviewedGames(IgdbTokenService $igdbTokenService)
    {
        $before = Carbon::now()->subMonth(2)->timestamp;
        $current = Carbon::now()->timestamp;

        $this->games = Cache::remember('recently-reviewed-games', 60, function () use ($igdbTokenService, $before, $current) {
            $response = Http::withHeaders([
                'Client-ID' => config('services.igdb.key'),
                'Authorization' => 'Bearer ' . $igdbTokenService->getAccessToken()
            ])->withBody("
                fields name, slug, cover.url, first_release_date, platforms.abbreviation,
                 rating, rating_count, summary;
                where rating != null
                   & platforms = (48,49,6,130,167,5,169,14)
                   & (first_release_date >= {$before} & first_release_date < {$current} & rating_count > 5);
                sort rating desc;
                limit 3;
            ", 'text')->post('https://api.igdb.com/v4/games');

            return collect($response->object())->map(function ($g) {
                $g->cover->url = Str::replaceFirst('thumb', 'cover_big', $g->cover->url);
                $g->rating = isset($g->rating) ? round($g->rating) : null;

                $this->emit('recentlyReviewedGameRatingAdded', [
                    'slug'      => $g->slug,
                    'rating'    => $g->rating,
                ]);

                return $g;
            });
        });
    }

    public function render()
    {
        return view('livewire.recently-reviewed-games', [
            'recentlyReviewedGames' => $this->games
        ]);
    }
}
