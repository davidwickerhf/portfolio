<script lang="ts">
	import { portfolio } from '$lib/constants/constants';
	import type { Photo } from '$lib/constants/constants';
	import { _ } from 'svelte-i18n';

	let windowWidth;

	// returns 4 lists of x items
	let organizeImages = (images: Photo[], cols: number) => {
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

	let getColNumber = (width: number) => {
		if (width > 850) {
			return 4;
		} else if (width > 500) {
			return 2;
		}
		return 1;
	};

	export let images: Photo[];
</script>

<div class="flex gap-4 justify-start items-start" bind:clientWidth={windowWidth}>
	{#each organizeImages(images, getColNumber(windowWidth)) as list, index}
		<div class="grid gap-4 justify-start items-start">
			{#each list as image, index}
				<div>
					<img class="h-auto max-w-full rounded-lg" src="images/photography/{image.src}" alt="" />
				</div>
			{/each}
		</div>
	{/each}
</div>
