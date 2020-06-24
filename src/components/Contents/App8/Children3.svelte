<div>
    <p>{name}</p>
    {#each datas as item}
        {#if item.child != 'last'}
            <svelte:self name="{item.name}" datas="{item.child}"></svelte:self>
        {:else}
            <ChildChild>{item.name}</ChildChild>
        {/if}
    {/each}
</div>

<script>
    import ChildChild from './ChildChild';
    export let datas;
    export let name;
</script>