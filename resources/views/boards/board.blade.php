@extends('base')

@section('main')
    <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
            <!-- head -->
            <thead>
            <tr>
                <th></th>
                <th>title</th>
                <th>comments</th>
                <th>username</th>
            </tr>
            </thead>
            <tbody>

            @foreach($boards as $i => $board)

            <tr>
                <th>{{ ((request('page', 1) - 1) * 10) + $i + 1}}</th>
                <td>{{ $board->title }}</td>

                {{-- INFO:this is lazy load  --}}
                <td>{{ $board->comments->count() }}</td>

                {{-- INFO:this is lazy load  --}}
                <td>{{ $board->user->name }}</td>
            </tr>

            @endforeach

            </tbody>
        </table>
    </div>

    <div class="btn-group mt-8 mx-auto block w-[50%]">
        {{$boards->links()}}
    </div>
@endsection
