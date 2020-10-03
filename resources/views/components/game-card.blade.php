<div class="game t-8 text-center md:text-justify">
    <div class="relative inline-block">
        <a href="{{route('games.show', $game->slug)}}">
            <img src="{{ $game->coverImage }}" alt="cover"
                 class="inline-block opacity-75 hover:opacity-100 transition easy-in-out duration-150">
        </a>
        @if($game->rating)
        <div class="round-score absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-800">
            <div class="font-semibold text-xs flex justify-center items-center h-full">
                {{ $game->rating }}
            </div>
        </div>
        @endif
    </div>
    <a href="{{route('games.show', $game->slug)}}" class="block text-base font-semibold leading-tight hover:text-gray-400 mt-8 text-left">
        {{ $game->name }}
    </a>
    <p class="text-gray-400 mt-1">
        {{ $game->stringPlatforms }}
    </p>
</div>
