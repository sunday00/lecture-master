<div class="top">
    <textarea class="bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight"
        value={text} on:keydown|preventDefault={handleKeydown}
    ></textarea>
</div>

<script>
    import { tick } from 'svelte';

    let text = 'Select some text and hit the tab key to toggle uppercase';
    async function handleKeydown (event) {
        if (event.key !== 'Tab') return;
        const { selectionStart, selectionEnd, value } = this;
        console.table(selectionStart, selectionEnd, value);

        const selection = value.slice(selectionStart, selectionEnd);
        console.log(selection);

        const replacement = /[a-z]/.test(selection)
			? selection.toUpperCase()
            : selection.toLowerCase();
            
        text = (
			value.slice(0, selectionStart) +
			replacement +
			value.slice(selectionEnd)
        );
        
        await tick();
        this.selectionStart = selectionEnd;
        this.selectionEnd = selectionEnd;
    }

    // tick()
        // use inside async await function
        // works as syncronous, now wait more tiny next task,
        // runs stacked every qued work until que is empty, 
        // and then run next task;


</script>