<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { civics } from '$lib/constants/constants';
	import GridComponent from '../photography/GridComponent.svelte';
</script>

<div class="flex w-full flex-col gap-6">
	<h2>genocide and war in armenia.</h2>
	<p>{$_('general.lorem-ipsum-short')}</p>

	<div class="flex w-full justify-between flex-wrap gap-6 mb-4">
		<TextButton text="year abroad in armenia" url="/academics" />
	</div>

	{#each civics as event}
		<!-- Event -->
		<div class="flex flex-col gap-4 w-full">
			<div
				class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
			/>

			<div class="pt-8 flex flex-col gap-2">
				<p class="font-medium text-3xl">{event.title}</p>
			</div>

			<p>{$_(event.description)}</p>

			{#if event.images}
				<GridComponent images={event.images} />
			{/if}
		</div>
	{/each}
</div>
