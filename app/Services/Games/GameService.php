<?php

namespace App\Games;

use App\Services\Common\IgdbTokenService;
use Illuminate\Support\Arr;
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

            $_game->rating = isset($_game->rating) ? round($_game->rating).'%' : '-';
            $_game->aggregated_rating = isset($_game->aggregated_rating) ? round($_game->aggregated_rating).'%' : '-';

            $_game->social = isset($_game->websites) ? collect($_game->websites)->pluck('url')->toArray() : null;
            $_game->social = isset($_game->websites) ? [
                'web'       => $_game->social[0],
                'facebook'  => Arr::first(array_filter($_game->social, function($w){ return Str::contains($w, 'facebook'); })),
                'twitter'  => Arr::first(array_filter($_game->social, function($w){ return Str::contains($w, 'twitter'); })),
                'instagram'  => Arr::first(array_filter($_game->social, function($w){ return Str::contains($w, 'instagram'); })),
            ] : null;

            $_game->coverImage = isset($_game->cover)
                ? Str::replaceFirst('thumb','cover_big',$_game->cover->url)
                : 'https://via.placeholder.com/264x352.png?text=Not+prepared';
            $_game->platforms = isset($_game->platforms) ? collect($_game->platforms)->filter(function($p){
                if( property_exists($p, 'abbreviation') ){
                    return $p->abbreviation != 'Linux';
                }
                return false;
            }) : null;

            $_game->summary = isset($_game->summary) ? $_game->summary : null;

            $_game->trailerUrl = isset($_game->videos) ? "http://youtube.com/watch/{$_game->videos[0]->video_id}" : null;
            $_game->screenshots = isset($_game->screenshots) ? collect($_game->screenshots)->map(function($s){
                $s->big = str_replace('thumb','screenshot_big',$s->url);
                $s->huge = str_replace('thumb','screenshot_huge',$s->url);
                return $s;
            })->take(9) : [];
            $_game->similar_games = collect($_game->similar_games)->map(function($g){
                $g->rating = isset($g->rating) ? round($g->rating).'%' : null;
                $g->coverImage = isset($g->cover)
                    ? str_replace('thumb','cover_big',$g->cover->url)
                    : 'https://via.placeholder.com/264x352.png?text=Not+prepared';
                $g->platforms = isset($g->platforms) ? collect($g->platforms)->filter(function ($p){
                    if( property_exists($p, 'abbreviation') ){
                        return $p->abbreviation != 'Linux';
                    }
                    return false;
                }) : null;
                $g->stringPlatforms = isset($g->platforms) ? implode(' | ', \Arr::pluck($g->platforms, 'abbreviation')) : null;
                return $g;
            })->take(6);

            $_game->company = isset($_game->involved_companies) ? $_game->involved_companies[0]->company->name : null;
            $_game->stringPlatforms = isset($_game->platforms) ? implode(' | ', \Arr::pluck($_game->platforms, 'abbreviation')) : null;
            $_game->stringGenres = implode(' | ', \Arr::pluck($_game->genres, 'name'));

            return $_game;
        });

        return $game;
    }
}
