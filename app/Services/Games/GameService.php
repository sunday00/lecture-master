<?php

namespace App\Games;

use App\Services\Common\IgdbTokenService;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Str;

class GameService
{
    public function getOneFromIgdbBySlug (string $slug, IgdbTokenService $igdbTokenService)
    {
        $game = Cache::remember("game-{$slug}", 60, function () use ($igdbTokenService, $slug) {
            $response = Http::withHeaders([
                'Client-ID'     => config('services.igdb.key'),
                'Authorization' => 'Bearer '.$igdbTokenService->getAccessToken()
            ])->withBody("
                fields name, slug, genres.name, cover.url, first_release_date,
                involved_companies.company.name, websites.*, videos.*, screenshots.*,
                similar_games.cover.url, similar_games.name, similar_games.rating,
                similar_games.platforms.abbreviation, similar_games.slug,
                rating, aggregated_rating, platforms.abbreviation, summary;
                where slug = \"{$slug}\";
            ", 'text')->post('https://api.igdb.com/v4/games');

            abort_if( !$response->object(), 404 );
            $_game = $response->object()[0];

            $_game->cover->url = Str::replaceFirst('thumb','cover_big',$_game->cover->url);
            $_game->screenshots = collect($_game->screenshots)->map(function($s){
                $s->big = str_replace('thumb','screenshot_big',$s->url);
                $s->huge = str_replace('thumb','screenshot_huge',$s->url);
                return $s;
            });
            $_game->similar_games = collect($_game->similar_games)->map(function($g){
                $g->cover->url = str_replace('thumb','cover_big',$g->cover->url);
                $g->platforms =collect($g->platforms)->filter(function ($p){
                    if( property_exists($p, 'abbreviation') ){
                        return $p->abbreviation != 'Linux';
                    }
                    return false;
                });
                $g->stringPlatforms = implode(' | ', \Arr::pluck($g->platforms, 'abbreviation'));
                return $g;
            });
            $_game->platforms = collect($_game->platforms)->filter(function($p){
                if( property_exists($p, 'abbreviation') ){
                    return $p->abbreviation != 'Linux';
                }
                return false;
            });
            $_game->company = $_game->involved_companies[0]->company->name;
            $_game->stringPlatforms = implode(' | ', \Arr::pluck($_game->platforms, 'abbreviation'));
            $_game->stringGenres = implode(' | ', \Arr::pluck($_game->genres, 'name'));

            return $_game;
        });

        return $game;
    }
}
