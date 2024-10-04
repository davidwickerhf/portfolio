<script>
	import { onMount } from 'svelte';
	import TextButton from '../../components/common/TextButton.svelte';
	import { _ } from 'svelte-i18n';
	import { setScrolled } from '$lib/store/SidebarStore';

	onMount(() => {
		setScrolled();
	});
</script>

<div class="flex gap-6 flex-col">
	<h2>curriculum.</h2>
	<div class="w-fit">
		<TextButton
			text={$_('page.curriculum.link')}
			url="https://drive.google.com/file/d/111xERcjKmdRECgvy9N8hRW-kHOxM69MX/view?usp=sharing"
		/>
	</div>
</div>
