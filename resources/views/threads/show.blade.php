<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Threads
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="mt-8 text-2xl">
                        <h4 class="text-2xl">{{ $thread->title }}</h4>
                    </div>

                    <div class="mt-6 text-gray-500">

                    </div>
                </div>
                <div class="p-6 bg-gray-200 bg-opacity-25 mb-2">
                    <x-threads.article :thread="$thread"></x-threads.article>
                </div>

                @foreach($thread->replies as $reply)
                <hr />

                <div class="p-6 pl-12 bg-gray-200 bg-opacity-25 mb-2" id="{{ $reply->id }}">
                    <x-threads.article :thread="$reply"></x-threads.article>
                </div>
                @endforeach

                @if( auth()->check() )
                <div>
                    <form action="{{ $thread->path('replies') }}" method="POST">
                        @csrf
                        <div class="form-group mt-4">
                            <textarea class="form-control" rows="4"
                                name="body" id="body" placeholder="Join this Thread"></textarea>
                        </div>

                        <div class="form-group flex justify-end mb-4">
                            <button class="btn-outline-primary">
                                Leave Reply
                            </button>
                        </div>
                    </form>
                </div>
                @else
                <div class="px-10 py-8">
                    <p>Please <a href="{{ route('login') }}" class="text-blue-500">sign in</a> now to join this thread.</p>
                </div>
                @endif
            </div>
        </div>
    </div>
</x-app-layout>
