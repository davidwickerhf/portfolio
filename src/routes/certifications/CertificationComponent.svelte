<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { Certification } from '$lib/constants/constants';
	import { fade } from 'svelte/transition';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { selected, setSelected } from '$lib/store/SelectedProjectStore';
	import TextButton from '../../components/common/TextButton.svelte';

	export let certification: Certification;
	$: open = $selected === certification.id;
</script>

<div
	id={certification.id}
	class="w-full grid gird-cols-[auto] @4xl/content:grid-cols-[min-content_auto] items-center border-alabaster-three dark:border-dark-three gap-x-2"
>
	<!-- Date -->
	<div
		class="flex px-0 @4xl/content:px-9 font-medium text-dark-one verflow-hidden flex-shrink-0 flex-grow-0"
	>
		<div class="whitespace-nowrap w-[74px]">
			{certification.year} - {certification.month < 10
				? '0' + certification.month
				: certification.month}
		</div>
	</div>

	<!-- Button -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="flex items-center gap-9 w-full justify-start border-x-2 border-t-2 border-alabaster-three dark:border-dark-three p-8"
	>
		<div class="shrink-0 grow-0">
			<img src="/logos/{certification.logo}" alt="" class="max-h-20 w-20" />
		</div>

		<div class="flex flex-col">
			<p>
				<span class="font-medium text-lg">{$_(certification.title)}</span>
			</p>
			{#if certification.grade}
				<p>{certification.grade}</p>
			{/if}
			<a href={certification.institutionUrl} class="hover:underline text-dark-one">
				{$_(certification.institution)}
			</a>
		</div>

		{#if certification.description}
			<span
				class="material-symbols-outlined"
				on:click={() => {
					if (open) setSelected('');
					else setSelected(certification.id);
				}}
				on:mouseover={isHovering}
				on:focus={isHovering}
				on:blur={isNotHovering}
				on:mouseout={isNotHovering}>{open ? 'close' : 'add'}</span
			>
		{/if}
	</div>

	<div />

	<!-- Content -->
	<div
		class="px-8 border-x-2 border-b-2 border-alabaster-three dark:border-dark-three {open
			? 'max-h-[1500px]'
			: 'max-h-0'} overflow-hidden transition-[max-height] ease-in-out duration-200"
	>
		<!-- {#if open} -->
		{#if certification.description}
			<div class="flex flex-col gap-4 pb-8">
				<p class="mb-4">{$_(certification.description ?? '')}</p>
				{#if certification.url}
					<div class="grow-0 max-w-fit">
						<TextButton text="Read more" url={certification.url} />
					</div>
				{/if}
			</div>
		{/if}
	</div>
</div>
