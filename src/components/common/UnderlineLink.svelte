<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	export let url: string;

	let height: string;
	$: height = '2px';
</script>

<div class="px-0">
	<a
		class=" bg-gradient-to-r bg-no-repeat bg-bottom from-green-three/50 to-green-three/50 border-b-2 border-green-three/50"
		href={url}
		on:mouseover={() => {
			isHovering();
			height = '100%';
		}}
		on:focus={isHovering}
		on:blur={isNotHovering}
		on:mouseout={() => {
			isNotHovering();
			height = '2px';
		}}
	>
		<span class="">
			<slot />
		</span>
	</a>
</div>

<style lang="scss">
	a {
		text-decoration: none;

		position: relative;
		z-index: 1;
		padding: 3px;
		margin: -3px;

		background-size: 100% 0%;

		transition: all 0.3s, background-position 0s;

		&:hover {
			background-size: 100% 100%;
			background-position: top;
		}
	}
</style>
