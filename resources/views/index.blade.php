@extends('layouts.app')

@section('content')
    <!--suppress SpellCheckingInspection -->
    <div class="container mx-auto px-4">
        <section class="popular-games-wrap">
            <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center md:text-justify">popular games</h2>
            @livewire('popular-games', ['igdbTokenService' => $igdbTokenService])
        </section>

        <section class="recently-reviewed-wrap">
            <div class="flex flex-col lg:flex-row my-8">
                <div class="recently-reviewed w-full lg:w-3/4  mr-0 lg:mr-32">
                    <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8">recently reviewed</h2>
                    @livewire('recently-reviewed-games', ['igdbTokenService' => $igdbTokenService])
                </div>{{-- recently reviewd --}}

                <div class="most-anticipated coming-soon w-full lg:w-1/4 flex flex-col md:flex-row lg:flex-col mt-8 md:mt-0">
                    <div class="w-full md:w-1/2 lg:w-full">
                        <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center lg:text-justify">most anticipated</h2>
                        @livewire('most-anticipated-games', ['igdbTokenService' => $igdbTokenService])
                    </div>{{-- most anticipated --}}

                    <div class="w-full md:w-1/2 lg:w-full">
                        <h2 class="text-blue-500 uppercase tracking-wide font-semibold my-8 text-center lg:text-justify">coming soon</h2>
                        @livewire('coming-soon-games', ['igdbTokenService' => $igdbTokenService] )
                    </div>{{-- coming soon --}}
                </div>
            </div>
        </section>
    </div>{{-- container --}}
@endsection
