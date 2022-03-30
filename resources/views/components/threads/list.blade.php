<div class="p-6 sm:px-20 bg-white border-b border-gray-200">
    <div>
        <x-jet-application-logo class="block h-12 w-auto" />
    </div>

    <div class="mt-8 text-2xl">
        Forum for ready, start with jet-stream
    </div>

    <div class="mt-6 text-gray-500">
        <ul>
            <li>⚠️ Do not blame other over limit.</li>
            <li>⚠️ Do not write super extremely private information.</li>
        </ul>
    </div>
</div>

<div class="bg-gray-200 bg-opacity-25">
    @foreach($threads as $thread)
        <article class="p-6">
            <h4 class="text-2xl">
                <a href="{{ $thread->path() }}">{{ $thread->title }}</a>
            </h4>
            <div class="body mt-1">
                {!! $thread->body !!}
            </div>
        </article>

        <hr />
    @endforeach
</div>
