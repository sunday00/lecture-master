<div>
{#await articles then articles}
    {#each articles as article (article.id)}
        <p>{article.title}</p>
    {/each}
{/await}
</div>

<hr>

<div>
    <article class="on"></article>
</div>


<script>
    async function getArticles(){
        const res = await fetch('https://my-json-server.typicode.com/sunday00/lecture-master/articles');
        const text = await res.text();

        if (res.ok) {
            return JSON.parse(text);
        } else {
            throw new Error(text);
        }
    }

    let articles = getArticles();

</script>

<style lang="scss">
    $primary : skyblue;

    .on {
        background-color: $primary;
        width: 300px;
        height: 300px;
    }
</style>