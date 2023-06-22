<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	import { _ } from 'svelte-i18n';

	export let title: string;
	export let description: string;
	export let url: string;
	export let resource: string;
</script>

<div
	class="w-full border-2 border-alabaster-three dark:border-dark-three cursor-none flex flex-col @2xl/content:flex-row @4xl/content:flex-col"
>
	<!-- Image -->
	<div class="flex @2xl/content:max-w-[240px] @4xl/content:max-w-none">
		<img src="/images/{resource}" alt="" class="w-auto h-auto object-cover" />
	</div>

	<!-- Conttent + Button -->
	<div class="px-6 py-6 flex w-full h-full flex-col gap-6 justify-between">
		<div>
			<p class="text-xl font-medium">{title}</p>
			<p class="text-sm font-normal">{$_(description)}</p>
		</div>
		<!-- Button -->
		<LinkButton {url}>{$_('general.read-more')}</LinkButton>
	</div>
</div>
