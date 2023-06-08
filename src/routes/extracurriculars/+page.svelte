<script lang="ts">
	import ExtracurricularComponent from './ExtracurricularComponent.svelte';

	import { _ } from 'svelte-i18n';
	import { activities, ActivityArea } from '$lib/constants/constants';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';

	const keys = Object.keys(ActivityArea);
	const values = Object.values(ActivityArea);

	onMount(() => {
		setSelected('');
	});
</script>

<div class="flex flex-col gap-6">
	<h2>extracurriculars.</h2>

	{#each keys as area, index}
		{#if activities.filter((a) => a.area === values[index]).length > 0}
			<p class="text-lg font-medium lowercase">related to {values[index]}</p>

			<div class="flex flex-col gap-6">
				{#each activities
					.filter((a) => a.area === values[index])
					.sort( (a, b) => (a.year == b.year ? (a.month > b.month ? 1 : -1) : a.year > b.year ? 1 : -1) ) as activity}
					<!-- Activity Component -->
					<ExtracurricularComponent {activity} />
				{/each}
			</div>
		{/if}
	{/each}
</div>
