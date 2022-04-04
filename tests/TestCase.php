<?php

namespace Tests;

use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    use RefreshDatabase;
    use CreatesApplication;

    protected Authenticatable $signable;

    public function setUp(): void
    {
        parent::setUp();
    }

    public function sign(Authenticatable $user = null): BaseTestCase
    {
        /** @var Authenticatable $user */
        $user = $user ?? create(User::class);
        $this->signable = $user;

        return $this->actingAs($this->signable);
    }
}
