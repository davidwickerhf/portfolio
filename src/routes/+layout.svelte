<script lang="ts">
	import Sidebar from '../components/common/Sidebar.svelte';

	import '../app.css';
	import Navbar from '../components/navbar/Navbar.svelte';
	import Logo from '../components/common/Logo.svelte';
	import MouseCursor from '../components/common/MouseCursor.svelte';

	import { tabs, socials } from '$lib/constants/constants';
	import UppercaseLink from '../components/common/UppercaseLink.svelte';
	import { page } from '$app/stores';
	import { afterNavigate } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import LinkButton from '../components/common/LinkButton.svelte';

	$: currentTab = tabs.find((t) => t.url == $page.url.pathname);
	$: prevTab = currentTab ? tabs.find((t) => t.id === currentTab!.id - 1) : undefined;
	$: nextTab = currentTab ? tabs.find((t) => t.id === currentTab!.id + 1) : undefined;

	afterNavigate(() => {
		document.getElementById('content')?.scrollTo(0, 0);
	});
</script>

<!-- style="background-image: url(/{$theme}noise.svg)" -->

<svelte:head>
	<title>Wicker • {$_(currentTab?.name ?? 'David Wicker')}</title>
	<link rel="icon" type="image/svg" href="logos/wicker.svg" />
</svelte:head>

<MouseCursor />
<Navbar />
<div class="fixed flex h-full overflow-hidden w-screen">
	<!-- Sidebar -->
	<Sidebar />

	<!-- Content -->
	<div
		id="content"
		class="@container/content w-full overflow-scroll flex flex-col justify-between h-[calc(100dvh-94px)] text-dark-three dark:text-alabaster-three overflow-x-hidden"
	>
		<div
			class="px-6 @xl/content:px-12 @2xl/content:px-16 @4xl/content:px-24 z-0 bg-fixed bg-ghost dark:bg-dark-five flex flex-col gap-4"
		>
			<!-- Navigation (back and forth) -->
			{#if currentTab?.id != 1}
				<div class="w-full justify-between mt-8 hidden @lg/content:flex">
					{#if prevTab}
						<UppercaseLink left url={prevTab?.url}>
							{$_(prevTab?.name)}
						</UppercaseLink>
					{/if}
					{#if nextTab}
						<div class="">
							<UppercaseLink url={nextTab?.url}>{$_(nextTab?.name)}</UppercaseLink>
						</div>
					{/if}
				</div>
				<!-- @lg/content:inline -->
				<div class="w-full flex justify-between mt-8 @lg/content:hidden">
					{#if prevTab}<UppercaseLink left url={prevTab?.url}>previous</UppercaseLink> {/if}
					{#if nextTab}
						<div class="">
							<UppercaseLink url={nextTab?.url}>next</UppercaseLink>
						</div>
					{/if}
				</div>
			{/if}

			<!-- Contents -->
			<slot />

			<!-- Next tab button -->
			{#if nextTab}
				<div
					class="mt-11 flex w-full items-center {currentTab?.id === 1
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
						<LinkButton url={nextTab?.url}>{$_(nextTab?.name)}</LinkButton>
					</div>
				</div>
			{/if}
		</div>

		<!-- FOOTER -->
		<footer class="bg-dark-three text-alabaster-three mt-12">
			<div class="flex px-6 @xl/content:px-12 @2xl/content:px-16 @4xl/content:px-24 py-6 gap-12">
				<div class="">
					<p class="text-lg font-medium">{$_('contents')}</p>
					{#each tabs as tab}
						<li class="list-none mt-2 font-thin text-sm">
							<a href={tab.url} class="hover:underline">{$_(tab.name)}</a>
						</li>
					{/each}
				</div>
				<div class="">
					<p class="text-lg font-medium">socials</p>
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
