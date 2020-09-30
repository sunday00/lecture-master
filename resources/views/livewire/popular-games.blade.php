<div xmlns:wire="http://www.w3.org/1999/xhtml">
<div wire:init="loadPopularGames" class="popular-games text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 border-b border-gray-800 pb-16">
    @forelse($popularGames as $game)
        <div class="game t-8 text-center md:text-justify">
            <div class="relative inline-block">
                <a href="#">
                    <img src="{{ $game->cover->url }}" alt="cover"
                         class="inline-block opacity-75 hover:opacity-100 transition easy-in-out duration-150">
                </a>
                <div class="round-score absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-800">
                    <div class="font-semibold text-xs flex justify-center items-center h-full">
                        {{ round($game->rating) }}%
                    </div>
                </div>
            </div>
            <a href="#" class="block text-base font-semibold leading-tight hover:text-gray-400 mt-8 text-left">
                {{ $game->name }}
            </a>
            <p class="text-gray-400 mt-1">
                {{ $game->stringPlatforms }}
            </p>
        </div>
    @empty
        <div class="spinner mt-4"></div>
    @endforelse
</div>{{-- popular games --}}
</div>
