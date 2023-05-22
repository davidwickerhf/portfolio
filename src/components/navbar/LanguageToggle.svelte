<script>
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { locale, locales } from 'svelte-i18n';
</script>

<div
	class="flex justify-between h-12 border-dark-three dark:border-alabaster-three border-2  text-alabaster-three dark:text-dark-three align-middle"
>
	{#each $locales as l}
		<button
			on:click={() => {
				locale.set(l);
			}}
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}
			class="w-12 h-full text-center align-middle  justify-center cursor-none {$locale?.slice(
				0,
				2
			) === l
				? 'bg-dark-three dark:bg-alabaster-three text-alabaster-three dark:border-dark-five dark:text-dark-three'
				: ' text-dark-three dark:border-alabaster-three dark:text-alabaster-three'} "
		>
			{l}
		</button>
	{/each}
</div>
