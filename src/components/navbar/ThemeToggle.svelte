<script lang="ts">
	import { theme, toggleTheme } from '../../lib/store/DarkThemeStore';
	import { isHovering, isNotHovering } from '../../lib/store/CursorHoverStore';

	$: themeData = $theme; // subscribe
</script>

<button
	type="button"
	on:click={toggleTheme}
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
	class="w-12 h-12 flex justify-center text-center align-middle items-center cursor-none hover:cursor-none border-2 border-dark-three hover:bg-dark-three hover:text-alabaster-three dark:border-alabaster-three dark:hover:bg-alabaster-three dark:text-alabaster-three dark:hover:text-dark-three"
>
	<span class="relative text-xl material-symbols-outlined items-center">
		{themeData === 'dark' ? 'light_mode' : 'dark_mode'}
	</span>
</button>
