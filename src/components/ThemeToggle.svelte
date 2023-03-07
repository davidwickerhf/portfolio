<script lang="ts">
	import { theme, toggleTheme } from '../lib/store/DarkThemeStore';
	import { isHovering, isNotHovering } from '../lib/store/CursorHoverStore';

	$: themeData = $theme; // subscribe
</script>

<button
	type="button"
	on:click={toggleTheme}
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
	class="z-30 w-10 h-10 rounded-lg bg-dark-three dark:bg-alabaster-three flex justify-center text-center align-middle cursor-none hover:cursor-none"
>
	<span
		class="relative text-xl material-symbols-outlined dark:text-dark-three text-alabaster-three items-center top-[5px]"
	>
		{themeData === 'dark' ? 'light_mode' : 'dark_mode'}
	</span>
</button>
