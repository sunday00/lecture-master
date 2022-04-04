<?php

namespace Database\Factories;

use App\Models\Reply;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ReplyFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'thread_id' => Thread::all()->count() ? Thread::all()->random()->id : Thread::factory()->create()->id,
            'user_id' => User::factory()->create()->id,
            'body' => $this->faker->paragraph,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(fn (Reply $r) => $r->update(['created_at' => Reply::latest()->first()->created_at->addDays(1)]));
    }
}
