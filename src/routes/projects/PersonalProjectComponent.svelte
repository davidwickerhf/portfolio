<script lang="ts">
	import TechComponent from '../../components/common/TechComponent.svelte';

	import type { PersonalProject } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';

	import { selected, setSelected } from '$lib/store/SelectedProjectStore';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import LinkButton from '../../components/common/LinkButton.svelte';
	import GridComponent from '../../components/common/GridComponent.svelte';

	export let project: PersonalProject;
	$: open = $selected === project.id;
</script>

<div
	id={project.id}
	class="w-full border-2 border-alabaster-three dark:border-dark-three p-8 flex flex-col gap-6 "
>
	<!-- Heading -->
	<div class="flex flex-col @xl/content:items-start gap-8 @xl/content:flex-row">
		<!-- Logo -->
		{#if project.logo}
			<img alt="" src="logos/{project.logo}" class="max-h-48 @xl/content:max-h-32" />
		{/if}
		<!-- Title -->
		<div class="flex flex-col gap-4">
			<div class="flex justify-between w-full items-center gap-4">
				<div class="flex flex-col">
					<p class="text-xl font-medium">{$_(project.title)}</p>
					<p class="text-dark-one">({project.year}) {$_(project.subtitle)}</p>
				</div>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<span
					on:click={() => {
						if (open) setSelected('');
						else setSelected(project.id);
					}}
					on:mouseover={isHovering}
					on:focus={isHovering}
					on:blur={isNotHovering}
					on:mouseout={isNotHovering}
					class="material-symbols-outlined">{$selected === project.id ? 'close' : 'add'}</span
				>
			</div>
			<!-- Short description -->
			<p>{$_(project.shortDescription)}</p>
		</div>
	</div>

	<!-- Optional Content -->
	<div
		class="w-full flex flex-col gap-4 {$selected === project.id
			? 'max-h-[1500000px]'
			: ' max-h-0'} overflow-hidden transition-[max-height] ease-in-out duration-200"
	>
		<!-- Images  -->
		{#if project.images}
			<!-- Show images -->
			<GridComponent maxcols={2} images={project.images} />
		{/if}
		<!-- Long description -->
		{#if project.longDescription}
			<div class="w-full flex flex-col gap-2">
				<p class="uppercase text-lg font-medium">{$_('page.work.overview')}</p>
				<p>{$_(project.longDescription)}</p>
			</div>
		{/if}

		<!-- Technologies used -->
		{#if project.technologies}
			<div class="w-full flex flex-col gap-2">
				<p class="uppercase text-lg font-medium">{$_('page.work.tech')}</p>
				<div class="flex w-full flex-wrap gap-4">
					{#each project.technologies as tech}
						<!-- Single tech div -->
						<TechComponent {tech} />
					{/each}
				</div>
			</div>
		{/if}

		<!-- Issues faced -->
		{#if project.issues}
			<div class="w-full flex flex-col gap-2">
				<p class="uppercase text-lg font-medium">{$_('page.projects.challenges')}</p>
				<ol class="ml-8 list-disc list-outside w-full gap-2 flex flex-col">
					{#each project.issues as issue}
						<!-- Single issue -->
						<li>{$_(issue)}</li>
					{/each}
				</ol>
			</div>
		{/if}

		<!-- Code sandbox -->
		<!-- {#if project.sandbox}
			<div class="w-full flex flex-col gap-2">
				<p class="uppercase text-lg font-medium">Code sandbox</p>
			</div>
		{/if} -->
	</div>

	<!-- Links -->
	<div class="flex gap-4 @2xl/content:flex-row flex-col justify-between flex-wrap">
		<!-- Links -->
		<div
			class="flex gap-4 @xl/content:flex-row flex-col w-full justify-between @2xl/content:w-fit @2xl/content:justify-start"
		>
			{#if project.url}
				<div class="@2xl/content:w-fit w-full">
					<LinkButton url={project.url}>{$_('page.projects.view')}</LinkButton>
				</div>
			{/if}
			{#if project.github}
				<div class="@2xl/content:w-fit w-full">
					<LinkButton url={project.github}>{$_('page.projects.code')}</LinkButton>
				</div>
			{/if}
		</div>

		<!-- Read more or less -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="flex text-lg align-middle items-center hover:scale-110 transition-all ease-in-out w-fit"
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}
			on:click={() => {
				if (open) setSelected('');
				else setSelected(project.id);
			}}
		>
			<p class="whitespace-nowrap">{open ? $_('general.read-less') : $_('general.read-more')}</p>
			<span class="material-symbols-outlined"> chevron_right </span>
		</div>
	</div>
</div>
