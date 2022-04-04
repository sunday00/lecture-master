<?php

namespace Tests\Feature\Thread;

use App\Models\Reply;
use App\Models\Thread;
use Tests\TestCase;

class ParticipateInForumTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->thread = create(Thread::class);
    }

    /** @test */
    public function an_authenticated_user_may_participate_in_forum_threads()
    {
        $this->withoutExceptionHandling();

        $reply = make(Reply::class);
        $this->sign()->post($this->thread->path() . '/replies', $reply->toArray());

        $this->get($this->thread->path())
            ->assertSee($reply->body);
    }

    /** @test */
    public function an_unauthenticated_user_may_not_add_replies()
    {
        $this->withoutExceptionHandling();
        $this->expectException('Illuminate\\Auth\\AuthenticationException');

        $reply = make(Reply::class);
        $this->post($this->thread->path() . '/replies', $reply->toArray());
    }
}
