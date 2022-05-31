<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Threads
        </h2>
    </x-slot>

    <div class="p-8 py-12 grid grid-cols-3 gap-4">
        <div class="col-span-2">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="mt-8 text-2xl">
                        <h4 class="text-2xl">{{ $thread->title }}</h4>
                    </div>
                </div>
                <div class="p-6 bg-gray-200 bg-opacity-25 mb-2">
                    <x-threads.article :thread="$thread"></x-threads.article>
                </div>

                @foreach($replies as $reply)
                <hr />

                <div class="p-6 pl-12 bg-gray-200 bg-opacity-25 mb-2" id="{{ $reply->id }}">
                    <x-threads.article :thread="$reply">
                        <x-slot name="favorite">
                            <form action="{{ route('reply.favorite', [$reply]) }}" method="POST">
                                @csrf
                                <span class="text-red-500 mr-4">{{$reply->favorites->count()}}</span>
                                <button type="submit" class="text-red-400 border border-red-400 rounded rounded-full w-8 h-8">{{ $reply->isFavorited ? '♥' : '♡'}}</button>
                            </form>
                        </x-slot>
                    </x-threads.article>
                </div>
                @endforeach

                <div class="p-5">
                    {{ $replies->links() }}
                </div>

                @if( auth()->check() )
                <div>
                    <form action="{{ $thread->path('replies') }}" method="POST">
                        @csrf
                        <div class="form-group mt-4">
                            <label for="body">Reply</label>
                            <textarea class="form-control" rows="4" name="body" id="body" placeholder="Join this Thread"></textarea>
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
        <div class="col-span-1">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="p-6 mb-2">
                    <p>{{ $thread->created_at->diffForHumans() }}</p>
                    <a href="#">{{ $thread->user->name }}</a>
                    <p>[{{ $thread->replies_count }}] {{ \Illuminate\Support\Str::plural('comment', $thread->replies_count) }}</p>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
