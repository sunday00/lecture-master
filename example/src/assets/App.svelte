<div class="wrap">
	<div class="title">
		<h1>Hello {name}!</h1>
	</div>

	<div class="example">
		<input type="number" bind:value={num1} />
		<input type="number" bind:value={num2} />
		<p> {num1 + num2} </p>
	</div>

	<div class="example">
		<button on:click={ () => count++ }>{count}</button>
	</div>

	<div class="example">
		<button on:click={ () => $count2++ }>{ $count2 }</button>
	</div>

	<div class="example">
		<button on:click={random}> RANDOM </button>
		<RandomBox />
		<RandomBox />
		<RandomBox />
	</div>

</div>



<script lang="ts">
	export let name: string;
	export let num1: number;
	export let num2: number;

	export let count: number = 0;
	import { count2 } from './store';

	import RandomBox, {random} from './RandomBox.svelte';
</script>

<style lang="scss">
	h1 {
		color: purple;
	}
</style>



