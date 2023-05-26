<script lang="ts">
	import ComponentLink from '../common/ComponentLink.svelte';
	import { _ } from 'svelte-i18n';

	export let date: string;
	export let current: boolean = false;
	export let last: boolean = false;
</script>

<div class="relative">
	<div class="flex  w-full items-stretch">
		<!-- Date -->
		<!-- <div class="flex flex-col min-h-fit">
			<p class=" w-[142px] flex-nowrap break-keep px-6 text-alabaster-five">{date}</p>
			<div class="flex w-full h-[2px] bg-alabaster-three dark:bg-dark-three" />
		</div> -->

		<div
			class="border-alabaster-three dark:border-dark-three grid grid-rows-[auto_min-content_auto]"
		>
			<div class="border-l-2 dark:border-dark-three" />
			<div class="border-l-2 max-h-fit dark:border-dark-three">
				<p class=" w-[142px] flex-nowrap break-keep px-6 text-alabaster-five">{date}</p>
				<div class="flex w-full h-[2px] bg-alabaster-three dark:bg-dark-three" />
			</div>
			{#if last}
				<div class="border-l-0 dark:border-dark-three" />
			{:else}
				<!-- else content here -->
				<div class="border-l-2 dark:border-dark-three" />
			{/if}
		</div>

		<!-- Button -->
		<ComponentLink url={'/academics'} filled={current}><slot /></ComponentLink>
	</div>
</div>
