<h4 class="header font-bold">
    <a href="#">{{ $thread->user->name }}</a> created {{ $thread->created_at->diffForHumans() }}
</h4>
<hr />
<div class="">{!! $thread->body !!}</div>
