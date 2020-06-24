<div>
    <div
        class="box"  
        class:blue  
        use:pannable 
        on:panstart={handlePanStart} 
        on:panmove={handlePanMove} 
        on:panend={handlePanEnd} 
        style="transform:translate({$coords.x}px, {$coords.y}px)">
    </div>
</div>

<script>
    import { spring } from 'svelte/motion';
    import { pannable } from './pannable.js';
    
    let blue = false;

    const coords = spring({ x: 0, y: 0 }, {
		// stiffness: 0.2,
		// damping: 0.4
    });
    
    function handlePanStart() {
        blue = true;
        coords.stiffness = coords.damping = 0.2;
    }
    
    function handlePanMove(event) {
		coords.update($coords => ({
			x: $coords.x + event.detail.dx,
			y: $coords.y + event.detail.dy
		}));
    }
    
    function handlePanEnd(event) {
        blue = false;
		coords.stiffness = 0.2;
		coords.damping = 0.4;
        coords.set({ x: 0, y: 0 });
	}

</script>

<style lang="scss">
.box {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		border-radius: 4px;
		background-color: #ff3e00;
		cursor: move;
    }
.box.blue{
    background-color: #515be7;
}
</style>
