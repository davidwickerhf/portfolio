<script lang="ts">
	import ProjectComponent from './PersonalProjectComponent.svelte';

	import { projects } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';
</script>

<div class="flex flex-col gap-6 w-full">
	<h2>personal projects.</h2>

	<div class="flex flex-col gap-4 mt-4">
		{#each projects as project}
			<!-- Project div -->
			<ProjectComponent {project} />
		{/each}
	</div>
</div>
