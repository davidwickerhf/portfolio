<script lang="ts">
	import ComponentLink from '../common/ComponentLink.svelte';
	import { _ } from 'svelte-i18n';

	export let date: string;
	export let current: boolean = false;
	export let last: boolean = false;
</script>

<div class="relative">
	<div class="flex flex-col @lg/content:flex-row w-full items-stretch">
		<div
			class="border-alabaster-three dark:border-dark-three grid grid-rows-[auto_min-content_auto]"
		>
			<div class="@lg/content:border-l-2 dark:border-dark-three" />
			<div class="@lg/content:border-l-2 max-h-fit dark:border-dark-three">
				<p
					class="@lg/content:w-[142px] flex-nowrap break-keep @lg/content:px-6 text-alabaster-five pb-2 @lg/content:pb-0"
				>
					{date}
				</p>
				<div class="flex w-full @lg/content:h-[2px] bg-alabaster-three dark:bg-dark-three" />
			</div>
			{#if last}
				<div class="@lg/content:border-l-0 dark:border-dark-three" />
			{:else}
				<!-- else content here -->
				<div class="@lg/content:border-l-2 dark:border-dark-three" />
			{/if}
		</div>

		<!-- Button -->
		<ComponentLink url={'/academics'} filled={current}><slot /></ComponentLink>
	</div>
</div>
