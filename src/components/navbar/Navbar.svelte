<script lang="ts">
	import Logo from '../common/Logo.svelte';
	import LanguageToggle from './LanguageToggle.svelte';
	import ThemeToggle from './ThemeToggle.svelte';
</script>

<div class="w-screen px-16 border-b-2 border-alabaster-three justify-between flex items-center">
	<!-- Logo -->
	<div class="py-6 border-r-2 border-alabaster-three  w-60">
		<Logo />
	</div>

	<!-- Toggles -->
	<div class="flex gap-3 h-full">
		<!-- Language toggle -->
		<LanguageToggle />

		<!-- Theme toggle -->
		<ThemeToggle />
	</div>
</div>
