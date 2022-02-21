<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import Spacer from '$lib/components/common/Spacer.svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
</script>

<div class="content">
	<div class="grid-row">
		<Card>
			<div class="welcome-card row">
				<div class="col">
					<h1>Our future starts here</h1>
					<h2 class="gray">
						The first exchange to offer cash as a payment method to buy and sell crypto
					</h2>

					<Spacer height="32px" />

					<ButtonRow>
						<SolidButton invertColors={true}>Enter Email</SolidButton>
						<SolidButton>Start Investing</SolidButton>
					</ButtonRow>
				</div>

				<Spacer width="64px" height="32px" />

				<div class="image-circle">
					<div class="circle" />
					<div class="image-wrapper">
						<img src="/images/mobile.png" alt="" />
					</div>
				</div>
			</div>
		</Card>
	</div>

	<div class="grid-row">
		<Card>
			<div class="coin-row row">
				<div class="coin-card">
					<img src="/icons/coins/btc_circle.png" />

					<h3>{t('bitcoin', $lang)}</h3>
					<Spacer height="16px" />
					<p>35,000 JOD (-2% / 24hr)</p>
					<p>Market Cap: 832.5B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/eth_circle.png" />

					<h3>{t('ethereum', $lang)}</h3>
					<Spacer height="16px" />
					<p>1.200 JOD (-2% / 24hr)</p>
					<p>Market Cap: 39.8B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/ada_circle.png" />

					<h3>{t('cardano', $lang)}</h3>
					<Spacer height="16px" />
					<p>3,100 JOD (-2% / 24hr)</p>
					<p>Market Cap: 376.4B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/sol_circle.png" />

					<h3>{t('solana', $lang)}</h3>
					<Spacer height="16px" />
					<p>113 JOD (-2% / 24hr)</p>
					<p>Market Cap: 38.1B</p>
				</div>
			</div>
		</Card>
	</div>

	<div class="grid-two-thirds-row">
		<Card expand>
			<div class="row">
				<div>
					<h1>Free courses</h1>
					<h2 class="gray">Online or in person in our offices</h2>
					<SolidButton>Learn and earn crypto</SolidButton>
				</div>

				<Spacer width="32px" />

				<img src="/images/wireframe.png" alt="" />
			</div>
		</Card>
	</div>

	<div class="grid-one-third-row">
		<Card expand>
			<h2>Chance to win 100,000 USD in BTC after sign up</h2>
			<img src="/images/pair.png" alt="" />
		</Card>
	</div>

	<div class="grid-two-thirds-row">
		<Card expand>
			<h1>Cash, Credit/Debit, Paypal, and More</h1>

			<ButtonRow>
				<SolidButton invertColors>Payment Methods</SolidButton>
				<SolidButton>Sign Up</SolidButton>
			</ButtonRow>
		</Card>
	</div>

	<div class="raffle-card grid-one-third-row">
		<Card expand>
			<!-- <div style="display: flex; flex-direction: column; justify-content: space-between;"> -->
			<h2>Find the locations of the cash machines and how to use them</h2>
			<SolidButton>Cash Machines</SolidButton>
			<!-- </div> -->
		</Card>
	</div>

	<div class="grid-row">
		<Card>
			<h1>Forward... into the future</h1>
			<h2 class="gray">Tailored for the Middle East to build a better world for everyone</h2>

			COUNTRY GRID
		</Card>
	</div>

	<div class="grid-row">
		<Card>
			<div class="kickstart-card row">
				<div>
					<h1>Kickstart your future and plan for tomorrow</h1>

					<ButtonRow>
						<SolidButton>Begin Investing</SolidButton>
						<SolidButton>Download App</SolidButton>
					</ButtonRow>
				</div>

				<Spacer width="64px" />

				<img src="/images/tablet.png" alt="" />
			</div>
		</Card>
	</div>
</div>

<style lang="scss">
	.content {
		display: grid;
		gap: 32px;
		padding: 8px 32px;

		grid-template-columns: repeat(12, 1fr);
		align-items: stretch;
	}

	.grid-row {
		grid-column-end: span 12;
	}

	.grid-one-third-row {
		grid-column-end: span 4;
		// align-self: stretch;
	}

	.grid-two-thirds-row {
		grid-column-end: span 8;
		// align-self: stretch;
	}

	img {
		max-width: 100%;
	}

	.welcome-card {
		.image-circle {
			width: 50%;

			display: flex;
			justify-content: center;
			position: relative;
		}

		.circle {
			position: absolute;
			top: calc(20% - 16px);
			bottom: 16px;
			border-radius: 50%;
			background: #1a8af0;
			width: 100%;

			z-index: 0;
		}
		img {
			max-height: 480px;

			object-fit: contain;
			object-position: center;

			border-radius: 16px;
			position: relative;
			z-index: 100;
		}
	}

	h1 {
		margin-top: 0;
	}

	h2 {
		margin-top: 0;
	}
	// }

	.coin-row {
		display: flex;
		gap: 32px;

		.coin-card {
			flex: 1;
			position: relative;

			background: #f6f6f6;
			padding: 16px;
			border-radius: 10px;

			max-height: 200px;

			img {
				position: absolute;
				width: 72px;
				height: 72px;

				top: 16px;
				right: 16px;
			}

			h3 {
				color: black;
				font-size: 26px;
				margin: 0;
			}

			p {
				color: black;
				margin-top: 4px;
				margin-bottom: 0;

				font-size: 18px;
			}
		}
	}

	.kickstart-card {
		img {
			max-width: max(320px, 40%);
		}
	}
</style>
