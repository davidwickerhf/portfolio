<script lang="ts">
	import { fade } from 'svelte/transition';

	export let title: string;
	export let description: string;
	export let images: string[] | undefined = [];
	export let open: boolean = false;
</script>

<div class="border-2 border-dark-three px-6 py-6 flex flex-col gap-4">
	<div class="flex justify-between">
		<p class="uppercase text-lg">{title}</p>
		<span class="material-symbols-outlined">{open ? 'close' : 'add'}</span>
	</div>

	{#if open}
		<div in:fade>
			<p class="mb-4">{description}</p>
			<div class="grid gap-4 auto-cols-auto">
				{#if images}
					{#each images as img}
						<img class="max-w-[250px]" src="/images/{img}" />
					{/each}
				{/if}
			</div>
		</div>
	{/if}
</div>
