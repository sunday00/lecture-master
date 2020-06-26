<div>
    <svelte:component this={now.t} />

    <!-- 
    ===
        {#if now.t === "Cild1"}
            <Child1></Child1>
        {:else}
            <Child2></Child2>
        {/if}
     -->
</div>

<script>
    import Child1 from './Child1';
    import Child2 from './Child2';

    const childs = [
        {t: Child1},
        {t: Child2},
    ];

    let now = childs[0];

</script>