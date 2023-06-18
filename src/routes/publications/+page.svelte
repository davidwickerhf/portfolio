<script lang="ts">
	import { publications } from '$lib/constants/constants';

	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
</script>

<div class="flex flex-col gap-6 w-full">
	<h2>publications.</h2>

	{#each publications as publication}
		<div
			class="w-full border-alabaster-three dark:border-dark-three border-2 justify-center flex flex-col @2xl/content:flex-row @2xl/content:justify-start"
		>
			<!-- Image -->
			<div
				class="py-9 @2xl/content:pl-9 w-full @2xl/content:w-fit items-start justify-center flex grow-0"
			>
				<img alt="" class="max-h-72" src="images/publications/{publication.image}" />
			</div>

			<!-- Contents -->
			<div class="flex flex-col p-9 h-full w-full gap-4">
				<!-- Heading -->
				<div class="flex flex-col gap-4 h-full w-full">
					<div class="flex gap-4 w-full justify-between">
						<div class="flex flex-col">
							<p class="font-medium text-xl">{$_(publication.title)}</p>
							<p class="text-dark-three/50 dark:text-alabaster-three/50">
								{$_('general.by')}
								{#each publication.authors as author}<span class="pr-2">{author},</span>{/each}
								{$_('general.through')}
								{publication.publisher}
							</p>
						</div>
						<p class="font-medium">{publication.year}</p>
					</div>

					<!-- Description -->
					<p class="w-full">{$_(publication.description)}</p>
				</div>

				<!-- Action button -->
				{#if publication.url}
					<div class="w-fit">
						<TextButton text="Get a copy" url={publication.url} />
					</div>
				{/if}
			</div>
		</div>
	{/each}
</div>
