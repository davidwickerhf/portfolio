<script lang="ts">
	import Logo from '../common/Logo.svelte';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
	import { theme } from '$lib/store/DarkThemeStore';
</script>

<!--  style="background-image: url(/{$theme}noise.svg)" -->
<div
	class="fixed w-screen px-8 sm:px-16 border-b-2 border-alabaster-three dark:border-dark-three justify-between flex items-center max-h-24 z-10 bg-ghost dark:bg-dark-five"
>
	<!-- Logo -->
	<div class="py-6 border-r-2 border-alabaster-three dark:border-dark-three w-32 sm:w-60">
		<Logo />
	</div>

	<!-- Toggles -->
	<div class="flex gap-3 h-full">
		<!-- Language toggle -->
		<LanguageToggle />

		<!-- Theme toggle -->
		<ThemeToggle />
	</div>
</div>
