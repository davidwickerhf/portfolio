<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { certifications, CertificationType } from '$lib/constants/constants';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import CertificationsComponent from './CertificationComponent.svelte';
	import { page } from '$app/stores';
	import { scrollIntoView } from '$lib/constants/functions';

	const keys = Object.keys(CertificationType);
	const values = Object.values(CertificationType);

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
	<h2>{$_('page.certifications.title')}</h2>

	{#each keys as area, index}
		{#if certifications.filter((a) => a.type === values[index]).length > 0}
			<p class="text-lg font-medium lowercase">{$_(values[index])}</p>

			<div class="flex flex-col gap-6 w-full">
				{#each certifications
					.filter((a) => a.type === values[index])
					.sort( (a, b) => (a.year == b.year ? (a.month > b.month ? -1 : 1) : a.year > b.year ? -1 : 1) ) as certification}
					<!-- Activity Component -->
					<CertificationsComponent {certification} />
				{/each}
			</div>
		{/if}
	{/each}
</div>
