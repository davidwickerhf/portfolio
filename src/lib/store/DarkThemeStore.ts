import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let data: string;
if (browser && window.localStorage.getItem('color-theme')) {
	let colortheme = window.localStorage.getItem('color-theme');
	if (colortheme === 'light') data = 'light';
	else data = 'dark';
}
data = 'light';

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

export const theme = writable(data);

theme.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('color-theme', JSON.stringify(v));
		if (v === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}
});

export const toggleTheme = () => {
	theme.update((current) => {
		if (browser)
			window.localStorage.setItem(
				'color-theme',
				JSON.stringify(current === 'dark' ? 'light' : 'dark')
			);
		return current === 'dark' ? 'light' : 'dark';
	});
};
