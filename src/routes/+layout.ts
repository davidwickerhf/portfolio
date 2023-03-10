import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import type { LayoutLoad } from './$types';

console.log('Loaded Servers');
export const load: LayoutLoad = async () => {
	console.log('Called load function');
	if (browser) {
		console.log('set browser locale');
		locale.set(window.navigator.language);
	}
	await waitLocale();
};
