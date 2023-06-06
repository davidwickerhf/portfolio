import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser
	? window.localStorage.getItem('sidebar-state')
		? JSON.parse(window.localStorage.getItem('sidebar-state')!)
		: { scrolled: false, open: false, expanded: true }
	: { scrolled: false, open: false, expanded: true };

export const sidebar = writable(data);

export const setScrolled = () => {
	sidebar.update((current) => {
		let v = { scrolled: true, open: current.open, expanded: current.expanded };
		if (browser) window.localStorage.setItem('sidebar-state', JSON.stringify(v));
		return v;
	});
};

export const toggleSidebar = () => {
	sidebar.update((current) => {
		let value = { scrolled: current.scrolled, open: !current.open, expanded: current.expanded };
		if (browser) window.localStorage.setItem('sidebar-state', JSON.stringify(value));
		return value;
	});
};

sidebar.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('sidebar-state', JSON.stringify(v));
	}
});
