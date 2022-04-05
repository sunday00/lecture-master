<?php

namespace Tests\Feature\Thread;

use App\Models\Channel;
use App\Models\Thread;
use Tests\TestCase;

class CreateThreadTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();
    }

    private function publish_thread($params = [])
    {
        return $this->sign()->post('/threads', make(Thread::class, $params)->toArray());
    }

    /** @test */
    public function an_authenticated_user_can_create_new_forum_threads()
    {
        $this->withoutExceptionHandling();

        $thread = make(Thread::class);
        $location = $this->sign()->post(route('threads.store'), $thread->toArray())
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

    /** @test */
    public function a_thread_requires_a_title()
    {
        $this->publish_thread(['title' => null])
            ->assertSessionHasErrors('title');
    }

    /** @test */
    public function a_thread_channel_id_should_in_channels_table()
    {
        Channel::factory(5)->create();

        $this->publish_thread(['channel_id' => 6])
            ->assertSessionHasErrors('channel_id');
    }
}
