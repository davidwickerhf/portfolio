<script lang="ts">
	import ActivityComponent from './ActivityComponent.svelte';
	import UnderlineLink from '../../components/common/UnderlineLink.svelte';

	let openImage: string | undefined = undefined;
</script>

<div class="gap-24 flex flex-col">
	<!-- Hero -->
	<div>
		<!-- Hero banner -->
		<div class="mt-4 flex w-full flex-col-reverse @5xl/content:flex-row gap-6">
			<h2 class="">
				internationally oriented student, aiming at employing computer science in the field of
				climate science
			</h2>
			<!-- Random image  -->
			<div class="flex flex-col @5xl/content:max-w-[45%] border-2 dark:border-dark-three ">
				<img
					src="/images/activities/tedx-1.jpg"
					class="h-full object-cover max-h-48  @5xl/content:max-h-none"
				/>
				<div class="flex justify-between w-full items-center px-4 py-4">
					<p class="lowercase">tedx youth conference</p>
					<div class="uppercase font-thin dark:text-dark-one">UWCD DILIJAN</div>
				</div>
			</div>
		</div>

		<!-- Current education -->
		<div class="mt-6">
			<img src="" alt="" />
			<p class="flex gap-2">
				currently studying at <UnderlineLink underline url="https://pascalgiaveno.edu.it/"
					>IIS Blaise Pascal</UnderlineLink
				>
			</p>
		</div>
	</div>

	<!-- Banner -->
	<div
		class="relative w-full flex-col flex bg-alabaster-three text-dark-three items-center justify-center gap-6"
	>
		<p class="uppercase z-10 py-4 font-medium text-lg">Academic history</p>
		<div
			class="flex flex-col justify-evenly gap-2 w-full z-10 pb-4 items-center @xl/content:flex-row"
		>
			<a href="/academics" class="hover:underline">junior high school</a>
			<div class="border-l-[1px] h-[200%] border-green-three/30 rotate-12" />
			<a href="/academics" class="hover:underline">high school</a>
			<div class="border-l-[1px] h-[200%] border-green-three/30 rotate-12" />
			<a href="/academics" class="hover:underline">year abroad</a>
			<div class="border-l-[1px] h-[200%] border-green-three/30 rotate-12" />
			<a href="/academics" class="hover:underline">university</a>
		</div>
		<div class="absolute bg-alabaster-three w-[300%] min-h-[120%]" />
	</div>

	<!-- Component list  -->
	<div class="flex flex-col">
		<!-- Academics component -->
		<div class="flex flex-col">
			<!-- Diploma type -->
			<p class="text-dark-one">2014 - 2018 • Applied sciences high school diploma</p>

			<!-- School header -->
			<h2>IIS Blaise Pascal</h2>

			<!-- description -->
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>

			<!-- Optional: exam subjects -->
			<h3 class="uppercase font-medium mt-6 mb-2">Exam subjects</h3>
			<div class="flex flex-wrap gap-6 justify-between">
				<ul class="list-disc list-inside">
					<li>HL Mathematics Analysis and Approaches</li>
					<li>HL Physics</li>
					<li>HL Philosophy</li>
				</ul>
				<ul class="list-disc list-inside">
					<li>HL English Language and Literature</li>
					<li>SL Self Taught Italian literature</li>
					<li>SL Environmental Systems and Societeis</li>
				</ul>
			</div>

			<!-- Activities and projects -->
			<h3 class="uppercase font-medium mt-6 mb-2">projects and activities</h3>
			<div class="flex flex-col gap-4">
				<ActivityComponent
					title="Progetto Armenia"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					images={['activities/tedx-1.jpg', 'activities/tedx-1.jpg']}
					open
				/>
				<ActivityComponent
					title="PCTO Mediamente Consulting"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					images={['activities/tedx-1.jpg', 'activities/tedx-1.jpg']}
				/>
				<ActivityComponent
					title="Progetto Armenia"
					description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
				cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
					images={['activities/tedx-1.jpg', 'activities/tedx-1.jpg']}
				/>
			</div>
		</div>
	</div>
</div>
