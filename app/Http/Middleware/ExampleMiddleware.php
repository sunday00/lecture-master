<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class ExampleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $fruit1, $fruit2)
    {
        Log::info("Now You are passing through example middleware...{$fruit1}, {$fruit2}");
        return $next($request);
    }
}
