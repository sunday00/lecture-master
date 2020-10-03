<div xmlns:wire="http://www.w3.org/1999/xhtml">
<div wire:init="loadPopularGames" class="popular-games text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 border-b border-gray-800 pb-16">
    @forelse($popularGames as $game)
        <x-game-card :game="$game"></x-game-card>
    @empty
        <div class="spinner mt-4"></div>
    @endforelse
</div>{{-- popular games --}}
</div>
