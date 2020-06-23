<div class="top">
    <progress value={$progress}></progress>
    <button on:click="{() => progress.set(0.5)}">
        50%
    </button>
    <button on:click="{() => progress.set(0)}">
        0%
    </button>
</div>

<script>
import { writable } from 'svelte/store';
import { tweened, spring  } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';

// const progress = writable(0);
// const progress = tweened(0, {
//     duration: 1000,
//     easing: cubicOut,
//     interpolate: (from, to) => t => {
        
//     }
// });
const progress = spring(0, {
    stiffness: 0.1,
    damping: 0.25
});

</script>


<style>
    .top{
        border-bottom: 4px double orangered;
    }
	progress {
		display: block;
		width: 100%;
	}
</style>
