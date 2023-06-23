import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import type { Photo } from '$lib/constants/constants';

export interface SelectedImage {
	hasImage: boolean;
	image?: Photo | undefined;
}

const data: SelectedImage = browser
	? window.localStorage.getItem('image-state')
		? JSON.parse(window.localStorage.getItem('image-state')!)
		: { hasImage: false, image: undefined }
	: { hasImage: false, image: undefined };

export const selectedImage = writable(data);

selectedImage.subscribe((v) => {
	if (browser) {
		window.localStorage.setItem('image-state', JSON.stringify(v));
	}
});

export const setSelectedImage = (value: Photo) => {
	selectedImage.update((current) => {
		return { hasImage: true, image: value };
	});
};

export const removeSelectedImage = () => {
	selectedImage.update((current) => {
		return { hasImage: false, image: undefined };
	});
};
