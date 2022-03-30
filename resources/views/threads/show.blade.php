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
                    <h4 class="header font-bold">
                        <a href="#">{{ $thread->user->name }}</a> created {{ $thread->created_at->diffForHumans() }}
                    </h4>
                    <hr />
                    <div class="">{!! $thread->body !!}</div>
                </div>

                @foreach($thread->replies as $reply)
                <hr />

                <div class="p-6 pl-12 bg-gray-200 bg-opacity-25 mb-2">
                    <h4 class="header font-bold">
                        <a href="#">{{ $reply->user->name }}</a> created {{ $reply->created_at->diffForHumans() }}
                    </h4>
                    <hr />
                    <div class="">{!! $reply->body !!}</div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</x-app-layout>
