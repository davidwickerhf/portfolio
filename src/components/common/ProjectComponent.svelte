<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	import { _ } from 'svelte-i18n';

	export let title: string;
	export let description: string;
	export let url: string;
</script>

<div
	class="w-full lg:w-[260px] border-2 border-alabaster-three dark:border-dark-three cursor-none flex flex-col md:flex-row lg:flex-col"
>
	<!-- Image -->
	<div class="flex md:max-w-xs ">
		<img src="./src/lib/assets/images/activities/tedx-1.jpg" alt="" />
	</div>
	<!-- Conttent + Button -->
	<div class="px-6 py-6 flex flex-col gap-6 justify-between w-full">
		<div>
			<p class="text-xl font-medium">{title}</p>
			<p class="text-sm font-normal">{description}</p>
		</div>
		<!-- Button -->
		<LinkButton title="read more" {url} />
	</div>
</div>
