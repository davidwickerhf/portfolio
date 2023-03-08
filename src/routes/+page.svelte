<script lang="ts">
	import MouseCursor from '../components/MouseCursor.svelte';
	import GlitchTitle from '../components/GlitchTitle.svelte';
	import { _ } from 'svelte-i18n';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import Navbar from '../components/Navbar.svelte';

	let element: HTMLElement;
</script>

<MouseCursor />
<section
	class="relative w-full h-screen flex flex-col justify-between items-center bg-ghost  dark:bg-dark-five text-dark-three dark:text-alabaster-three pb-11 gap-11"
>
	<Navbar />
	<div class="">
		<p class="text-dark-one dark:text-alabaster-five">{$_('page.home.title-label')}</p>
		<GlitchTitle title={$_('page.home.title')} />
		<div class="mt-5">
			<p class="text-dark-one dark:text-alabaster-three max-w-[590px] ">
				{$_('page.home.intro')}
			</p>
		</div>
	</div>
	<div class="cursor-none hover:cursor-none">
		<div
			class="rounded-full border border-dark-one w-11 h-11  transition ease-in-out hover:scale-150 duration-300 flex justify-center items-center text-dark-one dark:text-alabaster-three cursor-none hover:cursor-none"
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
</section>
<section
	use:scrollRef={'Academics'}
	class="h-screen bg-ghost w-screen flex flex-col justify-center items-center"
>
	<h1 bind:this={element}>Academics</h1>
</section>
