<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { _ } from 'svelte-i18n';
	export let text: string;
	export let url: string;
</script>

<a
	href={url}
	class="flex text-lg align-middle items-center hover:scale-105 transition-all ease-in-out"
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
>
	<p class="">{$_(text)}</p>
	<span class="material-symbols-outlined"> chevron_right </span>
</a>
