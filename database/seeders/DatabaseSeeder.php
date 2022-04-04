<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(10)->create();
        \App\Models\Channel::factory(20)->create();
        \App\Models\Thread::factory(50)->create(['created_at' => Carbon::today()->subYear(3)->format('Y-m-d H:i:s')]);
        \App\Models\Reply::factory(100)->create(['created_at' => Carbon::today()->subYear(3)->format('Y-m-d H:i:s')]);
    }
}
