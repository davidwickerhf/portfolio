import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser
	? window.localStorage.getItem('selected-state')
		? JSON.parse(window.localStorage.getItem('selected-state')!)
		: undefined
	: undefined;

export const selected = writable(data);

selected.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('selected-state', JSON.stringify(v));
	}
});

export const setSelected = (value: string) => {
	selected.update((current) => {
		return value;
	});
};
