<script lang="ts">
	import '../app.css';
	import LanguageToggle from '../components/LanguageToggle.svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';
	import { theme } from '../lib/store/DarkThemeStore';
	import { isHovering, isNotHovering } from '../lib/store/CursorHoverStore';
</script>

<div class="flex justify-between w-full fixed items-center px-8 py-6 ">
	<a href="/" class="cursor-none">
		<svg
			width="57"
			height="49"
			viewBox="0 0 57 49"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}
			class="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
		>
			<path
				d="M55.5933 13.112L47.5413 44H38.4333L33.5053 23.672L28.4013 44H19.2933L11.4613 13.112H19.5133L23.9573 35.596L29.4573 13.112H37.7293L43.0093 35.596L47.4973 13.112H55.5933Z"
				fill={$theme === 'dark' ? '#ECEBE4' : '#1c1c1c'}
			/>
			<circle cx="15" cy="5" r="5" fill="#ECEBE4" />
			<circle cx="5" cy="39" r="5" fill="#417B5A" />
		</svg>
	</a>

	<div class="flex py-6 gap-3">
		<LanguageToggle />
		<ThemeToggle />
	</div>
</div>

<slot />
