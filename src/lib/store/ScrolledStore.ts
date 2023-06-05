import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// const data = browser
// 	? window.localStorage.getItem('scrolled-state')
// 		? window.localStorage.getItem('scrolled-state') === 'true'
// 			? true
// 			: false
// 		: false
// 	: false;
const data = false;

export const scrolled = writable(data);

scrolled.subscribe((v) => {
	if (browser) {
		localStorage.setItem('scrolled-state', JSON.stringify(v));
	}
});

export const toggleScrolled = () => {
	console.log('Toggle theme');
	scrolled.update((current) => {
		return !current;
	});
};
