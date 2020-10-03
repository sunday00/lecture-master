<div xmlns:wire="http://www.w3.org/1999/xhtml">
<div wire:init="loadMostAnticipatedGames" class="most-anticipated-container space-y-10 mt-8">
    @forelse($mostAnticipatedGames as $game)
        <x-game-card-small :game="$game"></x-game-card-small>
    @empty
        <div class="spinner mt-4"></div>
    @endforelse
</div>
</div>
