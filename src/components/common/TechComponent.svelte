<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import type { Technology } from '$lib/constants/constants';

	export let tech: Technology;
</script>

<a
	on:mouseover={isHovering}
	on:focus={isHovering}
	on:blur={isNotHovering}
	on:mouseout={isNotHovering}
	href={tech.url ? tech.url : '/projects'}
	class="py-4 px-9 border-alabaster-three dark:border-dark-three border-2 hover:bg-alabaster-three dark:hover:bg-dark-three"
>
	{tech.title}
</a>
