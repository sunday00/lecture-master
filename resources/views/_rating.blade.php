@if($event)
    <script>
        Livewire.on( "{{$event}}" , params => {
            makeProgressBar( params.container, params.rating );
        })
    </script>
@else
    <script>
        makeProgressBar( "{{ $container }}", {{ $rating }} );
    </script>
@endif

