<script lang="ts">
	import { fade } from 'svelte/transition';
	import { selected, setSelected } from '$lib/store/SelectedProjectStore';
	import { _ } from 'svelte-i18n';
	import type { Project } from '$lib/constants/constants';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import GridComponent from '../../components/common/GridComponent.svelte';
	import TextButton from '../../components/common/TextButton.svelte';

	export let data: Project;
	let open = false;
	$: open = $selected === data.id;
</script>

<div id={data.id} class="border-2 border-dark-three px-6 py-6 flex flex-col gap-4">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="flex justify-between"
		on:click={() => {
			if (open) setSelected('');
			else setSelected(data.id);
		}}
		on:mouseover={isHovering}
		on:focus={isHovering}
		on:blur={isNotHovering}
		on:mouseout={isNotHovering}
	>
		<p class="uppercase text-lg">{$_(data.title)}</p>
		<span class="material-symbols-outlined">{open ? 'close' : 'add'}</span>
	</div>

	{#if open}
		<div in:fade>
			<p class="mb-4">{$_(data.description)}</p>
			<div class="flex flex-col gap-4">
				{#if data.url}
					<div class="w-fit">
						<TextButton text="general.read-more" url={data.url} />
					</div>
				{/if}
				{#if data.images}
					<GridComponent images={data.images} />
					<!-- {#each data.images as img}
						<img class="max-h-[225px]" src="/images/{img}" alt="" />
					{/each} -->
				{/if}
			</div>
		</div>
	{/if}
</div>
