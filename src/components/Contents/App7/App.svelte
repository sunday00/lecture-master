<div class="top">
    <progress value={$progress}></progress>
    <button on:click="{() => progress.set(0.5)}">
        50%
    </button>
    <button on:click="{() => progress.set(0)}">
        0%
    </button>
</div>

<div class="top">
    <label>
        <input type="checkbox" bind:checked={visible}>
        1
    </label>

    {#if visible}
        <p transition:fade>
            Fades in and out
        </p>
    {/if}

    <label>
        <input type="checkbox" bind:checked={visible2}>
        2
    </label>

    {#if visible2}
        <p transition:fly="{{y:200, duration:200}}">
            droped down and poped up
        </p>
    {/if}

    <label>
        <input type="checkbox" bind:checked={visible3}>
        3
    </label>

    {#if visible3}
        <p in:fly="{{y:200, duration:200}}" out:fade>
            fade out and poped up
        </p>
    {/if}
</div>

<div class="top">
    <label>
        <input type="checkbox" bind:checked={visible4}>
        1
    </label>

    {#if visible4}
        <p in:fade2 out:spin style="width:100px">
            Fades in and out
        </p>
    {/if}

    <label>
        <input type="checkbox" bind:checked={visible5}>
        1
    </label>

    {#if visible5}
        <p transition:typewriter 
            on:introstart="{() => { console.log('%cstart', 'color:hotpink') }}"
            on:introend="{() => { console.log('%cend', 'color:gold') }}"
            on:outrostart="{() => { console.log('%cstart', 'color:forestgreen') }}"
            on:outroend="{() => { console.log('%cend', 'color:orange') }}"
            >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptate iure quidem nisi cumque dolores omnis sed nemo dolorum similique, facilis veritatis veniam nobis, repellendus nulla maxime perspiciatis deserunt! Quas!
        </p>
    {/if}
</div>

<div class="top">
    <input type="checkbox" bind:checked="{visible6}">
    <input type="checkbox" bind:checked="{visible7}">
    <input type="range" bind:value={i} max={items.length}>

    {#if visible6}
        {#each items.slice(0, i) as item}
            <p transition:slide>{item}</p>
        {/each}    
    {/if}

    {#if visible7}
        {#each items.slice(0, i) as item}
            <p transition:slide|local>{item}</p>
        {/each}    
    {/if}
</div>

<div class="board">
    <div>
        <h2 class="text-blue-400 text-2xl">todo</h2>
        {#each todos.filter(itm => !itm.done) as item (item.title)}
            <p on:click="{() => {item.done = true}}" 
             in:receive="{{key:item.title}}" 
             out:send="{{key:item.title}}" 
             animate:flip="{{duration:20000}}"
            >{item.title}</p>
        {/each}
    </div>
    <div>
        <h2 class="text-blue-400 text-2xl">done</h2>
        {#each todos.filter(itm => itm.done) as item (item.title)}
            <p on:click="{() => {item.done = false}}"
             in:receive="{{key:item.title}}"
             out:send="{{key:item.title}}"
             animate:flip="{{duration:20000}}"
             >{item.title}</p>
        {/each}
    </div>
</div>

<script>
import { writable } from 'svelte/store';
import { tweened, spring  } from 'svelte/motion';
import { cubicOut, elasticOut, quintOut } from 'svelte/easing';
import { fade, fly, slide, crossfade } from 'svelte/transition';
import { flip } from 'svelte/animate';
{
    // const progress = writable(0);
    // const progress = tweened(0, {
    //     duration: 1000,
    //     easing: cubicOut,
    //     interpolate: (from, to) => t => {
            
    //     }
    // });
}

const progress = spring(0, {
    stiffness: 0.1,
    damping: 0.25
});

let visible = true;
let visible2 = true;
let visible3 = true;

let visible4 = true;
let visible5 = true;

let visible6 = true;
let visible7 = true;

function fade2 (node, {delay=0, duration=400}) {
    const o = +getComputedStyle(node).opacity;

    return {
		delay,
		duration,
		css: (t) => {
            return `opacity: ${t * o}`
        }
	};
}

function spin (node, {duration = 4000}) {
    return {
        duration,
        css: t => {
            const eased = elasticOut(t);
            return `
                transform: scale(${eased}) rotate(${eased * 1080}deg);
                color: hsl(
                    ${~~(t * 360)},
                    ${Math.min(100, 1000 - 1000 * t)}%,
                    ${Math.min(50, 500 - 500 * t)}%
                );`
        }
    }
}

function typewriter (node, {speed = 10}) {
    const text = node.textContent
    const duration = text.length * speed;

    return {
        duration,
        tick: t => {
            node.textContent = text.slice(0, ~~( text.length*t ))
        }
    }
}

let items = ['apple','banana','cherry','durian','egg'];
let items2 = ['foo','bar','baz','qux','quux'];

let i = 1;

let todos = [
    {title:'go shopping',done:false},
    {title:'go fishing',done:false},
    {title:'go studying',done:false},
];

const [send, receive] = crossfade({
    duration: (d) => {
        return Math.sqrt(d * 2000)
    },
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
