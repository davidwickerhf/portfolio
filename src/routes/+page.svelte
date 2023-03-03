<script>
	import MouseCursor from '../components/MouseCursor.svelte';
	import GlitchTitle from '../components/GlitchTitle.svelte';
	import { _ } from 'svelte-i18n';
</script>

<MouseCursor />
<div
	class="w-full h-screen flex justify-center items-center bg-ghost  dark:bg-dark-five flex-col text-dark-three dark:text-alabaster-three"
>
	<div>
		<p class="text-dark-one dark:text-alabaster-five">{$_('page.home.title-label')}</p>
		<GlitchTitle title={$_('page.home.title')} />
		<div class="mt-5">
			<p class="text-dark-one dark:text-alabaster-three">
				High school student, developer, activist
			</p>
		</div>
	</div>
</div>
