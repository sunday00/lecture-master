<h1 class="text-blue-500">Data bind 1</h1>

<div>
    <input bind:value="{greet}">
    <p>{greet}</p>
</div>

<div>
    <input type="checkbox" bind:checked={chk}> lock
    <input type="number" bind:value={a} disabled={chk} />
    <input type="range" bind:value={b} min="1" max="5" disabled={chk} />
    <p>{ a + b }</p>
</div>

<div>
    <textarea bind:value={txtV} class="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"></textarea>
    <p>{@html marked(txtV)}</p>
</div>

<div>
    <select bind:value={selected} on:change="{ (e) => { console.log(selected) } }">
        {#each fruits as fruit}
            <option value="{fruit.name}">{fruit.name}</option>    
        {/each}
    </select>
</div>

<div contenteditable="true" bind:innerHTML={con}></div>
<p>{con}</p>

<div>
    <video on:click={togglePlay} bind:duration bind:currentTime>
        <source src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4" type="video/mp4" />
    </video>
    <div class="controls">
        <progress value="{(currentTime / duration) || 0}" />
        <progress id="vanila" />
    </div>
</div>

<script>
    import marked from 'marked';
    // let greet;
    let greet = 'default';

    let a = 1;
    let b = 1;

    let chk = false;

    let txtV='?';

    let fruits = [{name:'apple', price:10}, {name:'banana', price: 20}];

    let selected='apple';

    let con;

    function togglePlay(e){
        if (e.target.paused) e.target.play();
        else e.target.pause();
    }

    let duration;
    let currentTime;

    // function checkProgress(){
    //     return document.querySelector('video').currentTime / document.querySelector('video').duration
    // }

    // let isEnd = setInterval(function(){
    //     if( checkProgress() != 1 ){
    //         document.querySelector('#vanila').value = checkProgress();
    //     } else {
    //         clearInterval('isEnd');
    //     }
    // }, 10);

</script>
