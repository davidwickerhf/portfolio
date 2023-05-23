<script lang="ts">
	import ComponentLink from '../common/ComponentLink.svelte';
	import { _ } from 'svelte-i18n';

	export let date: string;
	export let current: boolean = false;
	export let last: boolean = false;
</script>

<div class="relative">
	<div class="flex items-center w-full">
		<!-- Date -->
		<div class="flex flex-col min-h-fit">
			<p class=" w-[142px] flex-nowrap break-keep px-6 text-alabaster-five">{date}</p>
			<div class="flex w-full h-[2px] bg-alabaster-three dark:bg-dark-three" />
		</div>
		<!-- Button -->
		<ComponentLink url={'/academics'} filled={current}><slot /></ComponentLink>
	</div>
	{#if last}
		<div class="absolute left-[-2px] bottom-0 h-[37px] w-10 bg-ghost dark:bg-dark-five lg:" />
	{/if}
</div>
