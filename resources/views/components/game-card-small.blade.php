<div class="game flex justify-center lg:justify-start">
    <a href="{{route('games.show', $game->slug)}}" class="flex-none">
        <img src="{{ $game->cover->url }}" alt="cover"
             class="w-16 opacity-75 hover:opacity-100 transition easy-in-out duration-150">
    </a>
    <div class="ml-4">
        <a href="{{route('games.show', $game->slug)}}" class="hover:text-gray-300">{{$game->name}}</a>
        <p class="text-gray-400 text-sm mt-1">{{$game->first_release_date}}</p>
    </div>
</div>
