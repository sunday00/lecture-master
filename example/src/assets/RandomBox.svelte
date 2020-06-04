<div>
    <input bind:this={input} {value} />
</div>

<script context="module">
    let inputEls = new Set();

    export function random() {
        inputEls.forEach(el => {
            el.value = Math.random();
        });
    }
</script>

<script>
    import { onMount } from 'svelte';

    let input;
    let value = Math.random();

    onMount(() => {
        inputEls.add(input);
        return () => inputEls.delete(input);
    });
</script>