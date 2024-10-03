import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser
	? (() => {
		const storedData = window.localStorage.getItem('selected-state');
		if (storedData === null || storedData === 'undefined') {
			return undefined;
		}
		try {
			return JSON.parse(storedData);
		} catch {
			return undefined;
		}
	})()
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
