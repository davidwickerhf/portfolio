<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { activism } from '$lib/constants/constants';
	import GridComponent from '../photography/GridComponent.svelte';
	import { scrollIntoView } from '$lib/constants/functions';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { setSelected } from '$lib/store/SelectedProjectStore';

	const scrollId = $page.url.hash.replace('#', '');
	onMount(() => {
		if (scrollId) {
			window.requestAnimationFrame(() => scrollIntoView(scrollId));
			history.replaceState('', '', window.location.pathname);
			setSelected(scrollId);
		}
	});
</script>

<div class="flex w-full flex-col gap-6">
	<h2>{$_('page.activism.title')}</h2>
	<p>
		{$_('page.activism.intro')}
	</p>

	<div class="flex w-full justify-between flex-wrap gap-6 mb-4">
		<TextButton
			text={$_('page.activism.readmore')}
			url="https://docs.google.com/document/d/17cEYGScDibzUB6JtDHBvewsLQrWsJMCgtKDsmmoowoo/edit?usp=sharing"
		/>
	</div>

	{#each activism as event}
		<!-- Event -->
		<div class="flex flex-col gap-4 w-full" id={event.id}>
			<div
				class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
			/>

			<div class="pt-8 flex flex-col gap-2">
				<p class="font-medium text-3xl">{event.title}</p>
				<p class="text-dark-one">
					{event.year} • {event.location}
				</p>
			</div>

			<p>{$_(event.description)}</p>

			{#if event.images}
				<GridComponent images={event.images} />
			{/if}
		</div>
	{/each}
</div>
