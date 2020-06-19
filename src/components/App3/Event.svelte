<div>
    <button on:click|once="{one}">Work only 1</button>
    
    <a href="http://grayfield.net" on:click|preventDefault="{one}">go</a>
    
    <a href="http://grayfield.net" on:click|preventDefault|once="{one}">go</a>
    <!-- warnning : preventDefault|once prevent also once. so, click more then once, the event is work, not prevent. -->
    <!-- <a href="http://grayfield.net" on:click|once|preventDefault="{one}">go</a> -->

    <hr>
    
    <div class="mother" on:click={bubbling}>
        <div class="son" on:click={bubbling}>
            <article on:click={bubbling}>
                <ul on:click={bubbling}>
                    <li on:click={bubbling}>
                        <p on:click={bubbling}>
                            <span on:click={bubbling}>click?</span>
                        </p>
                    </li>
                </ul>
            </article>
        </div>
    </div>

    <div class="mother" on:click|capture={bubbling}>
        <div class="son" on:click|capture={bubbling}>
            <article on:click|capture={bubbling}>
                <ul on:click|capture={bubbling}>
                    <li on:click|capture={bubbling}>
                        <p on:click|capture={bubbling}>
                            <span on:click|capture={bubbling}>click?</span>
                        </p>
                    </li>
                </ul>
            </article>
        </div>
    </div>

    <div class="mother" on:click|stopPropagation={bubbling}>
        <div class="son" on:click|stopPropagation={bubbling}>
            <article on:click|stopPropagation={bubbling}>
                <ul on:click|stopPropagation={bubbling}>
                    <li on:click|stopPropagation={bubbling}>
                        <p on:click|stopPropagation={bubbling}>
                            <span on:click|stopPropagation={bubbling}>click?</span>
                        </p>
                    </li>
                </ul>
            </article>
        </div>
    </div>

</div>

<script>
    function one ()
    {
        console.log(1);
    }

    function bubbling(e)
    {
        let phase;
        switch (e.eventPhase) {
            case 1: phase = 'capture'; break;
            case 2: phase = 'target'; break;
            case 3: phase = 'bubbling'; break;
        }
        console.log(e.currentTarget, phase);
    }
    // event delegation :
        /*
        there are some elements.
        add an event to elements.
        now, add an element.
            the new element doesn't have event.
            because the event attache process is aleady done.
        
        so if you want to attach the event, addEventListener each time. swallow memory to accont this process also, spend time.

        To solve this issue, just add your event to common parent element. And use capturing!
        */

</script>