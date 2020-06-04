import App from './App.svelte';

const app = new App({
	target: (document.querySelector('.container') as HTMLElement),
	props: {
		name: 'world',
	}
});

declare global {
	interface Window {
		app: any
	}
}

window.app = app;

export default app;