<?php


namespace App\Services\Common;


use App\Models\CommonConfig;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;

class IgdbTokenService
{
    private $commonConfig;

    /**
     * IgdbTokenService constructor.
     */
    public function __construct(CommonConfig $commonConfig)
    {
        $this->commonConfig = $commonConfig;
    }

    public function getAccessToken()
    {
        $accessToken = Cookie::get('igdb_access_token');

        if (!$accessToken){
            $config = $this->commonConfig->firstOrCreate();
            $accessToken = $config->igdb_access_token;

            if( !$accessToken ){
                $response = Http::post('https://id.twitch.tv/oauth2/token', [
                    'client_id'     => config('services.igdb.key'),
                    'client_secret' => config('services.igdb.secret'),
                    'grant_type'    => 'client_credentials'
                ])->object();
                $accessToken = $response->access_token;

                $config->igdb_access_token = $accessToken;
                $config->update();
            }

            Cookie::queue('igdb_access_token', $accessToken, 3600);
        }

        return $accessToken;
    }

    public function getPopularGames()
    {
        $response = Http::withHeaders([
            'Client-ID'     => config('services.igdb.key'),
            'Authorization' => 'Bearer '.$this->getAccessToken()
        ])->withBody("
                fields name, cover.url, first_release_date, rating, platforms.abbreviation;
                where rating != null;
                sort rating desc;
                limit 12;
            ", 'text')->post('https://api.igdb.com/v4/games');

        if( $response->status() == 403){
            $this->commonConfig->first()->delete();
            Cookie::queue(Cookie::forget('igdb_access_token'));
            $this->getPopularGames();
        }

        return $response->object();
    }
}
