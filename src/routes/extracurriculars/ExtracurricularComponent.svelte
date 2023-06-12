<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Activity } from '$lib/constants/constants';
	import { fade } from 'svelte/transition';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { selected, setSelected } from '$lib/store/SelectedProjectStore';
	import TextButton from '../../components/common/TextButton.svelte';

	export let activity: Activity;
	$: open = $selected === activity.id;
</script>

<div
	class="grid gird-cols-[auto] @4xl/content:grid-cols-[auto_auto] items-center border-alabaster-three dark:border-dark-three gap-x-2"
>
	<!-- Date -->
	<div
		class="flex px-0 @4xl/content:px-9 font-medium text-dark-one verflow-hidden flex-shrink-0 flex-grow-0"
	>
		<div class="whitespace-nowrap w-[74px]">
			{activity.year} - {activity.month < 10 ? '0' + activity.month : activity.month}
		</div>
	</div>

	<!-- Button -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="flex items-center gap-9 w-full justify-between border-x-2 border-t-2 border-alabaster-three dark:border-dark-three p-8"
	>
		<div class="flex flex-col">
			<p>
				<span class="font-medium text-lg">{$_(activity.role)}</span>, {$_(activity.activity)}
			</p>
			<a href={activity.institutionUrl} class="hover:underline text-dark-one">
				{$_(activity.institution)}
			</a>
		</div>
		<span
			class="material-symbols-outlined"
			on:click={() => {
				if (open) setSelected('');
				else setSelected(activity.id);
			}}
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}>{open ? 'close' : 'add'}</span
		>
	</div>

	<div />

	<!-- Content -->
	<div
		class="px-8 border-x-2 border-b-2 border-alabaster-three dark:border-dark-three {open
			? 'max-h-[1500px]'
			: 'max-h-0'} overflow-hidden transition-[max-height] ease-in-out duration-200"
	>
		<!-- {#if open} -->
		<div class="flex flex-col gap-4 pb-8">
			<p class="mb-4">{$_(activity.description)}</p>
			{#if activity.url}
				<div class="grow-0 max-w-fit">
					<TextButton text="Read more" url={activity.url} />
				</div>
			{/if}
			<div class="flex flex-wrap gap-4">
				{#if activity.images}
					{#each activity.images as img}
						<img class="max-h-[180px]" src="/images/{img}" alt="" />
					{/each}
				{/if}
			</div>
		</div>
		<!-- {/if} -->
	</div>
</div>
