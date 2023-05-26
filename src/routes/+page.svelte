<script lang="ts">
	import ProjectComponent from '../components/common/ProjectComponent.svelte';

	import InstitutionLink from '../components/hero/InstitutionLink.svelte';

	import { _ } from 'svelte-i18n';
	import UnderlineLink from '../components/common/UnderlineLink.svelte';
	import TextButton from '../components/common/TextButton.svelte';
	import MouseCursor from '../components/common/MouseCursor.svelte';
	import GlitchTitle from '../components/hero/GlitchTitle.svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { scrollRef, scrollTo } from 'svelte-scrolling';
</script>

<MouseCursor />
<!-- Landing Section -->
<section class="w-full h-screen flex justify-center items-center px-16 lg:px-36 pt-24">
	<div class="flex m-auto max-w-4xl flex-col gap-4 text-dark-three dark:text-alabaster-two">
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
				use:scrollTo={'Academics'}
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
	use:scrollRef={'Academics'}
	class="w-full h-screen flex justify-center items-center px-16 lg:px-36 pt-24"
>
	<div class="flex w-full m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
		<!-- Section heading -->
		<span class="flex">
			<h2 class="border-b-2 border-alabaster-three dark:border-dark-three">academics</h2>
		</span>

		<!-- Academics widget -->
		<div class="border-l-2 border-alabaster-three dark:border-dark-three h-8" />
		<div class="flex flex-col">
			<InstitutionLink date="2014 - 2018">{$_('page.home.giacomo')}</InstitutionLink>
			<div class="border-l-2 border-alabaster-three dark:border-dark-three h-6" />
			<InstitutionLink date="2018 - 2023" current={true}>{$_('page.home.pascal')}</InstitutionLink>
			<div class="border-l-2 border-alabaster-three dark:border-dark-three h-6" />
			<InstitutionLink date="2021 - 2022">{$_('page.home.uwcdilijan')}</InstitutionLink>
			<div class="border-l-2 border-alabaster-three dark:border-dark-three h-6" />
			<InstitutionLink date="2023 - 2026" last={true}>{$_('page.home.maastricht')}</InstitutionLink>
		</div>
	</div>
</section>

<!-- Projects widget -->
<section
	use:scrollRef={'Projects'}
	class="w-full h-screen flex justify-center items-center px-16 lg:px-36 pt-24"
>
	<div class="w-full flex m-auto max-w-4xl flex-col text-dark-three dark:text-alabaster-two">
		<h2>projects and extracurriculars</h2>

		<!-- Row of widgets -->
		<div class="flex flex-col lg:flex-row mt-8 gap-6 justify-between">
			<!-- Single project widget -->
			<ProjectComponent
				title="TedX Youth"
				description="TedX Youth Conference organized at UWC Dilijan"
				url="/extracurriculars"
			/>
			<ProjectComponent
				title="TedX Youth"
				description="TedX Youth Conference organized at UWC Dilijan"
				url="/extracurriculars"
			/>
			<ProjectComponent
				title="TedX Youth"
				description="TedX Youth Conference organized at UWC Dilijan"
				url="/extracurriculars"
			/>
		</div>
	</div>
</section>
