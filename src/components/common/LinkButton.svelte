<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { _ } from 'svelte-i18n';

	export let title: string;
	export let url: string;
</script>

<a
	href={url}
	class="flex justify-between p-4 bg-dark-three text-alabaster-three items-center hover:bg-alabaster-five hover:text-dark-three transition-all ease-in-out duration-150 cursor-none gap-8 min-w-[150px]"
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
>
	<p>{title}</p>
	<span class="material-symbols-outlined text-xl">chevron_right</span>
</a>
