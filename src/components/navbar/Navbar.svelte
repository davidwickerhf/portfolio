<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { toggleSidebar, sidebar } from '$lib/store/SidebarStore';
	import Logo from '../common/Logo.svelte';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<!--  style="background-image: url(/{$theme}noise.svg)" -->
<div
	class="fixed w-screen px-8 sm:px-16 border-b-2 border-alabaster-three dark:border-dark-three justify-between flex items-center max-h-24 z-10 bg-ghost dark:bg-dark-five"
>
	<!-- Logo -->
	<div class="py-6 border-r-2 border-alabaster-three dark:border-dark-three w-32 sm:w-60">
		<Logo />
	</div>

	<!-- Toggles -->
	<div class="flex gap-3 h-full">
		<div class="gap-3 h-full hidden sm:flex">
			<!-- Language toggle -->
			<LanguageToggle />

			<!-- Theme toggle -->
			<ThemeToggle />
		</div>

		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}
			on:click={() => toggleSidebar()}
			class="w-12 h-12 flex items-center justify-center   border-2 border-dark-three dark:border-alabaster-three hover:bg-dark-three hover:text-alabaster-three dark:text-alabaster-three dark:hover:bg-alabaster-three dark:hover:text-dark-three md:hidden {$sidebar.scrolled
				? ''
				: 'hidden'}"
		>
			<span class="material-symbols-outlined text-lg">menu</span>
		</div>
	</div>
</div>
<div class="h-[94px]" />
