<?php

namespace App\Http\Controllers;

use App\Filters\ThreadFilter;
use App\Models\Channel;
use App\Models\Thread;
use App\Models\User;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class ThreadController extends Controller
{

    public function __construct(){
        $this->middleware(['auth:sanctum'])->except(['index', 'show']);
    }

    public function index(Channel $channel, ThreadFilter $filter): View|Collection
    {
        $threads = $this->getThreads($filter, $channel);

        if(request()->wantsJson()) return $threads;

        return view('threads.index', compact('threads'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\View\View
     */
    public function create(): View
    {
        return view('threads.form', [
            'method' => 'POST',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $params = $request->validate([
            'title'         => 'required',
            'body'          => 'nullable',
            'channel_id'    => 'required|exists:channels,id',
        ]);

        $thread = Thread::create([
            'user_id' => auth()->id(),
            'channel_id' => request('channel_id'),
            'title' => request('title'),
            'body' => request('body'),
        ]);

        return redirect($thread->path());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\View\View
     */
    public function show(string $channel_slug, Thread $thread): \Illuminate\View\View
//    public function show(string $channel_slug, Thread $thread)
    {
//        return $thread;

        return view('threads.show', [
            'thread' => $thread,
            'replies' => $thread->replies()->paginate(25),
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function edit(Thread $thread)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Thread $thread)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Thread  $thread
     * @return \Illuminate\Http\Response
     */
    public function destroy(Thread $thread)
    {
        //
    }

    /**
     * @param ThreadFilter $filter
     * @param Channel $channel
     * @return mixed
     */
    public function getThreads(ThreadFilter $filter, Channel $channel)
    {
        $threads = Thread::latest()->filter($filter);

        if ($channel->exists) $threads->where('channel_id', $channel->id);

        $threads = $threads->get();
        return $threads;
    }
}
