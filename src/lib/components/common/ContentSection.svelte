<script lang="ts">
	export let background = '#dddddd';
	export let light = false;

	// function isBackgroundLight(color: string) {
	// 	const r = parseInt(color.slice(1, 3), 16);
	// 	const g = parseInt(color.slice(3, 5), 16);
	// 	const b = parseInt(color.slice(5, 7), 16);

	// 	return r + g + b > 120 * 3;
	// }
</script>

<div class="outer {light ? 'light' : ''}" style="background: {background}">
	<div class="inner">
		<slot />
	</div>
</div>

<style lang="scss">
	.outer {
		padding: 32px;
	}

	.light {
		:global(p) {
			color: black;
		}

		:global(h1) {
			color: black;
		}

		:global(h2) {
			color: black;
		}

		:global(h3) {
			color: black;
		}

		:global(h4) {
			color: black;
		}
	}

	.inner {
		max-width: 1080px;
		margin: auto;
	}
</style>
