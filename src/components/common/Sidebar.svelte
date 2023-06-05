<script lang="ts">
	import LinkButton from './LinkButton.svelte';
	import UnderlineLink from './UnderlineLink.svelte';

	import { scrolled } from '$lib/store/ScrolledStore';
	import { page } from '$app/stores';

	let tabs = [
		{ id: 1, name: 'welcome!', url: '/', icon: 'home' },
		{ id: 2, name: 'academics', url: '/academics', icon: 'school' },
		{ id: 3, name: 'extracurriculars', url: '/extracurriculars', icon: 'camping' },
		{ id: 4, name: 'certifications', url: '/certifications', icon: 'badge' },
		{ id: 5, name: 'work experience', url: '/work', icon: 'apartment' },
		{ id: 6, name: 'activism', url: '/activism', icon: 'nature' },
		{ id: 7, name: 'publications', url: '/publications', icon: 'feed' },
		{ id: 8, name: 'personal projects', url: '/projects', icon: 'integration_instructions' },
		{ id: 9, name: 'photography', url: '/photography', icon: 'photo_camera' }
	];
</script>

<div
	class="{$scrolled
		? 'w-[304px]'
		: 'w-0'} transition-all ease-in-out duration-300 flex-shrink-0 flex-grow-0"
>
	<div
		class="flex flex-col justify-between h-screen pt-24 overflow-hidden border-r-2 border-alabaster-three dark:border-dark-three text-dark-three dark:text-alabaster-three"
	>
		<nav class="px-8 sm:px-12 py-8 flex flex-col gap-8 overflow-scroll">
			{#each tabs as tab}
				<UnderlineLink underline={$page.url.pathname == tab.url} left url={tab.url} icon={tab.icon}
					>{tab.name}</UnderlineLink
				>
			{/each}
		</nav>

		<div class="px-8 sm:px-12 py-5 border-t-2 border-alabaster-three dark:border-dark-three">
			<LinkButton title="contact me" url="/contact" green />
		</div>
	</div>
</div>
