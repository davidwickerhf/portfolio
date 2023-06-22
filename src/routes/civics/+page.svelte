<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { civics } from '$lib/constants/constants';
	import GridComponent from '../../components/common/GridComponent.svelte';
	import { onMount } from 'svelte';
	import { setScrolled } from '$lib/store/SidebarStore';

	onMount(() => {
		setScrolled();
	});
</script>

<div class="flex w-full flex-col gap-6">
	<h2>{$_('page.civics.title')}</h2>
	<p>
		{$_('page.civics.intro')}
	</p>

	<div class="flex w-full justify-between flex-wrap gap-6 mb-4">
		<TextButton text="page.civics.year-abroad" url="/academics" />
		<TextButton
			text="page.civics.view-the-slides"
			url="https://1drv.ms/p/s!ApVJIPa1LXolhOwDPcoQ0jn5ZMf4XQ?e=taEL1W"
		/>
	</div>

	{#each civics as event}
		<!-- Event -->
		<div class="flex flex-col gap-4 w-full">
			<div
				class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
			/>

			<div class="pt-8 flex flex-col gap-2">
				<p class="font-medium text-3xl">{$_(event.title)}</p>
			</div>

			<p>{$_(event.description)}</p>

			{#if event.url}
				<div class="w-fit">
					<TextButton text="general.read-more" url={event.url} />
				</div>
			{/if}

			{#if event.images}
				<GridComponent images={event.images} />
			{/if}
		</div>
	{/each}
</div>
