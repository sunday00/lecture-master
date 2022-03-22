<?php

namespace Database\Factories;

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
            'title'     => $this->faker->sentence,
            'body'      => $this->faker->paragraph,
            'user_id'   => User::factory()->create()->id,
        ];
    }
}
