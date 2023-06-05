<script lang="ts">
	import Sidebar from '../components/common/Sidebar.svelte';

	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Logo from '../components/common/Logo.svelte';
	import MouseCursor from '../components/common/MouseCursor.svelte';

	import { scrolled } from '$lib/store/ScrolledStore';
</script>

<!-- style="background-image: url(/{$theme}noise.svg)" -->
<MouseCursor />
<Navbar />
<div class="fixed flex h-full overflow-hidden w-screen">
	<!-- Sidebar -->
	<Sidebar />

	<!-- Content -->
	<div class="@container w-full overflow-scroll inline-block h-screen pt-24">
		<div class="px-8 sm:px-16 md:px-24 z-0 bg-fixed bg-ghost dark:bg-dark-five">
			<slot />
		</div>
		<footer class="bg-dark-three text-alabaster-three">
			<div class="flex">
				<dir>
					<p>socials</p>
				</dir>
			</div>
			<div
				class="w-full px-8 sm:px-16 border-t-2 border-dark-five justify-between flex items-center max-h-24 text-sm"
			>
				<!-- Logo -->
				<div class="py-6 border-r-2 border-dark-five text-alabaster-three w-32 sm:w-60">
					<Logo invert />
				</div>
				<p class=" font-normal ml-6">© 2023 Wicker Life. All rights reserved.</p>
			</div>
		</footer>
	</div>
</div>
