<script lang="ts">
	import InstitutionLink from '../components/hero/InstitutionLink.svelte';

	import ComponentLink from '../components/common/ComponentLink.svelte';

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
<section class="w-full h-screen flex justify-center items-center px-36 pt-24">
	<div class="flex m-auto max-w-3xl flex-col gap-4 text-dark-three dark:text-alabaster-two">
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
		<div class="flex justify-between mt-4">
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

<section
	use:scrollRef={'Academics'}
	class="w-full h-screen flex justify-center items-center px-36 pt-24"
>
	<div class="flex m-auto max-w-3xl flex-col text-dark-three dark:text-alabaster-two">
		<!-- Section heading -->
		<span class="flex">
			<h2 class="border-b-2 border-alabaster-three dark:border-dark-three">academics</h2>
		</span>

		<!-- Academics widget -->
		<div class="flex flex-col border-l-2 border-alabaster-three dark:border-dark-three pt-8 gap-6">
			<InstitutionLink date="2014 - 2018">public secondary school giacomo jaqueiro</InstitutionLink>
			<InstitutionLink date="2018 - 2023" current={true}
				>IIS Blaise Pascal: Applied Sciences High School</InstitutionLink
			>
			<InstitutionLink date="2021 - 2022">UWC Dilijan College: IB Diploma</InstitutionLink>
			<InstitutionLink date="2023 - 2026" last
				>Maastricht University: BSc Computer Science</InstitutionLink
			>
		</div>
	</div>
</section>
