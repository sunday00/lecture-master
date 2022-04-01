<?php

namespace Tests\Unit;

use App\Models\Thread;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ThreadTest extends TestCase
{
    use RefreshDatabase;
    use WithFaker;

    public function setUp(): void
    {
        parent::setUp();
        $this->thread = Thread::factory()->create();
    }

    /** @test */
    public function a_thread_can_add_test()
    {
        $body = $this->faker->paragraph;
        $user = User::factory()->create();
        $this->thread->addReply([
            'body' => $body,
            'user_id' => $user->id,
        ]);

        $this->assertCount(1, $this->thread->replies);
    }
}
