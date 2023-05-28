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
	<section class="w-full flex justify-center items-center">
		<div class="flex w-full m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
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
				<InstitutionLink date="2018 - 2023" current={true}>{$_('page.home.pascal')}</InstitutionLink
				>
				<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
				<InstitutionLink date="2021 - 2022">{$_('page.home.uwcdilijan')}</InstitutionLink>
				<div class="sm:border-l-2 border-alabaster-three dark:border-dark-three h-6" />
				<InstitutionLink date="2023 - 2026" last={true}
					>{$_('page.home.maastricht')}</InstitutionLink
				>
			</div>
		</div>
	</section>

	<!-- Projects widget -->
	<section class="w-full flex justify-center items-center">
		<div class="w-full flex m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
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
	</section>

	<!-- Work Experience -->
	<section class="w-full flex justify-center items-center">
		<div
			class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two gap-6"
		>
			<h2>work experience</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<ComponentLink url={'/'}>Mediamente Consulting</ComponentLink>
		</div>
	</section>

	<!-- Civics -->
	<section class="w-full flex justify-center items-center">
		<div
			class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two gap-6"
		>
			<h2>civics</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
			<ComponentLink url={'/'}>Project Armenia</ComponentLink>
		</div>
	</section>

	<!-- Gallery -->
	<section class="w-full flex justify-center items-center">
		<div
			class="w-full flex flex-col m-auto max-w-4xl text-dark-three dark:text-alabaster-two gap-6"
		>
			<div class="flex w-full justify-between">
				<h2>photo gallery</h2>
				<div>
					<div />
				</div>
			</div>

			<!-- Scrolling gallery -->
			<div class="flex overflow-x-scroll overflow-y-hidden w-full gap-4">
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
	</section>

	<div class="flex w-full justify-end">
		<LinkButton title="academics" url={'/academics'} />
	</div>
</div>
