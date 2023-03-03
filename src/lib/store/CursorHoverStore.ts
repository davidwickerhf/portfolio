import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const data = false;

export const hovering = writable(data);

export const isHovering = () => {
	hovering.update((_) => true);
};

export const isNotHovering = () => {
	hovering.update((_) => false);
};
2;
