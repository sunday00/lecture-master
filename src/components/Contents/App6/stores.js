import { writable, readable, derived } from 'svelte/store';

export const data = writable({
    color: 'tomato'
});

export const data2 = readable({
    color: 'tomato'
});

export const data3 = derived(
    data,
    $data3 => $data3.color + ' mod'
)
// warning : derived is mutate other data. so, when original
// data change, derived data also affected.

function createData4 () {
    const { subscribe, set, update } = writable({color: 'tomato'});
    return {
        subscribe,
        chg : () => update( v => {
            v.color = "hotpink";
            return v;
        })
    }
}
export const data4 = createData4();