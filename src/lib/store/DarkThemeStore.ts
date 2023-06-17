import { writable } from 'svelte/store';
import { browser } from '$app/environment';

let data: string;
if (browser && window.localStorage.getItem('color-theme')) {
	let colortheme = window.localStorage.getItem('color-theme');
	if (colortheme === 'light') data = 'light';
	else data = 'dark';
} else {
	data = 'light';
}

export const theme = writable(data);

theme.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('color-theme', v);
		if (v === 'dark') document.documentElement.classList.add('dark');
		else document.documentElement.classList.remove('dark');
	}
});

export const toggleTheme = () => {
	theme.update((current) => {
		return current === 'dark' ? 'light' : 'dark';
	});
};
