<script lang="ts">
	import { theme, toggleTheme } from '../lib/store/DarkThemeStore';

	$: themeData = $theme; // subscribe
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>

<button
	type="button"
	on:click={toggleTheme}
	class="z-30 cursor-pointer w-8 h-8 rounded-lg bg-dark-three dark:bg-alabaster-three flex justify-center text-center align-middle"
>
	<span
		class="relative text-lg material-symbols-outlined dark:text-dark-three text-alabaster-three top-[2px]"
	>
		{themeData === 'dark' ? 'light_mode' : 'dark_mode'}
	</span>
</button>
