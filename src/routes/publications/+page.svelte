<script lang="ts">
	import PublicationComponent from './PublicationComponent.svelte';

	import { publications } from '$lib/constants/constants';

	import { _ } from 'svelte-i18n';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { scrollIntoView } from '$lib/constants/functions';

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

<div class="flex flex-col gap-6 w-full">
	<h2>{$_('page.publications.title')}</h2>

	{#each publications as publication}
		<PublicationComponent {publication} />
	{/each}
</div>
