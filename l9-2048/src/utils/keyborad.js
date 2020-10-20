import hotkey from 'hotkeys-js'

const observeMap = {}

export function addKeyObserver(key, callback)
{
    if(!observeMap[key]){
        observeMap[key] = [];
        hotkey(key, (e) => executeCallbacks(e, key));
    }
    observeMap[key].push(callback);
}

export function removeKeyObserver(key, callback)
{
    observeMap[key] = observeMap[key].filter(item => item !== callback);
}

function executeCallbacks(e, key)
{
    e.preventDefault();
    for( let ob of observeMap[key] ){
        ob();
    }
}