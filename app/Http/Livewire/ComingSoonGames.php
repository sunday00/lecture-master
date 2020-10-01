<?php

namespace App\Http\Livewire;

use App\Services\Common\IgdbTokenService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Livewire\Component;

class ComingSoonGames extends Component
{
    private $games = [];

    public function loadComingSoonGames(IgdbTokenService $igdbTokenService)
    {
        $current = Carbon::now()->timestamp;

        $this->games = Cache::remember('coming-soon-games', 60, function () use ($igdbTokenService, $current) {
            $response = Http::withHeaders([
                'Client-ID' => config('services.igdb.key'),
                'Authorization' => 'Bearer ' . $igdbTokenService->getAccessToken()
            ])->withBody("
                fields name, slug, cover.url, first_release_date;
                where platforms = (48,49,6,130,167,5,169,14)
                   & first_release_date >= {$current};
                sort first_release_date asc;
                limit 4;
            ", 'text')->post('https://api.igdb.com/v4/games');

            return collect($response->object())->map(function ($g) {
                $g->cover->url = Str::replaceFirst('thumb', 'cover_small', $g->cover->url);
                $g->first_release_date = Carbon::parse($g->first_release_date)->format('Y.M.d');
                return $g;
            });
        });
    }

    public function render()
    {
        return view('livewire.coming-soon-games', [
            'comingSoonGames' => $this->games
        ]);
    }
}
