<script lang="ts">
	import LinkButton from './LinkButton.svelte';
	import UnderlineLink from './UnderlineLink.svelte';

	import { sidebar, toggleSidebar } from '$lib/store/SidebarStore';
	import { page } from '$app/stores';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import LanguageToggle from '../navbar/LanguageToggle.svelte';
	import ThemeToggle from '../navbar/ThemeToggle.svelte';

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
	class="{$sidebar.scrolled && $sidebar.open ? 'w-full' : 'w-0'} {$sidebar.scrolled
		? 'md:w-[304px]'
		: 'w-0'} transition-all ease-in-out duration-300 flex-shrink-0 flex-grow-0"
>
	<div
		class="flex flex-col justify-between h-screen pt-24 overflow-hidden border-r-2 border-alabaster-three dark:border-dark-three text-dark-three dark:text-alabaster-three"
	>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div class="flex w-full justify-between px-8 sm:hidden pt-2 items-center">
			<div class="flex gap-3">
				<ThemeToggle />
				<LanguageToggle />
			</div>
			<span
				class="material-symbols-outlined"
				on:mouseover={isHovering}
				on:focus={isHovering}
				on:blur={isNotHovering}
				on:mouseout={isNotHovering}
				on:click={() => toggleSidebar()}>close</span
			>
		</div>
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
