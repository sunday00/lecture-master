<div class="search relative text-sm" xmlns:wire="http://www.w3.org/1999/xhtml"
     x-data="{ isVisible: true }" @click.away="isVisible=false">
    <label for="search" class="fas fa-search mr-1" aria-label="input text for search games"></label>
    <input
        wire:model.debounce.50ms="search"
        @focus="isVisible=true"
        @keydown.escape.window="isVisible=false"
        @keydown="isVisible=true"
        @keydown.shift.tab="isVisible=false"
        @keydown.window="window.focusSearch(event)"
        id="search" type="text" class="w-64 bg-gray-800 text-sm rounded-full px-3 py-1 focus:outline-none focus:shadow-outline"
        placeholder="search...">

    <div wire:loading class="spinner-sm top-0 right-0 mr-4 mt-4" style="position: absolute"></div>

    <div class="absolute z-50 bg-gray-800 text-xs rounded w-64 mt-2 ml-6" x-show.transition.opacity.duration.200="isVisible">
        <ul class="">
            @if( count($result) )
                @foreach($result as $game)
                    <li class="border-b border-gray-700">
                        <a class="block hover:bg-gray-600 px-3 py-3
                            flex items-center transition ease-in-out duration-150"
                           tabindex="0"
                           @if($loop->last) @keydown.tab="isVisible=false" @endif
                           href="{{route('games.show', $game->slug)}}" title="show {{$game->name}}">
                            <img src="{{$game->coverImage}}" alt="cover {{$game->name}}" class="mr-2 w-10 flex-none">
                            <span>{{$game->name}}</span>
                        </a>
                    </li>
                @endforeach
            @elseif($search === '')
            @else
                <li class="border-b border-gray-700">
                    <span class="block hover:bg-gray-600 px-3 py-3 flex items-center transition ease-in-out duration-150">
                        No games founded : {{ $search }}
                    </span>
                </li>
            @endif

        </ul>
    </div>
</div>
