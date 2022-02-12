<script>
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';

	import Card from '../common/Card.svelte';
	import SolidButton from '../common/SolidButton.svelte';
	import Spacer from '../common/Spacer.svelte';
</script>

<Card expand={true}>
	<div class="container">
		<div class="coin-grid">
			<div class="coin-card">
				<img src="/icons/coins/btc_circle.png" />

				<h4>{t('bitcoin', $lang)}</h4>
				<Spacer height="16px" />
				<p>35,000 JOD (-2% / 24hr)</p>
				<p>Market Cap: 832.5B</p>
			</div>

			<div class="coin-card">
				<img src="/icons/coins/eth_circle.png" />

				<h4>{t('ethereum', $lang)}</h4>
				<Spacer height="16px" />
				<p>1.200 JOD (-2% / 24hr)</p>
				<p>Market Cap: 39.8B</p>
			</div>

			<div class="coin-card">
				<img src="/icons/coins/ada_circle.png" />

				<h4>{t('cardano', $lang)}</h4>
				<Spacer height="16px" />
				<p>3,100 JOD (-2% / 24hr)</p>
				<p>Market Cap: 376.4B</p>
			</div>

			<div class="coin-card">
				<img src="/icons/coins/sol_circle.png" />

				<h4>{t('solana', $lang)}</h4>
				<Spacer height="16px" />
				<p>113 JOD (-2% / 24hr)</p>
				<p>Market Cap: 38.1B</p>
			</div>
		</div>

		<Spacer width="32px" height="32px" />

		<div class="row">
			<SolidButton>Get started investing</SolidButton>
			<SolidButton invertColors={true}>Learn how to invest</SolidButton>
		</div>
	</div>
</Card>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.coin-grid {
		display: grid;
		grid-auto-flow: row dense;
		grid-template-columns: repeat(auto-fit, minmax(216px, 1fr)); // repeat(3, max(240px, 1fr));

		gap: 16px;
	}

	.coin-card {
		position: relative;

		background: #f6f6f6;
		padding: 16px;
		border-radius: 10px;

		img {
			position: absolute;
			width: 48px;
			height: 48px;

			top: 16px;
			right: 16px;
		}

		h4 {
			color: black;
			margin: 0;
		}

		p {
			color: black;
			margin-top: 4px;
			margin-bottom: 0;

			font-size: 14px;
		}
	}

	.row {
		display: flex;
		align-items: center;
		justify-content: space-around;
	}

	.expanded {
		flex: 1;
	}
</style>
