<script lang="ts">
	import AcademicsComponent from './AcademicsComponent.svelte';
	import UnderlineLink from '../../components/common/UnderlineLink.svelte';
	import { academics } from '$lib/constants/constants';
	import { onMount } from 'svelte';
	import { setSelected } from '$lib/store/SelectedProjectStore';
	import { theme } from '$lib/store/DarkThemeStore';

	import { _ } from 'svelte-i18n';
	import { page } from '$app/stores';
	import { scrollIntoView } from '$lib/constants/functions';
	import { setScrolled } from '$lib/store/SidebarStore';

	let current = academics.find((school) => school.current);

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

<div class="gap-24 flex flex-col">
	<!-- Hero -->
	<div>
		<!-- Hero banner -->
		<div class="mt-4 flex w-full flex-col-reverse @5xl/content:flex-row gap-6">
			<h2 class="">
				{$_('page.academics.intro')}
			</h2>
			<!-- TODO Random image  -->
			<div class="flex flex-col @5xl/content:max-w-[45%] border-2 dark:border-dark-three ">
				<img
					alt=""
					src="/images/activities/tedx-1.jpg"
					class="h-full object-cover max-h-48  @5xl/content:max-h-none"
				/>
				<div class="flex justify-between w-full items-center px-4 py-4">
					<p class="lowercase">tedx youth conference</p>
					<div class="uppercase font-thin dark:text-dark-one">UWCD DILIJAN</div>
				</div>
			</div>
		</div>

		<!-- Current education -->
		{#if current}
			<div class="mt-6 flex gap-2 items-center">
				<div class="h-12 w-auto py-1">
					<!-- svelte-ignore a11y-missing-attribute -->
					<img
						class="h-full w-auto"
						src="/logos/{$theme === 'dark' ? current.darkLogo ?? current.logo : current.logo}"
					/>
				</div>
				<p class="flex gap-2">
					{$_('page.academics.currently')}
					<UnderlineLink underline url={current.url ?? '/academics'}
						>{$_(current.istitution)}</UnderlineLink
					>
				</p>
			</div>
		{/if}
	</div>

	<!-- Banner -->
	<div
		class="relative w-full flex-col flex bg-alabaster-three text-dark-three items-center justify-center gap-6"
	>
		<p class="uppercase z-10 py-4 font-medium text-lg">{$_('page.academics.history')}</p>
		<div
			class="w-full flex flex-col justify-between gap-2 z-10 pb-4 items-center @xl/content:flex-row"
		>
			{#each academics as school, index}
				{#if index != 0}
					<div class="border-l-[1px] h-[200%] border-green-three/30 rotate-12" />
				{/if}
				<a href="/academics#{school.id}" class="hover:underline">{$_(school.short)}</a>
			{/each}
		</div>
		<div class="absolute bg-alabaster-three w-[300%] min-h-[120%]" />
	</div>

	<!-- Component list  -->
	<div class="flex flex-col gap-11">
		<!-- Academics component -->
		{#each academics as school, index}
			<AcademicsComponent border={index == 0 ? false : true} data={school} />
		{/each}
	</div>
</div>
