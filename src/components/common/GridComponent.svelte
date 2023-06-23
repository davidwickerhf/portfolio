<script lang="ts">
	import type { Photo } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';
	import { Image } from '@unpic/svelte';
	import { isHovering, isNotHovering } from '$lib/store/CursorHoverStore';
	import { setSelectedImage } from '$lib/store/FullScreenStore';
	//import Image from 'svelte-image';

	let windowWidth;
	let colsState = 4;

	// returns 4 lists of x items
	let organizeImages = (images: Photo[], maxcols: number) => {
		let cols = Math.min(maxcols, images.length);
		colsState = cols;

		let lists: Photo[][] = [];
		for (let index = 0; index < cols; index++) {
			lists.push([]);
		}

		images.forEach((image, index) => {
			lists[index % cols].push(image);
		});

		return lists;
	};

	let getColNumber = (width: number, maxcols: number) => {
		let temp = 0;
		if (width > 850) {
			temp = 4;
		} else if (width > 500) {
			temp = 2;
		} else {
			temp = 1;
		}

		return temp <= maxcols ? temp : maxcols;
	};

	export let images: Photo[];
	export let maxcols: number = 4;
</script>

<div class="flex gap-4 justify-start items-start" bind:clientWidth={windowWidth}>
	{#each organizeImages(images, getColNumber(windowWidth, maxcols)) as list, index}
		<div class="grid gap-4 justify-start items-start w-full">
			{#each list as image, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<div
					class="flex w-full"
					on:mouseover={isHovering}
					on:focus={isHovering}
					on:blur={isNotHovering}
					on:mouseout={isNotHovering}
					on:click={() => setSelectedImage(image)}
				>
					<Image
						layout="fullWidth"
						class="lazy rounded-lg w-full hover:scale-105 transition-all ease-in-out duration-150"
						alt="Portfolio"
						src="https://ik.imagekit.io/davidwickerhf/portfolio/images/{image.src}?tr={colsState < 3
							? 'w-600,h-400'
							: 'w-400,h-300'}"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
