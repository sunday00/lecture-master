<?php

namespace Database\Factories;

use App\Models\Channel;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class ThreadFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'title'         => $this->faker->sentence,
            'body'          => $this->faker->paragraph,
            'user_id'       => User::all()->count() ? User::all()->random()->id : User::factory()->create()->id,
            'channel_id'    => Channel::all()->count() ? Channel::all()->random()->id : Channel::factory()->create()->id,
        ];
    }

    public function configure()
    {
        return $this->afterCreating(fn (Thread $t) => $t->update(['created_at' => Thread::latest()->first()->created_at->addDays(1)]));
    }
}
