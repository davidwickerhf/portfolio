<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { _ } from 'svelte-i18n';

	export let title: string;
	export let url: string;
	export let green: boolean = false;
</script>

<a
	href={url}
	class="flex justify-between p-4 {green
		? 'bg-green-three hover:bg-alabaster-five text-alabaster-two'
		: 'bg-dark-three hover:bg-alabaster-five text-alabaster-three'}  items-center  hover:text-dark-three transition-all ease-in-out duration-150 cursor-none gap-8 min-w-[150px]"
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
>
	<p class=" whitespace-nowrap">{title}</p>
	<span class="material-symbols-outlined text-xl">chevron_right</span>
</a>
