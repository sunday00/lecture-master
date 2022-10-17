@extends('base')

@section('main')
    <form action="{{route('attempt')}}" method="POST">
        @method('POST')
        @csrf()
        <input type="text" name="role" />
        <input type="submit" value="login">
    </form>
@endsection
