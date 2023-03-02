<script>
	import { locale, locales } from 'svelte-i18n';
</script>

<div
	class="flex justify-between h-8 bg-dark-three dark:bg-alabaster-three rounded-lg text-alabaster-three dark:text-dark-three align-middle px-2 py-1"
>
	{#each $locales as l}
		<button
			on:click={() => {
				locale.set(l);
			}}
			class="w-8 h-full text-center align-middle rounded-lg justify-center {$locale?.slice(0, 2) ===
			l
				? 'bg-alabaster-three text-dark-three dark:bg-dark-three dark:text-alabaster-three'
				: 'bg-dark-three text-alabaster-three dark:bg-alabaster-three dark:text-dark-three'} "
		>
			{l}
		</button>
	{/each}
</div>
