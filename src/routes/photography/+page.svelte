<script lang="ts">
	import GridComponent from '../../components/common/GridComponent.svelte';

	import { portfolio, type Photo } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';
</script>

<div class="flex flex-col gap-6 w-full">
	<h2>{$_('page.photo.title')}</h2>

	<div class="flex w-full gap-4 flex-col">
		{#each portfolio as location, index}
			<div>
				<p class="text-2xl font-medium uppercase">{$_(location.title)}</p>
				{#if location.description}
					<p>{$_(location.description)}</p>
				{/if}
			</div>

			<GridComponent images={location.images} />
		{/each}
	</div>
</div>
