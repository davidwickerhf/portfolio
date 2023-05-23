<script lang="ts">
	import { _ } from 'svelte-i18n';
	export let url: string;
	export let filled: boolean = false;
</script>

<a
	href={url}
	class="flex w-full justify-between px-8 py-5 border-2 border-dark-three font-medium uppercase items-center gap-3 text-lg transition-all ease-in-out duration-200 hover:text-alabaster-two  {filled
		? 'bg-green-three border-green-three text-alabaster-two hover:bg-alabaster-three hover:text-dark-three hover:border-alabaster-three dark:hover:bg-alabaster-five'
		: 'hover:bg-dark-three'}"
>
	<p><slot /></p>
	<span class="material-symbols-outlined text-2xl">chevron_right</span>
</a>
