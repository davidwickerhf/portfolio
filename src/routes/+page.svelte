<script lang="ts">
	import ImageComponent from './ImageComponent.svelte';

	import ProjectComponent from '../components/common/ProjectComponent.svelte';

	import InstitutionLink from '../components/hero/InstitutionLink.svelte';

	import { _ } from 'svelte-i18n';
	import UnderlineLink from '../components/common/UnderlineLink.svelte';
	import TextButton from '../components/common/TextButton.svelte';
	import MouseCursor from '../components/common/MouseCursor.svelte';
	import GlitchTitle from '../components/hero/GlitchTitle.svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { scrollRef, scrollTo } from 'svelte-scrolling';
	import ComponentLink from '../components/common/ComponentLink.svelte';
	import LinkButton from '../components/common/LinkButton.svelte';

	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';

	// Carousel
	let carousel: HTMLElement;

	// Transitions
	let academics: boolean;
	let projects: boolean;
	let work: boolean;
	let civics: boolean;
	let gallery: boolean;
	let reachedEnd: boolean = false;
</script>

<MouseCursor />
<!-- Landing Section -->
<div class="gap-48 flex flex-col pb-24">
	<section class="w-full min-h-screen flex justify-center items-center pt-24">
		<div class="flex m-auto max-w-4xl   flex-col gap-4 text-dark-three dark:text-alabaster-two">
			<!-- definition of -->
			<p class="text-dark-one font-medium text-lg">{$_('page.home.definition-of')}</p>

			<!-- title -->
			<div class="flex flex-col gap-2">
				<div class="flex gap-6 items-baseline flex-wrap ">
					<GlitchTitle title={'david wicker'} />
					<p class=" text-green-three font-medium text-lg md:text-xl lg:text-2xl">
						{$_('page.home.proper-noun')}
					</p>
				</div>
				<p class="text-dark-one font-medium">da・vid (ˈdā-vəd)</p>
			</div>

			<!-- content -->
			<p>{$_('page.home.intro')}</p>

			<!-- action btns -->
			<div class="flex justify-between mt-4 flex-wrap-reverse gap-8">
				<TextButton text={'view my curriculum'} url="/curriculum" />
				<div class="flex gap-8">
					<UnderlineLink url="https://instagram.com/davidwickerhf">instagram</UnderlineLink>
					<UnderlineLink url="https://linkedin.com/in/davidwickerhf">linkedin</UnderlineLink>
					<UnderlineLink url="https://github.com/davidwickerhf">github</UnderlineLink>
				</div>
			</div>

			<div class="cursor-none hover:cursor-none flex w-full justify-center mt-12">
				<div
					class="rounded-full border border-dark-one w-14 h-14  transition ease-in-out hover:scale-150 duration-300 flex justify-center items-center text-dark-one dark:text-alabaster-two cursor-none hover:cursor-none"
					on:mouseover={isHovering}
					on:focus={isHovering}
					on:blur={isNotHovering}
					on:mouseout={isNotHovering}
					use:scrollTo={{ ref: 'Academics', offset: -100 }}
				>
					<span class="material-symbols-outlined font-extralight cursor-none hover:cursor-none">
						arrow_downward
					</span>
				</div>
			</div>
		</div>
	</section>

	<!-- Academics widget -->
	<section
		class="w-full flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			academics = event.detail.inView;
		}}
	>
		{#if academics}
			<div
				in:fade
				class="flex w-full m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two"
			>
				<!-- Section heading -->
				<span class="flex">
					<h2
						use:scrollRef={'Academics'}
						class="sm:border-b-2 border-alabaster-three dark:border-dark-three"
					>
						academics
					</h2>
				</span>

				<!-- Academics widget -->
				<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-8" />
				<div class="flex flex-col">
					<InstitutionLink date="2014 - 2018">{$_('page.home.giacomo')}</InstitutionLink>
					<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2018 - 2023" current={true}
						>{$_('page.home.pascal')}</InstitutionLink
					>
					<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2021 - 2022">{$_('page.home.uwcdilijan')}</InstitutionLink>
					<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2023 - 2026" last={true}
						>{$_('page.home.maastricht')}</InstitutionLink
					>
				</div>
			</div>
		{/if}
	</section>

	<!-- Projects widget -->
	<section
		class="w-full flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			projects = event.detail.inView;
		}}
	>
		{#if projects}
			<div
				in:fade
				class="w-full flex m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two"
			>
				<h2>{$_('page.home.projects')}</h2>

				<!-- Row of widgets -->
				<div class="flex flex-col lg:flex-row mt-6 gap-6 justify-between">
					<!-- Single project widget -->
					<ProjectComponent
						title="TedX Youth"
						description="TedX Youth Conference organized at UWC Dilijan"
						url="/extracurriculars"
						resource="activities/tedx-1.jpg"
					/>
					<ProjectComponent
						title="TedX Youth"
						description="TedX Youth Conference organized at UWC Dilijan"
						url="/extracurriculars"
						resource="activities/tedx-1.jpg"
					/>
					<ProjectComponent
						title="TedX Youth"
						description="TedX Youth Conference organized at UWC Dilijan"
						url="/extracurriculars"
						resource="activities/tedx-1.jpg"
					/>
				</div>
			</div>
		{/if}
	</section>

	<!-- Work Experience -->
	<section
		class="w-full flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			work = event.detail.inView;
		}}
	>
		{#if work}
			<div
				in:fade
				class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two gap-6"
			>
				<h2>work experience</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<ComponentLink url={'/'}>Mediamente Consulting</ComponentLink>
			</div>
		{/if}
	</section>

	<!-- Civics -->
	<section
		class="w-full flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			civics = event.detail.inView;
		}}
	>
		{#if civics}
			<div
				in:fade
				class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two gap-6"
			>
				<h2>civics</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
					sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
					est laborum.
				</p>
				<ComponentLink url={'/'}>Project Armenia</ComponentLink>
			</div>
		{/if}
	</section>

	<!-- Gallery -->
	<section
		class="w-full flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			gallery = event.detail.inView;
		}}
	>
		{#if gallery}
			<div
				in:fade
				class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two"
			>
				<div
					class="flex w-full justify-between items-center gap-2 transition-all ease-in-out duration-200"
				>
					<h2>photo gallery</h2>
					<div
						class="flex border-2 h-12 items-center border-dark-three dark:border-alabaster-three"
						on:mouseover={isHovering}
						on:focus={isHovering}
						on:blur={isNotHovering}
						on:mouseout={isNotHovering}
					>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="flex w-12 justify-center text-center h-full items-center border-r border-dark-three dark:border-alabaster-three hover:bg-dark-three hover:text-alabaster-two dark:hover:bg-alabaster-three dark:hover:text-dark-three"
							on:click={() => carousel.scrollBy({ left: -500, behavior: 'smooth' })}
						>
							<span class="material-symbols-outlined  text-2xl">chevron_left</span>
						</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="flex w-12 justify-center text-center h-full items-center border-l border-dark-three dark:border-alabaster-three hover:bg-dark-three hover:text-alabaster-two dark:hover:bg-alabaster-three dark:hover:text-dark-three"
							on:click={() => carousel.scrollBy({ left: 500, behavior: 'smooth' })}
						>
							<span class="material-symbols-outlined  text-2xl">chevron_right</span>
						</div>
					</div>
				</div>

				<!-- Scrolling gallery -->
				<div class="overflow-scroll flex w-full gap-6 py-6" bind:this={carousel}>
					<ImageComponent
						title="tedx youth conference"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua."
					/>
					<ImageComponent
						title="tedx youth conference"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua."
						url="/academics"
					/>
					<ImageComponent
						title="tedx youth conference"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua."
					/>
					<ImageComponent
						title="tedx youth conference"
						description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua."
					/>
					<!-- Single div -->
				</div>
			</div>
		{:else}
			<div class="h-screen" />
		{/if}
	</section>

	<div class="flex w-full justify-end">
		<LinkButton title="academics" url={'/academics'} />
	</div>
</div>
