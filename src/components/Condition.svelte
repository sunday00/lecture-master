<div>
    <button on:click="{colorChg}">chg bg</button>
    {#if bg.color === 'red'}
    <style>body { background-color: tomato; }</style>
    {:else if bg.color === 'blue'}
    <style>body { background-color: cornflowerblue; }</style>
    {:else}
    <style>body { background-color: gold; }</style>
    {/if}
</div>

<script>
    export let bg;

    function colorChg(){
        switch(bg.color){
            case 'red':
                bg.color = 'blue';
            break;
            case 'blue':
                bg.color = 'gold';
            break;
            default:
                bg.color = 'red';
            break;
        }
        bg = bg;
    }
</script>