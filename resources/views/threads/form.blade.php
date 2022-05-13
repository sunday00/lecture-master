<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            Threads Create
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <form action="{{ $method === 'PATCH' ? route('threads.update') : route('threads.store') }}" method="{{ $method }}" novalidate>
                    @csrf
                    @method($method)

                    <div class="form-group mt-4 w-1/4">
                        <select name="channel_id" id="channel_id" class="@error('channel_id') error @enderror">
                            <option>--channel--</option>
                            @foreach($channels as $ch)
                                <option value="{{ $ch->id }}">{{ $ch->name }}</option>
                            @endforeach
                        </select>
                        @error('channel_id')
                            <small class="text-red-400">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="form-group">
                        <input name="title" id="title" class="form-control w-full @error('title') error @enderror"
                            placeholder="title" value="{{ $method === 'PATCH' ? $thread->title : old('title') }}" required />
                        @error('title')
                            <small class="text-red-400">{{ $message }}</small>
                        @enderror
                    </div>
                    <div class="form-group">
                        <textarea name="body" id="body" class="form-control w-full"
                            placeholder="contents" rows="5">{!! $method === 'PATCH' ? $thread->body : old('body') !!}</textarea>
                    </div>
                    <div class="form-group flex justify-end mb-4">
                        <button class="btn-outline-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
