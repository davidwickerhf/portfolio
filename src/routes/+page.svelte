<script lang="ts">
	import ImageComponent from '../components/hero/ImageComponent.svelte';

	import ProjectComponent from '../components/common/ProjectComponent.svelte';

	import InstitutionLink from '../components/hero/InstitutionLink.svelte';

	import { _ } from 'svelte-i18n';
	import UnderlineLink from '../components/common/UnderlineLink.svelte';
	import TextButton from '../components/common/TextButton.svelte';

	import GlitchTitle from '../components/hero/GlitchTitle.svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { scrollRef, scrollTo } from 'svelte-scrolling';
	import ComponentLink from '../components/common/ComponentLink.svelte';

	import { fade } from 'svelte/transition';
	import { inview } from 'svelte-inview';
	import { setScrolled } from '$lib/store/SidebarStore';
	import { galleryPics } from '$lib/constants/constants';
	import LinkButton from '../components/common/LinkButton.svelte';

	// Carousel
	let carousel: HTMLElement;

	// Transitions
	let academics: boolean;
	let projects: boolean;
	let work: boolean;
	let civics: boolean;
	let gallery: boolean;

	let galleryPageNumber = 4;
	let galleryIndex = 0;

	let shiftPage = (left: boolean = false) => {
		console.log(galleryIndex);
		if (!left) {
			galleryIndex =
				galleryIndex + galleryPageNumber > galleryPics.length
					? 0
					: galleryIndex + galleryPageNumber;
		} else {
			galleryIndex = galleryIndex - galleryPageNumber <= 0 ? 0 : galleryIndex - galleryPageNumber;
		}
		console.log(galleryIndex);
	};
</script>

<!-- Landing Section -->
<div class="gap-48 flex flex-col">
	<section class="min-h-screen flex justify-center items-center">
		<div class="flex max-w-4xl flex-col gap-4 text-dark-three dark:text-alabaster-two">
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
				<TextButton text={$_('page.home.view-my-curriculum')} url="/curriculum" />
				<div class="flex gap-8">
					<UnderlineLink underline url="https://instagram.com/davidwickerhf"
						>instagram</UnderlineLink
					>
					<UnderlineLink underline url="https://linkedin.com/in/davidwickerhf"
						>linkedin</UnderlineLink
					>
					<UnderlineLink underline url="https://github.com/davidwickerhf">github</UnderlineLink>
				</div>
			</div>

			<div class="cursor-none hover:cursor-none flex  justify-center mt-12">
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
			<div in:fade class="w-full flex max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
				<!-- Section heading -->
				<span class="flex">
					<h2
						use:scrollRef={'Academics'}
						class="@lg/content:border-b-2 border-alabaster-three dark:border-dark-three"
					>
						{$_('page.home.academics')}
					</h2>
				</span>

				<!-- Academics widget -->
				<div class="@lg/content:border-l-2 border-alabaster-three dark:border-dark-three h-8" />
				<div class="flex flex-col">
					<InstitutionLink date="2014 - 2018">{$_('page.home.giacomo')}</InstitutionLink>
					<div class="@lg/content:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2018 - 2023" current={true}
						>{$_('page.home.pascal')}</InstitutionLink
					>
					<div class="@lg:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2021 - 2022">{$_('page.home.uwcdilijan')}</InstitutionLink>
					<div class="@lg/content:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
					<InstitutionLink date="2023 - 2026" last={true}
						>{$_('page.home.maastricht')}</InstitutionLink
					>
				</div>
			</div>
		{:else}
			<div use:scrollRef={'Academics'} class="h-screen" />
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
			<div in:fade class="w-full flex max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
				<h2>{$_('page.home.projects')}</h2>

				<!-- Row of widgets -->
				<div class="flex flex-col mt-6 gap-6 justify-between overflow-scroll @4xl/content:flex-row">
					<!-- Single project widget -->
					<ProjectComponent
						title="TedX Youth"
						description="page.home.tedx-text"
						url="/extracurriculars"
						resource="activities/tedx-1.jpg"
					/>
					<ProjectComponent
						title="Mai Checkers"
						description="page.home.checkers-text"
						url="/extracurriculars"
						resource="projects/checkers.png"
					/>
					<ProjectComponent
						title="DEC Torino"
						description="page.home.DEC-text"
						url="/activism"
						resource="projects/dec-torino.jpeg"
					/>
				</div>
			</div>
		{/if}
	</section>

	<!-- Work Experience -->
	<section
		class=" flex justify-center items-center"
		use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
		on:inview_change={(event) => {
			work = event.detail.inView;
		}}
	>
		{#if work}
			<div in:fade class=" flex flex-col max-w-4xl text-dark-three dark:text-alabaster-two gap-6">
				<h2>{$_('page.home.work-experience')}</h2>
				<p>
					{$_('page.home.work')}
				</p>
				<ComponentLink url={'/work'}>Mediamente Consulting</ComponentLink>
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
			<div in:fade class=" flex flex-col max-w-4xl text-dark-three dark:text-alabaster-two gap-6">
				<h2>civics</h2>
				<p>
					{$_('page.home.civics-text')}
				</p>
				<div class="w-fit">
					<TextButton text={'page.home.genocide-link'} url="/civics" />
				</div>

				<ComponentLink url={'/civics'}>Project Armenia</ComponentLink>
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
			<div in:fade class="w-full flex flex-col max-w-4xl text-dark-three dark:text-alabaster-two">
				<div
					class="flex  justify-between items-center gap-2 transition-all ease-in-out duration-200"
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
							on:click={() => shiftPage(true)}
						>
							<span class="material-symbols-outlined  text-2xl">chevron_left</span>
						</div>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							class="flex w-12 justify-center text-center h-full items-center border-l border-dark-three dark:border-alabaster-three hover:bg-dark-three hover:text-alabaster-two dark:hover:bg-alabaster-three dark:hover:text-dark-three"
							on:click={() => shiftPage()}
						>
							<span class="material-symbols-outlined  text-2xl">chevron_right</span>
						</div>
					</div>
				</div>

				<!-- Scrolling gallery -->
				<div class="w-full gap-6 py-6 grid grid-cols-1 @2xl/content:grid-cols-2">
					{#each galleryPics as photo, index}
						{#if index >= galleryIndex && index < galleryIndex + galleryPageNumber}
							<ImageComponent
								src={photo.src}
								title={photo.title}
								description={photo.description}
								url={photo.url}
							/>
						{/if}
					{/each}
				</div>
			</div>
		{:else}
			<div class="h-screen" />
		{/if}
	</section>
</div>
<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-20%' }}
	on:inview_change={(event) => {
		if (event.detail.inView) setScrolled();
	}}
/>
