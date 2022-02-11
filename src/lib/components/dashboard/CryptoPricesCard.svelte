<script>
	import Card from '../common/Card.svelte';
	import Spacer from '../common/Spacer.svelte';

	async function getPrices() {
		return [
			{
				symbol: 'Bitcoin',
				price_usd: 12000
			},
			{
				symbol: 'Ethereum',
				price_usd: 12000
			},
			{
				symbol: 'Solana',
				price_usd: 12000
			},
			{
				symbol: 'Cardano',
				price_usd: 12000
			},
			{
				symbol: 'Ripple',
				price_usd: 12000
			}
		];
	}
</script>

<Card>
	<div>
		<h2>Buy Crypto</h2>

		<div class="header-row">
			<p>Name</p>
			<p>Price in JOD</p>
		</div>

		{#await getPrices()}
			<!-- TODO -->
			<p>LOADING</p>
		{:then coins}
			{#each coins as coin}
				<div class="coin-row">
					<div class="row">
						<img src="/icons/coins/{coin.symbol}.png" alt="" />
						<Spacer width="16px" />
						<p>{coin.symbol}</p>
					</div>
					<p>{coin.price_usd}</p>
				</div>
			{/each}
		{/await}
		<div class="coin-row" />
	</div>
</Card>

<style lang="scss">
	h2 {
		margin: 0;
	}

	.header-row {
		display: flex;
		justify-content: space-between;

		p {
			color: #9fa4ac;
			font-weight: 500;
		}
	}

	.coin-row {
		display: flex;
		justify-content: space-between;

		.row {
			display: flex;
			align-items: center;
		}

		img {
			width: 24px;
			height: 24px;

			background: white;
			border-radius: 50%;
			padding: 4px;
		}

		p {
			font-size: 16px;
			font-weight: 600;
		}
	}
</style>
