import App4 from './components/Contents/App4/App.svelte';
import App42 from './components/Contents/App4/App2.svelte';
import App5 from './components/Contents/App5/App.svelte';
import App52 from './components/Contents/App5/App2.svelte';
import App6 from './components/Contents/App6/App.svelte';

const routes = {
    '/binding': App4,
    '/binding2': App42,
    '/lifecycle': App5,
    '/tick': App52,
    '/store': App6,
};

export default routes;
