<script lang="ts">
	import ExtracurricularComponent from './ExtracurricularComponent.svelte';

	import { _ } from 'svelte-i18n';
	import { activities, ActivityArea } from '$lib/constants/constants';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import { page } from '$app/stores';
	import { scrollIntoView } from '$lib/constants/functions';

	import { locale } from 'svelte-i18n';

	const keys = Object.keys(ActivityArea);
	const values = Object.values(ActivityArea);

	const scrollId = $page.url.hash.replace('#', '');
	onMount(() => {
		setSelected('');
		if (scrollId) {
			window.requestAnimationFrame(() => scrollIntoView(scrollId));
			history.replaceState('', '', window.location.pathname);
			setSelected(scrollId);
		}
	});
</script>

<div class="flex flex-col gap-6">
	<h2>{$_('page.extracurriculars.title')}</h2>

	{#each keys as area, index}
		{#if activities.filter((a) => a.area === values[index]).length > 0}
			<p class="text-lg font-medium lowercase">
				{$_(values[index])}
			</p>

			<div class="flex flex-col gap-6 w-full">
				{#each activities
					.filter((a) => a.area === values[index])
					.sort( (a, b) => (a.year == b.year ? (a.month > b.month ? -1 : 1) : a.year > b.year ? -1 : 1) ) as activity}
					<!-- Activity Component -->
					<ExtracurricularComponent {activity} />
				{/each}
			</div>
		{/if}
	{/each}
</div>
