<script lang="ts">
	export let title: string;
</script>

<div class="wrapper flex w-fit z-1">
	<div class="glitch text-8xl font-serif" data-glitch={title}>
		{title}
	</div>
</div>

<style lang="scss">
	.wrapper {
		position: static;
	}

	.glitch {
		position: relative;
		text-align: center;

		&:before,
		&:after {
			display: block;
			content: attr(data-glitch);
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			opacity: 0.8;
		}
		&:after {
			color: #f0f;
			z-index: -2;
		}
		&:before {
			color: #0ff;
			z-index: -1;
		}
		&:hover {
			transform: translateY(0%);
			&:before {
				animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both 5;
			}
			&:after {
				animation: glitch 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse both 5;
			}
		}
	}

	@keyframes glitch {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-5px, 5px);
		}
		40% {
			transform: translate(-5px, -5px);
		}
		60% {
			transform: translate(5px, 5px);
		}
		80% {
			transform: translate(5px, -5px);
		}
		to {
			transform: translate(0);
		}
	}
</style>
