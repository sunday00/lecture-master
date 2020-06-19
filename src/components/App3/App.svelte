<div>
    <Async></Async>
    <hr />
    <EE on:parentEventTrigger={handlerSendedFromChild} 
        on:eventFromDescendant={handleSendedFromDescendant} 
        on:click={ e => console.log('dom event') }
    ></EE>
</div>

<script>
    import Async from './Async.svelte';
    import EE from './Event';
    
    function handlerSendedFromChild(e){
        console.log(e.detail.somethingKey);
    }

    function handleSendedFromDescendant(e){
        console.log(e.detail.msgFromDescendant);
    }
    
    
</script>