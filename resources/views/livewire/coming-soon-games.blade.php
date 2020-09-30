<div xmlns:wire="http://www.w3.org/1999/xhtml">
<div wire:init="loadComingSoonGames" class="coming-soon-container space-y-10 mt-8">
    @forelse($comingSoonGames as $game)
        <div class="game flex justify-center lg:justify-start">
            <a href="#">
                <img src="{{$game->cover->url}}" alt="cover"
                     class="w-16 opacity-75 hover:opacity-100 transition easy-in-out duration-150">
            </a>
            <div class="ml-4 ">
                <a href="#" class="hover:text-gray-300">{{$game->name}}</a>
                <p class="text-gray-400 text-sm mt-1">{{$game->first_release_date}}</p>
            </div>
        </div>
    @empty
        <div class="spinner mt-4"></div>
    @endforelse
</div>
</div>

