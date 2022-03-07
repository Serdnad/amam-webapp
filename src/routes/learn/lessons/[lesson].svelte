<script>
	import Card from '$lib/components/common/Card.svelte';
	import Content from '$lib/components/layout/Content.svelte';
</script>

<Content>
	<div class="content-grid">
		<Card>
			<h1>Easy Trading</h1>

			<div id="active-lesson" />
		</Card>

		<Card>
			<div class="queue">
				<div class="lesson-card">
					<h2>How to buy</h2>
					<div class="video" />
					<p>Length: 3:24m</p>
				</div>

				<div class="lesson-card">
					<h2>How to sell</h2>
					<div class="video" />
					<p>Length: 3:24m</p>
				</div>

				<div class="lesson-card">
					<h2>Dollar Cost Averaging</h2>
					<div class="video" />
					<p>Length: 3:24m</p>
				</div>
			</div>
		</Card>
	</div>
</Content>

<style lang="scss">
	.content-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}

	#active-lesson {
		width: 100%;
		aspect-ratio: 16/9;
		// height: 400px;
		background: black;
	}

	.queue {
		display: flex;
		gap: 32px;

		// margin-top: 64px;

		.lesson-card {
			flex-basis: 1;
			min-width: 320px;
			background: white;
			border-radius: 8px;

			box-shadow: 0 0 4px 2px #22222266;
			// padding: 16px;

			h2,
			p {
				color: black;
				margin: 0 16px;
			}

			.video {
				width: 100%;
				aspect-ratio: 16/9;

				// height: 240px;
				background: black;
			}
		}
	}
</style>
