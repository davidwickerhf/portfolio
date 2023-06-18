<script lang="ts">
	import { publications } from '$lib/constants/constants';
	import type { Publication } from '$lib/constants/constants';

	import { _ } from 'svelte-i18n';
	import TextButton from '../../components/common/TextButton.svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { selected, setSelected } from '$lib/store/SelectedProjectStore';

	export let publication: Publication;
	$: open = $selected === publication.id;
</script>

<div class="w-full border-alabaster-three dark:border-dark-three border-2 flex flex-col">
	<div
		class="justify-center flex flex-col gap-9 @2xl/content:flex-row @2xl/content:justify-start px-9 py-9"
	>
		<!-- Image -->
		<div class=" w-full @2xl/content:w-fit items-start justify-center flex grow-0">
			<img alt="" class="max-h-72" src="images/publications/{publication.image}" />
		</div>

		<!-- Contents -->
		<div class=" flex flex-col gap-4 w-full items-start">
			<div class="flex w-full gap-4 items-start">
				<!-- Heading -->
				<div class="flex flex-col gap-4 w-full">
					<div class="flex gap-6 w-full justify-between">
						<div class="flex flex-col">
							<p class="font-medium text-xl">{$_(publication.title)}</p>
							<p class="text-dark-three/50 dark:text-alabaster-three/50">
								{$_('general.by')}
								{#each publication.authors as author}<span class="pr-2">{author},</span>{/each}
								{$_('general.through')}
								{publication.publisher}
							</p>
							<p class="text-dark-three/50 dark:text-alabaster-three/50">
								Pubblished in {publication.year}
							</p>
						</div>

						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<span
							class="material-symbols-outlined"
							on:click={() => {
								if (open) setSelected('');
								else setSelected(publication.id);
							}}
							on:mouseover={isHovering}
							on:focus={isHovering}
							on:blur={isNotHovering}
							on:mouseout={isNotHovering}>{open ? 'close' : 'add'}</span
						>
					</div>
				</div>
			</div>

			<!-- Action button -->
			{#if publication.url}
				<div class="w-fit">
					<TextButton text="Get a copy" url={publication.url} />
				</div>
			{/if}
		</div>
	</div>

	<!-- Description -->
	{#if open}
		<p class="w-full px-9 pb-9">{$_(publication.description)}</p>
	{/if}
</div>
