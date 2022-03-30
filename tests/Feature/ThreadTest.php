<?php

namespace Tests\Feature;

use App\Models\Thread;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ThreadTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_browse_thread()
    {
        $thread = Thread::factory()->create();
        $this->get('/threads')
            ->assertStatus(200)
            ->assertSee($thread->title);
    }

    /** @test */
    public function user_can_see_one_thread()
    {
        $thread = Thread::factory()->create();
        $this->get('/threads/'.$thread->id)
            ->assertSee($thread->title);
    }
}
