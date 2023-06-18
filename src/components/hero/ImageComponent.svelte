<script lang="ts">
	import Lazy from 'svelte-lazy';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { _ } from 'svelte-i18n';

	export let title: string | undefined;
	export let description: string | undefined;
	export let url: string | undefined = undefined;
	export let src: string;
</script>

<Lazy>
	<a
		href={url}
		class="block relative min-w-min flex-shrink-0 border-2 border-alabaster-three dark:border-dark-three hover:scale-105 transition-all ease-in-out duration-150"
		on:click={(e) => {
			if (!url) e.preventDefault;
		}}
		on:mouseover={isHovering}
		on:focus={isHovering}
		on:blur={isNotHovering}
		on:mouseout={isNotHovering}
	>
		<!-- Dark Background -->
		<div class="relative min-w-min flex-shrink-0">
			<div
				class="absolute left-0 w-full h-full opacity-0 hover:bg-dark-three/50 hover:opacity-100 transition-all ease-in-out duration-150 p-8 text-alabaster-three flex flex-col justify-between overflow-hidden"
			>
				{#if description}
					<div class="flex flex-col gap-4">
						<p class="text-sm overflow-hidden">
							{$_(description)}
						</p>
					</div>
				{/if}

				{#if url}
					<div class="flex gap-4 items-center">
						<a href={url}>click to read more</a>
						<span class="material-symbols-outlined">chevron_right</span>
					</div>
				{/if}
			</div>
			<img class="" src="/images/{src}" alt="" />
		</div>

		{#if title}
			<div class="p-4 font-medium flex justify-between">
				<p>{$_(title)}</p>
			</div>
		{/if}
	</a>
</Lazy>
