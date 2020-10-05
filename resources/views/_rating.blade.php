@if($event)
    <script>
        Livewire.on( "{{$event}}" , params => {
            makeProgressBar( ".round-score-" + params.slug, params.rating );
        })
    </script>
@else
    <script>
        makeProgressBar( "{{ $container }}", {{ $rating }} );
    </script>
@endif

