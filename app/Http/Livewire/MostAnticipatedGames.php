<?php

namespace App\Http\Livewire;

use App\Services\Common\IgdbTokenService;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;
use Livewire\Component;

class MostAnticipatedGames extends Component
{
    private $games = [];

    public function loadMostAnticipatedGames(IgdbTokenService $igdbTokenService)
    {
        $after = Carbon::now()->addMonth(4)->timestamp;
        $current = Carbon::now()->timestamp;

        $this->games = Cache::remember('most-anticipated-games', 60, function () use ($igdbTokenService, $after, $current) {
            $response = Http::withHeaders([
                'Client-ID' => config('services.igdb.key'),
                'Authorization' => 'Bearer ' . $igdbTokenService->getAccessToken()
            ])->withBody("
                fields name, slug, cover.url, first_release_date, follows, aggregated_rating;
                where aggregated_rating != null
                   & platforms = (48,49,6,130,167,5,169,14)
                   & (first_release_date >= {$current} & first_release_date < {$after});
                sort aggregated_rating desc;
                limit 4;
            ", 'text')->post('https://api.igdb.com/v4/games');

            return collect($response->object())->map(function ($g) {
                $g->coverImage = isset($g->cover)
                    ? Str::replaceFirst('thumb', 'cover_small', $g->cover->url)
                    : 'https://via.placeholder.com/264x352.png?text=Not+prepared';
                $g->first_release_date = Carbon::parse($g->first_release_date)->format('Y.M.d');
                return $g;
            });
        });
    }

    public function render()
    {
        return view('livewire.most-anticipated-games', [
            'mostAnticipatedGames' => $this->games
        ]);
    }
}