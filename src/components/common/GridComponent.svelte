<script lang="ts">
	import type { Photo } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';
	import { Image } from '@unpic/svelte';
	//import Image from 'svelte-image';

	let windowWidth;

	// returns 4 lists of x items
	let organizeImages = (images: Photo[], maxcols: number) => {
		let cols = Math.min(maxcols, images.length);

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
				<div class="w-full">
					<!-- <Image
						layout="fullWidth"
						src="https://ik.imagekit.io/davidwickerhf/portfolio/images/tr:w-0.3/{image.src}"
						placeholder="https://via.placeholder.com/250?text=placeholder"
						alt="Lorem Ipsum"
						class="h-auto max-w-full rounded-lg"
					/> -->
					<!-- Original image at 400x300 -->
					<Image
						layout="fullWidth"
						class="lazy rounded-lg"
						alt="Portfolio"
						src="https://ik.imagekit.io/davidwickerhf/portfolio/images/{image.src}?tr=w-400,h-300"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
