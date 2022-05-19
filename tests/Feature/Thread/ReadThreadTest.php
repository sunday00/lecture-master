<?php

namespace Tests\Feature\Thread;

use App\Models\Channel;
use App\Models\Reply;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReadThreadTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->thread = create(Thread::class);
    }

    /** @test */
    public function user_can_browse_thread()
    {
        $this->get('/threads')
            ->assertStatus(200)
            ->assertSee($this->thread->title);
    }

    /** @test */
    public function user_can_see_one_thread()
    {
        $this->get('/threads/'.$this->thread->channel->slug.'/'.$this->thread->id)
            ->assertSee($this->thread->title);
    }

    /** @test */
    public function user_can_read_replies_that_are_associated_with_a_thread()
    {
        $reply = create(Reply::class, ['thread_id' => $this->thread->id]);
        $this->get($this->thread->path())
            ->assertSee($reply->body);
    }

    /** @test */
    public function a_thread_has_a_creator()
    {
        $this->assertInstanceOf(User::class, $this->thread->user);
    }

    /** @test */
    public function user_can_filter_threads_according_to_a_channel()
    {
        $this->withoutExceptionHandling();

        $channel = create(Channel::class);
        $channel2 = create(Channel::class);
        $threadInChannel = create(Thread::class, ['channel_id' => $channel->id]);
        $threadInChannel2 = create(Thread::class, ['channel_id' => $channel2->id]);

        $this->get('/threads/'. $channel->slug)
            ->assertSee($threadInChannel->title)
            ->assertDontSee($threadInChannel2->thread);
    }

    /** @test */
    public function test_an_user_can_filter_threads_by_username()
    {
        $this->withoutExceptionHandling();

        $this->sign(create(User::class, ['name' => 'JD']));
        $other_user = create(User::class, ['name' => 'XX']);
        $threadByJD = create(Thread::class, ['user_id' => auth()->id()]);
        $threadNotByJD = create(Thread::class, ['title' => \Str::random(10).rand(1000,9999), 'user_id' => $other_user->id]);

        $this->get('/threads?by=JD')
            ->assertSee($threadByJD->title)
            ->assertDontSee($threadNotByJD->title);
    }
}
