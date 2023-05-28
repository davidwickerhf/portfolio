<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';

	export let title: string;
	export let description: string;
	export let url: string | undefined = undefined;
</script>

<a
	href={url}
	class="relative min-w-min flex-shrink-0"
	on:click={(e) => {
		if (!url) e.preventDefault;
	}}
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
>
	<!-- Dark Background -->
	<div
		class="absolute left-0 w-full h-full opacity-0 hover:bg-dark-three/50 hover:opacity-100 transition-all ease-in-out duration-150 p-8 text-alabaster-three flex flex-col justify-between"
	>
		<div class="flex flex-col gap-4">
			<p class="font-medium text-2xl">{title}</p>
			<p class="">
				{description}
			</p>
		</div>

		{#if url}
			<div class="flex gap-4 items-center">
				<p>click to read more</p>
				<span class="material-symbols-outlined">chevron_right</span>
			</div>
		{/if}
	</div>
	<img class="h-80 w-auto" src="/images/activities/tedx-1.jpg" alt="" />
</a>
