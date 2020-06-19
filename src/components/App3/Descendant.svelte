<div>
    <button on:click={fireToAncestor}>hello to grandfather</button>
</div>

<script>
    import { createEventDispatcher } from 'svelte';
    const dispatcher = createEventDispatcher();

    function fireToAncestor () {
        dispatcher('eventFromDescendant', {
            msgFromDescendant : "hello grand fa?"
        });
    }
</script>