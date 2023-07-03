<script lang="ts">
	import WorkExperience from './WorkExperience.svelte';

	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { work } from '$lib/constants/constants';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import { scrollIntoView } from '$lib/constants/functions';
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

<div class="flex w-full flex-col gap-6">
	<h2>{$_('page.work.title')}</h2>
	<p>
		{$_('page.work.intro')}
	</p>

	<div class="flex w-full justify-between flex-wrap gap-6 mb-4">
		<TextButton text="page.work.work-with-me" url="/contact" />
		<TextButton text="page.work.other" url="/projects" />
	</div>

	{#each work.sort((a, b) => (a.year > b.year ? -1 : 1)) as experience}
		<WorkExperience {experience} />
	{/each}
</div>
