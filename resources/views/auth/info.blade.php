@extends('base')

@section('main')
    <div class="p-8">
        <h1 class="mb-4">role: {{$user->role}}</h1>

        <textarea cols="50" rows="10" class="p-4">
{!! $user->toJson(JSON_PRETTY_PRINT) !!}
        </textarea>
    </div>
@endsection
