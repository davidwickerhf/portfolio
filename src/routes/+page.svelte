<script>
	import MouseCursor from '../components/MouseCursor.svelte';
	import GlitchTitle from '../components/GlitchTitle.svelte';
	import { _ } from 'svelte-i18n';
</script>

<MouseCursor />
<div
	class="w-full h-screen flex justify-center items-center bg-ghost text-dark-three dark:bg-dark-three dark:text-alabaster-three flex-col"
>
	<div>
		<p>{$_('page.home.title-label')}</p>
		<GlitchTitle title={$_('page.home.title')} />
	</div>
</div>
