<script lang="ts">
	import { LazyImage } from 'svelte-lazy-image';
	import type { Photo } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';

	let windowWidth;

	// returns 4 lists of x items
	let organizeImages = (images: Photo[], cols: number) => {
		if (images.length < 2) {
			return [[...images]];
		}
		let num = Math.ceil(images.length / cols); // number of rows per list

		let lists: Photo[][] = [];
		for (let index = 0; index < cols; index++) {
			lists.push([]);
		}

		let temp: Photo[] = [];
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
					<LazyImage
						src="images/{image.src}"
						placeholder="https://via.placeholder.com/250?text=placeholder"
						alt="Lorem Ipsum"
						class="h-auto max-w-full rounded-lg"
					/>
				</div>
			{/each}
		</div>
	{/each}
</div>
