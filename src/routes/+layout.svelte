<script lang="ts">
	import Sidebar from '../components/common/Sidebar.svelte';

	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Logo from '../components/common/Logo.svelte';
	import MouseCursor from '../components/common/MouseCursor.svelte';

	import { tabs, socials } from '$lib/constants/constants';
	import UppercaseLink from '../components/common/UppercaseLink.svelte';
	import { page } from '$app/stores';
	import LinkButton from '../components/common/LinkButton.svelte';

	$: currentTab = tabs.find((t) => t.url == $page.url.pathname);
	$: prevTab = currentTab ? tabs.find((t) => t.id === currentTab!.id - 1) : undefined;
	$: nextTab = currentTab ? tabs.find((t) => t.id === currentTab!.id + 1) : undefined;
</script>

<!-- style="background-image: url(/{$theme}noise.svg)" -->

<svelte:head>
	<title
		>{currentTab?.name
			? currentTab.name.charAt(0).toUpperCase() + currentTab.name.slice(1)
			: 'David Wicker'}</title
	>
</svelte:head>

<MouseCursor />
<Navbar />
<div class="fixed flex h-full overflow-hidden w-screen">
	<!-- Sidebar -->
	<Sidebar />

	<!-- Content -->
	<div
		class="@container/content w-full overflow-scroll flex flex-col justify-between h-[100dvh] pt-24 text-dark-three dark:text-alabaster-three"
	>
		<div
			class="px-6 @xl/content:px-12 @2xl/content:px-16 @4xl/content:px-24 z-0 bg-fixed bg-ghost dark:bg-dark-five flex flex-col gap-4"
		>
			<!-- Navigation (back and forth) -->
			{#if currentTab?.id != 1}
				<div class="w-full flex justify-between mt-8">
					{#if prevTab}<UppercaseLink left url={prevTab?.url}>{prevTab?.name}</UppercaseLink> {/if}
					{#if nextTab}
						<div class="hidden sm:inline">
							<UppercaseLink url={nextTab?.url}>{nextTab?.name}</UppercaseLink>
						</div>
					{/if}
				</div>
			{/if}
			<slot />
			{#if nextTab}
				<div
					class="flex w-full items-center {currentTab?.id === 1
						? 'justify-between'
						: 'justify-end'} w-full flex-wrap text-dark-three dark:text-alabaster-three gap-4"
				>
					{#if currentTab?.id === 1}
						<div class="flex gap-2 items-center">
							<p>Continue on the next page</p>
							<span class="material-symbols-outlined">chevron_right</span>
						</div>
					{/if}

					<div class="flex  justify-end">
						<LinkButton title={nextTab?.name} url={nextTab?.url} />
					</div>
				</div>
			{/if}
		</div>
		<footer class="bg-dark-three text-alabaster-three mt-12">
			<div class="flex px-6 @xl/content:px-12 @2xl/content:px-16 @4xl/content:px-24 py-6 gap-12">
				<div class="">
					<p class="text-lg font-medium">contents</p>
					{#each tabs as tab}
						<li class="list-none mt-2 font-thin text-sm">
							<a href={tab.url} class="hover:underline">{tab.name}</a>
						</li>
					{/each}
				</div>
				<div class="">
					<p>socials</p>
					{#each socials as social}
						<li class="list-none mt-2 font-thin text-sm">
							<a href={social.url} class="hover:underline">{social.name}</a>
						</li>
					{/each}
				</div>
			</div>
			<div
				class="w-full px-6 @xl/content:px-12 @2xl/content:px-16 @4xl/content:px-24 border-t-2 border-dark-five justify-between flex items-center max-h-24 text-sm"
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
