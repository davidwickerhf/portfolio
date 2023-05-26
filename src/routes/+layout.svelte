<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Logo from '../components/common/Logo.svelte';
</script>

<!-- style="background-image: url(/{$theme}noise.svg)" -->
<div class="w-screen z-0 bg-fixed bg-ghost dark:bg-dark-five">
	<Navbar />
	<div class="px-8 sm:px-16 md:px-24">
		<slot />
	</div>
</div>
<footer class="bg-dark-three text-alabaster-three">
	<div class="flex">
		<dir>
			<p>socials</p>
		</dir>
	</div>
	<div
		class="w-screen px-8 sm:px-16 border-t-2 border-dark-five justify-between flex items-center max-h-24 text-sm"
	>
		<!-- Logo -->
		<div class="py-6 border-r-2 border-dark-five text-alabaster-three w-32 sm:w-60">
			<Logo invert />
		</div>
		<p class=" font-normal ml-6">© 2023 Wicker Life. All rights reserved.</p>
	</div>
</footer>
