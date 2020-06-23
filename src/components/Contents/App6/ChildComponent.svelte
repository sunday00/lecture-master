<button class="button text-green-400 bg-pink-900 p-2 border rounded-full" on:click="{chgColor}">
    chg to blue
</button>
<button class="button text-green-400 bg-pink-900 p-2 border rounded-full" on:click="{chgColor2}">
    chg to blue(from radable so not work)
</button>
<button class="button text-green-400 bg-pink-900 p-2 border rounded-full" on:click="{setColor}">
    reset
</button>

<button class="button text-green-400 bg-pink-900 p-2 border rounded-full" on:click="{setColor4}">
    PINK!
</button>

<script>
    import {data, data2, data4} from './stores.js';

    function chgColor () {
        console.log( data );
        data.update((v) =>{
            v.color = 'blue';
            return v;
            
        });
    }

    function setColor () {
        data.set({
            color: 'gold'
        })
    }

    function chgColor2 () {
        console.log( data2 );
        // data2.update((v) =>{
        //     v.color = 'blue';
        //     return v;
        // });
        // readable doesn't have set, update.
        //readonly
    }
    
    function setColor4 () {
        data4.chg();
    }

</script>
