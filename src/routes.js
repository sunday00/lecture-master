import App4 from './components/Contents/App4/App.svelte';
import App42 from './components/Contents/App4/App2.svelte';
import App5 from './components/Contents/App5/App.svelte';
import App52 from './components/Contents/App5/App2.svelte';
import App6 from './components/Contents/App6/App.svelte';
import App7 from './components/Contents/App7/App.svelte';
import App72 from './components/Contents/App7/App2.svelte';
import App8 from './components/Contents/App8/App.svelte';

const routes = {
    '/binding': App4,
    '/binding2': App42,
    '/lifecycle': App5,
    '/tick': App52,
    '/store': App6,
    '/animation': App7,
    '/animation2': App72,
    '/component': App8,
};

export default routes;
