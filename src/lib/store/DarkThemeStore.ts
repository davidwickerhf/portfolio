import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// const data = browser
// 	? window.localStorage.getItem('color-theme')
// 		? window.localStorage.getItem('color-theme') === 'dark'
// 			? 'dark'
// 			: !('color-theme' in window.localStorage) &&
// 			  window.matchMedia('(prefers-color-scheme: dark)').matches
// 			? 'dark'
// 			: 'light'
// 		: window.matchMedia('(prefers-color-scheme: dark)').matches
// 		? 'light'
// 		: 'dark'
// 	: 'light';
const data = 'light';

export const theme = writable(data);

theme.subscribe((v) => {
	if (browser) {
		localStorage.setItem('color-thene', JSON.stringify(v));
		if (v === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}
});

export const toggleTheme = () => {
	console.log('Toggle theme');
	theme.update((current) => {
		return current === 'dark' ? 'light' : 'dark';
	});
};
