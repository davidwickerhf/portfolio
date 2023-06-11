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
	class="flex flex-col items-start @4xl/content:flex-row @4xl/content:items-center @4xl/content:gap-2 w-full"
>
	<!-- Date -->
	<p class="whitespace-nowrap px-0 @4xl/content:px-9 font-medium text-dark-one">
		{activity.year} - {activity.month < 10 ? '0' + activity.month : activity.month}
	</p>

	<!-- Div -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="flex flex-col items-center border-2 border-alabaster-three dark:border-dark-three px-8 py-8 gap-6 w-full"
		on:click={() => {
			if (open) setSelected('');
			else setSelected(activity.id);
		}}
		on:mouseover={isHovering}
		on:focus={isHovering}
		on:blur={isNotHovering}
		on:mouseout={isNotHovering}
	>
		<!-- Button component -->
		<div class="flex items-center gap-9 w-full justify-between">
			<div class="flex flex-col">
				<p>
					<span class="font-medium text-lg">{$_(activity.role)}</span>, {$_(activity.activity)}
				</p>
				<a
					href={activity.institutionUrl}
					target="_blank"
					rel="noreferrer"
					class="hover:underline text-dark-one"
				>
					{$_(activity.institution)}
				</a>
			</div>
			<span class="material-symbols-outlined">add</span>
		</div>

		<!-- Content -->
		{#if open}
			<div in:fade>
				<p class="mb-4">{$_(activity.description)}</p>
				<div class="flex flex-wrap gap-4">
					{#if activity.images}
						{#each activity.images as img}
							<img class="max-h-[180px]" src="/images/{img}" alt="" />
						{/each}
					{/if}
				</div>
			</div>
		{/if}
	</div>
</div>
