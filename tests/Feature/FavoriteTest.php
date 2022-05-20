<?php

namespace Tests\Feature;

use App\Models\Reply;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class FavoriteTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function test_not_authenticated_user_can_not_favorite_anything()
    {
        $reply = create(Reply::class);

        $this->post("/replies/{$reply->id}/favorite")
            ->assertRedirect('/login');
    }

    /** @test */
    public function test_an_authenticated_user_can_favorite_any_reply()
    {
        $this->withoutExceptionHandling();

        $reply = create(Reply::class);

        $this->sign()->post("/replies/{$reply->id}/favorite");
        $this->assertCount(1, $reply->favorites);
    }

    /** @test */
    public function test_an_user_can_only_once_favorite_a_reply()
    {
        $this->withoutExceptionHandling();

        $reply = create(Reply::class);

        $this->sign();

        $this->post("/replies/{$reply->id}/favorite");

        $this->assertCount(1, $reply->favorites()->get());

        $this->post("/replies/{$reply->id}/favorite");

        $this->assertCount(0, $reply->favorites()->get());
    }
}
