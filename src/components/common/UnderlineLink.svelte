<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';

	export let url: string;
	export let underline: boolean = false;
	export let left: boolean = false;
	export let icon: string | undefined = undefined;

	let height: string;
	$: height = '2px';
</script>

<div class="px-0">
	<a
		class="p-1 m-[-4px] z-1 relative no-underline bg-gradient-to-r bg-no-repeat {left
			? 'bg-left bg-[length:0%_100%]'
			: 'bg-bottom bg-[length:100%_0%]'} from-green-three/50 to-green-three/50 hover:bg-[length:100%_100%] border-b-2 {underline
			? 'border-green-three/50'
			: 'border-transparent'}  transition-[background-size] ease-in-out duration-300 flex flex-grow-0 gap-4 items-center"
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
		<span class="material-symbols-outlined text-[16px] {icon ? 'visible' : 'hidden'}">{icon}</span>
		<span class="">
			<slot />
		</span>
	</a>
</div>
