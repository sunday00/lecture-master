<?php

namespace App\Http\Livewire;

use App\Services\Common\IgdbTokenService;
use Illuminate\Support\Facades\Http;
use Livewire\Component;

class SearchDropdown extends Component
{
    public $search = '';
    private $searchResult = [];

    public function render()
    {
        if( $this->search === '' ) return view('livewire.search-dropdown', ['result' => []]);

        $service = new IgdbTokenService(new \App\Models\CommonConfig());
        $access_token = $service->getAccessToken();

        $response = Http::withHeaders([
            'Client-ID'     => config('services.igdb.key'),
            'Authorization' => 'Bearer '.$access_token
        ])->withBody("
                search \"{$this->search}\";
                fields name, slug, cover.url;
                where platforms = (48,49,6,130,167,5,169,14);
                limit 8;
            ", 'text')->post('https://api.igdb.com/v4/games');

        $this->searchResult = collect($response->object())->map(function($g){
            $g->coverImage = isset($g->cover) ? $g->cover->url : "https://via.placeholder.com/50x50.png?text=Not+prepared";
            return $g;
        });

        return view('livewire.search-dropdown', [
            'result' => $this->searchResult
        ]);
    }
}
