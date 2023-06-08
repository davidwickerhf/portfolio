<script lang="ts">
	import type { School } from '$lib/constants/constants';
	import ActivityComponent from '../../components/academics/ActivityComponent.svelte';
	import { _ } from 'svelte-i18n';
	import { theme } from '$lib/store/DarkThemeStore';

	export let data: School;
	export let border: boolean = true;
</script>

<div class="relative flex flex-col w-full" id={data.id}>
	{#if border}
		<div
			class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
		/>
	{/if}

	<div class="flex justify-between items-center {border ? 'mt-11' : ''}">
		<div class="flex flex-col">
			<!-- Diploma type -->
			<p class="text-dark-one flex flex-col @lg/content:flex-row">
				<span>{data.beginYear} - {data.endYear}</span>
				<span class="hidden @lg/content:inline px-2"> • </span>
				<span>{$_(data.diploma)}</span>
			</p>

			<!-- School header -->
			<div class="flex gap-4 items-center">
				{#if data.logo}
					<div class="h-14 w-auto py-1">
						<!-- svelte-ignore a11y-missing-attribute -->
						<img
							class="h-full w-auto"
							src="/logos/{$theme === 'dark' ? data.darkLogo ?? data.logo : data.logo}"
						/>
					</div>
				{/if}
				<h2>{$_(data.istitution)}</h2>
			</div>
		</div>
	</div>

	<!-- description -->
	<p class="mt-4">
		{$_(data.description)}
	</p>

	<!-- Optional: exam subjects -->
	{#if data.examsubjects && data.examsubjects.length > 0}
		<h3 class="uppercase font-medium mt-6 mb-2 ">Exam subjects</h3>
		<div class="flex flex-wrap gap-6 justify-between">
			<ol class="list-disc list-inside grid auto-cols-min w-full">
				{#each data.examsubjects as subject}
					<!-- content here -->
					<li class="whitespace-nowrap">{$_(subject)}</li>
				{/each}
			</ol>
		</div>
	{/if}

	<!-- Activities and projects -->
	<h3 class="uppercase font-medium mt-6 mb-2">projects and activities</h3>
	<div class="flex flex-col gap-4">
		{#each data.projects as project}
			<ActivityComponent data={project} />
		{/each}
	</div>
</div>
