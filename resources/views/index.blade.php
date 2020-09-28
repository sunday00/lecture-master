@extends('layouts.app')

@section('content')
    <!--suppress SpellCheckingInspection -->
    <div class="container mx-auto px-4">
        <section class="popular-games-wrap">
            <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center md:text-justify">popular games</h2>
            <div class="popular-games text-sm grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-12 border-b border-gray-800 pb-16">
                @foreach(range(1, 12) as $i)
                <div class="game t-8 text-center md:text-justify">
                    <div class="relative inline-block">
                        <a href="#">
                            <img src="https://via.placeholder.com/264x352" alt="cover"
                                 class="inline-block hover:opacity-75 transition easy-in-out duration-150">
                        </a>
                        <div class="round-score absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-800">
                            <div class="font-semibold text-xs flex justify-center items-center h-full">
                                80%
                            </div>
                        </div>
                    </div>
                    <a href="#" class="block text-base font-semibold leading-tight hover:text-gray-400 mt-8">
                        game name
                    </a>
                    <p class="text-gray-400 mt-1">Console name</p>
                </div>
                @endforeach
            </div>{{-- popular games --}}
        </section>

        <section class="recently-reviewed-wrap">
            <div class="flex flex-col lg:flex-row my-8">
                <div class="recently-reviewed w-full lg:w-3/4  mr-0 lg:mr-32">
                    <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8">recently reviewed</h2>
                    <div class="recently-reviewed-container space-y-12 mt-8">
                        @foreach(range(1,3) as $i)
                            <div class="game bg-gray-700 rounded-lg shadow-md flex p-6">
                                <div class="relative flex-none">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/264x352" alt="cover"
                                             class="w-48 hover:opacity-75 transition easy-in-out duration-150">
                                    </a>
                                    <div class="round-score absolute bottom-0 right-0 w-16 h-16 rounded-full bg-gray-900">
                                        <div class="font-semibold text-xs flex justify-center items-center h-full">
                                            80%
                                        </div>
                                    </div>
                                </div>
                                <div class="ml-12">
                                    <a href="#" class="block text-lg font-semibold leading-tight hover:text-gray-400 mt-4">
                                        game name
                                    </a>
                                    <p class="text-gray-400 mt-1">Console name</p>
                                    <p class="mt-6 text-gray-400 hidden md:block">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolores minus nam vero. Ab consequuntur deserunt, dolorem dolorum inventore magni maiores nesciunt nisi optio pariatur quas qui, rerum, similique ut?
                                    </p>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>{{-- recently reviewd --}}

                <div class="most-anticipated coming-soon w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col mt-8 md:mt-0">
                    <div class="w-full md:w-1/2 lg:w-full">
                        <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center lg:text-justify">most anticipated</h2>
                        <div class="most-anticipated-container space-y-10 mt-8">
                            @foreach(range(1,4) as $i)
                            <div class="game flex justify-center lg:justify-start">
                                <a href="#">
                                    <img src="https://via.placeholder.com/264x352" alt="cover"
                                         class="w-16 hover:opacity-75 transition easy-in-out duration-150">
                                </a>
                                <div class="ml-4">
                                    <a href="#" class="hover:text-gray-300">game name</a>
                                    <p class="text-gray-400 text-sm mt-1">2020.Sep.16</p>
                                </div>
                            </div>
                            @endforeach
                        </div>
                    </div>{{-- most anticipated --}}

                    <div class="w-full md:w-1/2 lg:w-full">
                        <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center lg:text-justify">coming soon</h2>
                        <div class="coming-soon-container space-y-10 mt-8">
                            @foreach(range(1,4) as $i)
                                <div class="game flex justify-center lg:justify-start">
                                    <a href="#">
                                        <img src="https://via.placeholder.com/264x352" alt="cover"
                                             class="w-16 hover:opacity-75 transition easy-in-out duration-150">
                                    </a>
                                    <div class="ml-4 ">
                                        <a href="#" class="hover:text-gray-300">game name</a>
                                        <p class="text-gray-400 text-sm mt-1">2020.Sep.16</p>
                                    </div>
                                </div>
                            @endforeach
                        </div>
                    </div>{{-- coming soon --}}
                </div>
            </div>
        </section>
    </div>{{-- container --}}


@endsection
