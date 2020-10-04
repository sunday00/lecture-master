<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class The_page_for_one_game extends TestCase
{
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testExample()
    {
//        Http::fake([
//            'https://api.igdb.com/v4/games' => Http::response(['foo' => 'bar'], 200)
//        ]);

        $response = $this->get(route('games.show', 'spiritfarer'));

        $response->assertStatus(200);
    }
}
