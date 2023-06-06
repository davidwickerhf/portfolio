import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';
import { theme } from '$lib/store/DarkThemeStore';
import { sidebar } from '$lib/store/SidebarStore';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async () => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();
};
