<script lang="ts">
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { selectedImage, removeSelectedImage } from '$lib/store/FullScreenStore';
	import { Image } from '@unpic/svelte';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="transitionl-all ease-in-out duration-200 w-screen h-screen fixed z-20 bg-dark-three/95 py-4 px-14 flex-col flex gap-6  items-center {$selectedImage.hasImage
		? ''
		: 'hidden'}"
	on:click={() => removeSelectedImage()}
>
	<div class="flex justify-end w-full text-alabaster-two">
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<span
			class="material-symbols-outlined text-4xl"
			on:mouseover={isHovering}
			on:focus={isHovering}
			on:blur={isNotHovering}
			on:mouseout={isNotHovering}
			on:click={() => removeSelectedImage()}>close</span
		>
	</div>
	<!-- Image -->
	{#if $selectedImage.image}
		<div class="flex z-40">
			<Image
				layout="fullWidth"
				class="lazy rounded-lg "
				alt="Portfolio"
				src="https://ik.imagekit.io/davidwickerhf/portfolio/images/{$selectedImage.image
					.src}?tr=h-700"
			/>
		</div>
	{/if}
</div>
