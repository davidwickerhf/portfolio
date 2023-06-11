<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { certifications, CertificationType } from '$lib/constants/constants';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import CertificationsComponent from './CertificationComponent.svelte';

	const keys = Object.keys(CertificationType);
	const values = Object.values(CertificationType);

	onMount(() => {
		setSelected('');
	});
</script>

<div class="flex flex-col gap-6">
	<h2>certifications.</h2>

	{#each keys as area, index}
		{#if certifications.filter((a) => a.type === values[index]).length > 0}
			<p class="text-lg font-medium lowercase">{values[index]} certifications</p>

			<div class="flex flex-col gap-6 w-full">
				{#each certifications
					.filter((a) => a.type === values[index])
					.sort( (a, b) => (a.year == b.year ? (a.month > b.month ? 1 : -1) : a.year > b.year ? 1 : -1) ) as certification}
					<!-- Activity Component -->
					<CertificationsComponent {certification} />
				{/each}
			</div>
		{/if}
	{/each}
</div>
