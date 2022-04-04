<?php

namespace Tests\Feature\Thread;

use App\Models\Thread;
use Tests\TestCase;

class CreateThreadTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    /** @test */
    public function an_authenticated_user_can_create_new_forum_threads()
    {
        $this->withoutExceptionHandling();

        $thread = make(Thread::class);
        $location = $this->sign()->post('/threads', $thread->toArray())
            ->assertStatus(302)
            ->headers->get('location');

        $this->get($location)
            ->assertSee($thread->title)
            ->assertSee($thread->body);
    }

    /** @test */
    public function guest_may_not_create_threads()
    {
        $thread = make(Thread::class);
        $this->post('/threads', $thread->toArray())
            ->assertStatus(302)
            ->assertLocation(route('login'));
    }

    /** @test */
    public function guest_cannot_see_create_thread_form()
    {
        $this->get(route('threads.create'))
            ->assertRedirect(route('login'));
    }
}
