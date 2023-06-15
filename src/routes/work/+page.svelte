<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { work } from '$lib/constants/constants';
	import GridComponent from '../photography/GridComponent.svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import UnderlineLink from '../../components/common/UnderlineLink.svelte';
</script>

<div class="flex w-full flex-col gap-6">
	<h2>work experience.</h2>
	<p>{$_('general.lorem-ipsum-short')}</p>

	<div class="flex w-full justify-between flex-wrap gap-6">
		<TextButton text="work with me" url="/contact" />
		<TextButton text="view my other projects" url="/projects" />
	</div>

	{#each work as experience}
		<div>
			<div
				class="absolute w-[150%] border-t-2 border-alabaster-three dark:border-dark-three left-[-20%]"
			/>
			<!-- Work Experience -->

			<div class="pt-8 flex flex-col gap-4">
				<!-- Title -->
				<div class="flex-row flex gap-6 justify-between items-center">
					<div class="font-medium text-3xl">
						{experience.type} at <UnderlineLink underline url={experience.companyUrl ?? ''}
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
						<p class="uppercase text-lg font-medium">Project Overview</p>
						<p>{$_(experience.overview)}</p>
					</div>
				{/if}

				<!-- Requirements -->
				{#if experience.requirements}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">Project Requirements</p>
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
						<p class="uppercase text-lg font-medium">Technologies Used</p>
						<div class="flex w-full flex-wrap gap-4">
							{#each experience.technologies as tech}
								<!-- Single tech div -->
								<a
									on:mouseover={isHovering}
									on:focus={isHovering}
									on:blur={isNotHovering}
									on:mouseout={isNotHovering}
									href={tech.url ? tech.url : '/projects'}
									class="py-6 px-9 border-alabaster-three dark:border-dark-three border-2 hover:bg-alabaster-three dark:hover:bg-dark-three"
								>
									{tech.title}
								</a>
							{/each}
						</div>
					</div>
				{/if}

				<!-- Issues -->
				{#if experience.issues}
					<div class="w-full flex flex-col gap-2">
						<p class="uppercase text-lg font-medium">Challenges</p>
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
