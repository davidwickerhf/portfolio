<script lang="ts">
	import { theme } from '../../lib/store/DarkThemeStore';
	import { hovering } from '../../lib/store/CursorHoverStore';
	import { spring } from 'svelte/motion';

	let cursorVisible: boolean = true;

	switch (screen.orientation.type) {
		case 'landscape-primary':
			cursorVisible = true;
			break;
		case 'landscape-secondary':
			cursorVisible = true;
			break;
		case 'portrait-secondary':
			cursorVisible = false;
		case 'portrait-primary':
			cursorVisible = false;
			break;
		default:
			cursorVisible = true;
			console.log("The orientation API isn't supported in this browser :(");
	}

	let coords1 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.05,
			damping: 0.25
		}
	);

	let coords2 = spring(
		{ x: 0, y: 0 },
		{
			stiffness: 0.1,
			damping: 0.35
		}
	);

	let size = spring(10);
	$: themeData = $theme;
</script>

<svelte:window
	on:mousemove={(e) => {
		coords1.set({ x: e.clientX, y: e.clientY });
		coords2.set({ x: e.clientX, y: e.clientY });
	}}
	on:mousedown={(e) => {
		size.set(30);
	}}
	on:mouseup={(e) => {
		size.set(10);
	}}
/>

<svg
	id="cursor"
	class="fixed w-screen h-screen mix-blend-difference z-40 {cursorVisible ? '' : 'hidden'}"
>
	<circle
		cx={$coords1.x}
		cy={$coords1.y}
		r={$size * 2}
		stroke="#fff"
		stroke-width="1"
		fill-opacity="0"
		class="z-50"
	/>
	<circle
		cx={$coords2.x}
		cy={$coords2.y}
		r={$hovering ? $size : $size / 4}
		fill="#fff"
		class="z-50"
	/>
</svg>

<style>
	:global(body) {
		cursor: none;
	}

	svg {
		position: absolute;
		top: 0;
		left: 0;
		pointer-events: none;
	}
</style>
