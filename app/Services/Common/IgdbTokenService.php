<?php


namespace App\Services\Common;


use App\Models\CommonConfig;
use Carbon\Carbon;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

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

    /**
     * @return string
     */
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

        $response = Http::withHeaders([
            'Client-ID'     => config('services.igdb.key'),
            'Authorization' => 'Bearer '.$accessToken
        ])->post('https://api.igdb.com/v4/games');

        if( $response->status() == 403){
            $this->deleteCommonConfig();
            Cookie::queue(Cookie::forget('igdb_access_token'));
            return $this->getAccessToken();
        }

        return $accessToken;
    }

    public function deleteCommonConfig()
    {
        $con = $this->commonConfig->first();
        $con->igdb_access_token = null;
        $con->save();
    }
}
