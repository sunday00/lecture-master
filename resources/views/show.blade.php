@extends('layouts.app')

@section('content')
    <section class="container mx-auto px-4">
        <div class="game-details border-b border-gray-800 pb-8 flex flex-col md:flex-row">
            <div class="flex-none">
                <img src="{{$game->cover->url}}" alt="cover"
                     class="w-full inline-block hover:opacity-75 transition easy-in-out duration-150">
            </div>
            <div class="ml-8">
                <h2 class="font-semibold text-4xl">{{$game->name}}</h2>
                <div class="text-gray-400">
                    <span>{{$game->stringGenres}}</span>
                    &middot;
                    <span>{{$game->company}}</span>
                    &middot;
                    <span>{{$game->stringPlatforms}}</span>
                </div>
                <div class="flex flex-col md:flex-row flex-wrap items-baseline md:items-center mt-8 space-x-0 md:space-x-4 space-y-8 md:space-y-0">
                    <div class="flex items-center">
                        <div class="w-12 lg:w-16 h-12 lg:h-16 bg-gray-800 rounded-full">
                            <div class="font-semibold text-xs flex justify-center items-center h-full">{{round($game->rating)}}%</div>
                        </div>
                        <div class="ml-4 text-xs">Member<br />Score</div>
                    </div>
                    <div class="flex items-center">
                        <div class="w-12 lg:w-16 h-12 lg:h-16 bg-gray-800 rounded-full">
                            <div class="font-semibold text-xs flex justify-center items-center h-full">{{round($game->aggregated_rating)}}%</div>
                        </div>
                        <div class="ml-4 text-xs">Critic<br />Score</div>
                    </div>
                    <ul class="flex items-center space-x-4">
                        <li class="flex justify-center items-center rounded-full w-8 h-8 bg-gray-800">
                            <a href="#" class="fas fa-globe-asia hover:text-gray-400"></a>
                        </li>
                        <li class="flex justify-center items-center rounded-full w-8 h-8 bg-gray-800">
                            <a href="#" class="fab fa-instagram hover:text-gray-400"></a>
                        </li>
                        <li class="flex justify-center items-center rounded-full w-8 h-8 bg-gray-800">
                            <a href="#" class="fab fa-twitter hover:text-gray-400"></a>
                        </li>
                        <li class="flex justify-center items-center rounded-full w-8 h-8 bg-gray-800">
                            <a href="#" class="fab fa-facebook hover:text-gray-400"></a>
                        </li>
                    </ul>
                </div>
                <p class="mt-8 mr-0 lg:mr-64">
                    {{ $game->summary }}
                </p>
                <div class="mt-8">
                    <button class="play_trailer flex bg-blue-500 text-white font-semibold px-3 py-3 hover:bg-blue-600 rounded transition ease-in-out duration-150 items-center">
                        <i class="fas fa-play-circle"></i> <span class="ml-1">Play Trailer</span>
                    </button>

                    <script>
                        document.querySelector('.play_trailer').addEventListener('click', (e) => {
                            e.preventDefault();
                            window.open('http://youtube.com/watch/{{$game->videos[0]->video_id}}', 'play_trailer', '');
                        });
                    </script>

                </div>
            </div>
        </div>
    </section>{{--  game-details  --}}

    <section class="container images-container mx-auto px-4">
        <div class="border-b border-gray-800 pb-8">
            <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center md:text-justify">Images</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-8 w-full ">
                @foreach($game->screenshots as $screenshot)
                <div>
                    <a href="{{$screenshot->huge}}">
                        <img src="{{$screenshot->big}}" alt="screen-shot"
                             class="w-full inline-block opacity-75 hover:opacity-100 transition easy-in-out duration-150">
                    </a>
                </div>
                @endforeach
            </div>
        </div>
    </section>{{--  images  --}}

    <section class="container similar-games-container mx-auto px-4">
        <div>
            <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center md:text-justify">Similar games</h2>
            <div class="similar-games text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 border-b border-gray-800 pb-16">
                @foreach($game->similar_games as $similar_game)
                    <div class="game t-8 text-center md:text-justify">
                        <div class="relative inline-block">
                            <a href="{{route('games.show', $similar_game->slug)}}">
                                <img src="{{$similar_game->cover->url}}" alt="cover"
                                     class="inline-block opacity-75 hover:opacity-100 transition easy-in-out duration-150">
                            </a>
                            @if( property_exists($similar_game, 'rating') )
                                <div class="round-score absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-800">
                                    <div class="font-semibold text-xs flex justify-center items-center h-full">
                                        {{round($similar_game->rating)}}%
                                    </div>
                                </div>
                            @endif
                        </div>
                        <a href="#" class="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                            {{$similar_game->name}}
                        </a>
                        <p class="text-gray-400 mt-1">{{$similar_game->stringPlatforms}}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>{{--  similar-games  --}}
@endsection


