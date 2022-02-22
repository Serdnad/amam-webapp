<script lang="ts">
	import { onMount } from 'svelte';

	export let symbol: string;

	let boxWidth = 512;
	let boxHeight = 200;

	let data;
	let points;
	let isPositive: boolean;

	onMount(() => {
		// TODO: FETCH by symbol
		data = {
			symbol: 'Bitcoin',
			marketCap: 24,
			history: {
				// TODO: DOCUMENT.
				// most recent values, from most recent to oldest

				points: [
					37700, 37300, 37400, 36920, 36570, 36780, 36450, 36200, 35900, 36500, 36000, 35000, 34700
				]
			}
		};

		// TODO: TAKE INTO ACCOUNT BOX SIZE (bind to clientRect)

		// TODO: THIS PRODUCES FLIPPED RESULTS

		// TODO: THIS
		points = [];
		let min = Math.min(...data.history.points);
		let spread = Math.max(...data.history.points) - min;
		for (let x = 0; x < 12; x++) {
			// TODO: 13 assumes 12 points
			points.push(
				`${(x * boxWidth) / 12},${(boxHeight * (data.history.points[x] - min)) / spread}`
			);
		}
		console.log(points.join(' '));
		points = points.join(' ');

		// points = '20 20,20 40,25 60,40 80,120 120,140 200,180';
	});
</script>

{#if data}
	<div class="card">
		<h2>{data.symbol}</h2>

		<svg class="chart">
			<polyline {points} />
		</svg>
	</div>
{/if}

<style lang="scss">
	.card {
		background: white;
		border-radius: 16px;

		padding: 16px;

		* {
			color: black;
		}

		h3 {
			margin: 0;
		}

		.chart {
			width: 100%;
			// background: red;
			height: 200px;

			polyline {
				fill: white;
				stroke: rgb(7, 185, 7);
				stroke-width: 4;
			}
		}
	}
</style>
