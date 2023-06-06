<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';

	export let left: boolean = false;
	export let url: string | undefined;
</script>

<a
	href={url}
	class="uppercase font-medium flex gap-1 text-base hover:scale-105 transition-all ease-in-out duration-200"
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
>
	{#if left}<span class="material-symbols-outlined">chevron_left</span>{/if}
	<p><slot /></p>
	{#if !left}<span class="material-symbols-outlined">chevron_right</span>{/if}
</a>
