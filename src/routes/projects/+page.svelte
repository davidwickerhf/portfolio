<script lang="ts">
	import ProjectComponent from './PersonalProjectComponent.svelte';

	import { projects } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { scrollIntoView } from '$lib/constants/functions';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import { setScrolled } from '$lib/store/SidebarStore';

	const scrollId = $page.url.hash.replace('#', '');
	onMount(() => {
		setScrolled();
		setSelected('');
		if (scrollId) {
			window.requestAnimationFrame(() => scrollIntoView(scrollId));
			history.replaceState('', '', window.location.pathname);
			setSelected(scrollId);
		}
	});
</script>

<div class="flex flex-col gap-6 w-full">
	<h2>{$_('page.projects.title')}</h2>

	<div class="flex flex-col gap-4 mt-4">
		{#each projects.sort((a, b) => (a.year > b.year ? -1 : 1)) as project}
			<!-- Project div -->
			<ProjectComponent {project} />
		{/each}
	</div>
</div>
