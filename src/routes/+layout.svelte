<script lang="ts">
	import '../app.css';
	import LanguageToggle from '../components/LanguageToggle.svelte';
	import { DarkMode } from 'flowbite-svelte';
	import ThemeToggle from '../components/ThemeToggle.svelte';

	console.log('Loaded Layout');
</script>

<div class="fixed flex w-full justify-end px-6 py-6 gap-3">
	<LanguageToggle />
	<ThemeToggle />
</div>
<slot />
