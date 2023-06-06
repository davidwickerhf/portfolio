<script>
	import { page } from '$app/stores';
	import GlitchTitle from '../components/hero/GlitchTitle.svelte';
</script>

<GlitchTitle title={$page.status.toString()} />
<h1>{$page.error?.message}</h1>
