<script>
	import Card from '$lib/components/common/Card.svelte';
	import Content from '$lib/components/layout/Content.svelte';
	import CryptoSummaryCard from '$lib/components/market/CryptoSummaryCard.svelte';
</script>

<Content>
	<div class="content-grid">
		<div class="half-row">
			<Card>
				<h1 class="dense">Biggest Gainers</h1>
				<h2>TODO</h2>
			</Card>
		</div>

		<div class="half-row">
			<Card>
				<h1 class="dense">Biggest Losers</h1>
				<h2>TODO</h2>
			</Card>
		</div>

		<div class="full-row">
			<Card>
				<h1 class="dense">Market</h1>

				<div class="coin-grid">
					{#each new Array(6) as _}
						<CryptoSummaryCard symbol="btc" />
					{/each}
				</div>

				<p>(andres still has to do)</p>
				<p>
					I wonder if we can tweak the design to show a lot more info in the cards. at the very
					least, it's unclear what timeframe the charts show, but just adding (24hr) next to Change
					should probably do it.
				</p>
				<p>
					Besides that though, might be worth making each card bigger, condensing the text portion a
					bit, and maybe? adding a tick or two to the card
				</p>
			</Card>
		</div>
	</div>
</Content>

<style lang="scss">
	.content-grid {
		display: grid;
		gap: 32px;
		grid-template-columns: repeat(12, 1fr);
	}

	.full-row {
		grid-column-end: span 12;
	}

	.half-row {
		grid-column-end: span 6;
	}

	.coin-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;
	}
</style>
