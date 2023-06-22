<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { work } from '$lib/constants/constants';
	import GridComponent from '../../components/common/GridComponent.svelte';
	import UnderlineLink from '../../components/common/UnderlineLink.svelte';
	import TechComponent from '../../components/common/TechComponent.svelte';
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

	{#each work as experience}
		<div id={experience.id}>
			<div
				class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
			/>
			<!-- Work Experience -->

			<div class="pt-8 flex flex-col gap-4">
				<!-- Title -->
				<div class="flex-row flex gap-6 justify-between items-center">
					<div class="flex gap-2 font-medium text-3xl flex-wrap">
						{$_(experience.type)}
						{$_('page.work.at')}
						<UnderlineLink underline url={experience.companyUrl ?? ''}
							>{experience.company}</UnderlineLink
						>
					</div>
					<p class="uppercase text-dark-one font-medium">{experience.year}</p>
				</div>

				<!-- Gallery -->
				{#if experience.images}
					<GridComponent images={experience.images} />
				{/if}

				<!-- Overview -->
				{#if experience.overview}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">{$_('page.work.overview')}</p>
						<p>{$_(experience.overview)}</p>
					</div>
				{/if}

				<!-- Requirements -->
				{#if experience.requirements}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">{$_('page.work.requirements')}</p>
						<ol class="ml-8 list-disc list-outside w-full gap-2 flex flex-col">
							{#each experience.requirements as req}
								<!-- Single issue -->
								<li>{$_(req)}</li>
							{/each}
						</ol>
					</div>
				{/if}

				<!-- Technologies -->
				{#if experience.technologies}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">{$_('page.work.tech')}</p>
						<div class="flex w-full flex-wrap gap-4">
							{#each experience.technologies as tech}
								<!-- Single tech div -->
								<TechComponent {tech} />
							{/each}
						</div>
					</div>
				{/if}

				<!-- Issues -->
				{#if experience.issues}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">{$_('page.projects.challenges')}</p>
						<ol class="ml-8 list-disc list-outside w-full gap-2 flex flex-col">
							{#each experience.issues as issue}
								<!-- Single issue -->
								<li>{$_(issue)}</li>
							{/each}
						</ol>
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
