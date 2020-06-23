<div class="top photos">
    {#each photos as photo}
        <figure>
            <img src="{photo.thumbnailUrl}" alt="{photo.title}">
        </figure>
    {/each}
</div>

<div class="top" bind:this={div}>
    {#each comments as comment}
        <p style="color:{comment.color}">{comment.author} : {comment.text}</p>
    {/each}
</div>

<script>
    import { onMount, beforeUpdate, afterUpdate } from 'svelte';
    import Eliza from 'elizabot';
    import Jack from 'random-sentence';

    let div;
    let photos = [];
    let autoscroll;

    onMount(
    async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=8`);
        photos = await res.json();
    });

    beforeUpdate(() => {
        autoscroll = div && (div.offsetHeight + div.scrollTop) > (div.scrollHeight - 20);
    });

    afterUpdate(() => {
        if (autoscroll) window.scrollTo(0, div.scrollHeight);
    });

    const BOT = new Eliza();
        let comments = [
        {author: 'eliza', text: BOT.getInitial(), color:'cornflowerblue'}
    ];
    let repeat = setInterval(() => {
        if (comments.length > 20) clearInterval(repeat);
        comments = comments.concat({ author: 'jack', text: Jack({words: 4}), color:'tomato' });
        setTimeout(() => {
            comments = comments.concat({ author: 'eliza', text: BOT.transform('hi'), color:'cornflowerblue' });
        }, 1000);
    }, 2000);
    

</script>

<style lang="scss">
    .top {
        border-bottom: 4px double slategrey;
        padding: 20px;
    }

    .photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(8, 1fr);
        grid-gap: 8px;
        
        img {
            width: 100%;
        }
    }
</style>