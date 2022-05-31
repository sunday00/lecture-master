<div class="flex threads-header items-center justify-between">
    <h4 class="header font-bold">
        <a href="#">{{ $thread->user->name }}</a> created {{ $thread->created_at->diffForHumans() }}
    </h4>
    {{ $favorite ?? '' }}
</div>
<hr />
<div class="">{!! $thread->body !!}</div>
