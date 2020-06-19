<div>
{#await articles then articles}
    {#each articles as article (article.id)}
        <p>{article.title}</p>
    {/each}
{/await}
</div>

<hr>

<div>
    <article class="on" on:mousemove={onMouseMove}></article>
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

    // 

    function onMouseMove (e) {
        let r = e.offsetX;
        let g = e.offsetY;
        let b = (e.offsetX + e.offsetY) / 2;

        // console.log(r, g, b);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

</script>

<style lang="scss">
    $primary : skyblue;

    .on {
        background-color: $primary;
        width: 255px;
        height: 255px;
    }
</style>