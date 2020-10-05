<div xmlns:wire="http://www.w3.org/1999/xhtml">
<div wire:init="loadRecentlyReviewedGames" class="recently-reviewed-container space-y-12 mt-8">
    @forelse($recentlyReviewedGames as $game)
        <div class="game bg-gray-700 rounded-lg shadow-md flex p-6">
            <div class="relative flex-none">
                <a href="#">
                    <img src="{{ $game->cover->url }}" alt="cover"
                         class="w-48 opacity-75 hover:opacity-100 transition easy-in-out duration-150">
                </a>
                <div class="round-score round-score-{{$game->slug}} absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-900">

                </div>
            </div>
            <div class="ml-12">
                <a href="#" class="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                    {{$game->name}}
                </a>
                <p class="text-gray-400 mt-1">
                    {{ implode(', ', Arr::pluck($game->platforms, 'abbreviation')) }}
                </p>
                <p class="mt-6 text-gray-400 hidden md:block">
                    {{$game->summary}}
                </p>
            </div>
        </div>
    @empty
        <div class="spinner mt-4"></div>
    @endforelse
</div>
</div>

@push('script')
    @include('_rating', [
        'event'     => 'recentlyReviewedGameRatingAdded'
    ])
@endpush

