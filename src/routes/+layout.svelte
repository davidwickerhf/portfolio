<script lang="ts">
	import '../app.css';
	import { theme } from '$lib/store/DarkThemeStore';
	import Navbar from '../components/navbar/Navbar.svelte';
</script>

<!-- style="background-image: url(/{$theme}noise.svg)" -->
<div
	class="fixed h-screen w-screen z-0 bg-fixed bg-ghost"
	style="background-image: url(/{$theme}noise.svg)"
>
	<Navbar />
	<slot />
</div>
