<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import Spacer from '$lib/components/common/Spacer.svelte';
	import { COUNTRIES } from '$lib/constants/countries';
	import { lang } from '$lib/stores/lang';
	import { translate } from '$lib/translations';

	$: t = translate($lang);
</script>

<div class="content">
	<div class="grid-row">
		<Card>
			<div class="welcome-card row">
				<div class="col">
					<h1>{t('home.welcome.title')}</h1>
					<h2 class="gray">{t('home.welcome.body')}</h2>

					<Spacer height="32px" />

					<ButtonRow>
						<SolidButton invertColors={true}>{t('home.welcome.enter_email')}</SolidButton>
						<SolidButton>{t('home.welcome.start_investing')}</SolidButton>
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

					<h3>{t('bitcoin')}</h3>
					<Spacer height="16px" />
					<p>35,000 JOD (-2% / 24hr)</p>
					<p>Market Cap: 832.5B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/eth_circle.png" />

					<h3>{t('ethereum')}</h3>
					<Spacer height="16px" />
					<p>1.200 JOD (-2% / 24hr)</p>
					<p>Market Cap: 39.8B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/ada_circle.png" />

					<h3>{t('cardano')}</h3>
					<Spacer height="16px" />
					<p>3,100 JOD (-2% / 24hr)</p>
					<p>Market Cap: 376.4B</p>
				</div>

				<div class="coin-card">
					<img src="/icons/coins/sol_circle.png" />

					<h3>{t('solana')}</h3>
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
					<h1>{t('home.courses.title')}</h1>
					<h2 class="gray">{t('home.courses.body')}</h2>
					<SolidButton>{t('home.courses.button')}</SolidButton>
				</div>

				<Spacer width="32px" />

				<img src="/images/wireframe.png" class="desktop-only" alt="" />
			</div>
		</Card>
	</div>

	<div class="grid-one-third-row">
		<Card expand>
			<h2>{t('home.lottery.title')}</h2>
			<img src="/images/pair.png" alt="" />
		</Card>
	</div>

	<div class="grid-two-thirds-row">
		<Card expand>
			<h1>{t('home.payment_methods.title')}</h1>

			<ButtonRow>
				<SolidButton invertColors>Payment Methods</SolidButton>
				<SolidButton>Sign Up</SolidButton>
			</ButtonRow>
		</Card>
	</div>

	<div class="grid-one-third-row">
		<Card expand>
			<!-- <div style="display: flex; flex-direction: column; justify-content: space-between;"> -->
			<h2>{t('home.cash_cards.title')}</h2>
			<SolidButton>{t('home.cash_cards.button')}</SolidButton>
			<!-- </div> -->
		</Card>
	</div>

	<div class="grid-row">
		<Card>
			<h1 class="dense">{t('home.forward.title')}</h1>
			<h2 class="gray">{t('home.forward.body')}</h2>

			<div class="country-grid">
				{#each COUNTRIES as country}
					<div class="country-card">
						<img src={country.img} alt="" />
						<p>{t(country.key)}</p>
					</div>
				{/each}
			</div>
		</Card>
	</div>

	<div class="grid-row">
		<Card>
			<div class="kickstart-card row">
				<div>
					<h1>{t('home.kickstart.title')}</h1>

					<ButtonRow>
						<SolidButton>{t('home.kickstart.begin_investing')}</SolidButton>
						<SolidButton>{t('home.kickstart.download_app')}</SolidButton>
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

		@media screen and (max-width: 480px) {
			grid-template-columns: repeat(1, 1fr);
		}
	}

	.grid-row {
		grid-column-end: span 12;

		@media screen and (max-width: 480px) {
			grid-column-end: span 1;
		}
	}

	.grid-one-third-row {
		grid-column-end: span 4;

		@media screen and (max-width: 480px) {
			grid-column-end: span 1;
		}
	}

	.grid-two-thirds-row {
		grid-column-end: span 8;

		@media screen and (max-width: 480px) {
			grid-column-end: span 1;
		}
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

			max-width: 100%;
			aspect-ratio: 1;

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

	.coin-row {
		display: flex;
		flex-flow: row wrap;
		gap: 32px;

		.coin-card {
			flex: 1;
			position: relative;

			// background: #f6f6f6;
			background: #1c1a27;
			padding: 16px;
			border-radius: 10px;

			max-height: 200px;
			min-width: 220px;

			img {
				position: absolute;
				width: 72px;
				height: 72px;

				top: 16px;
				right: 16px;
			}

			h3 {
				// color: black;
				font-size: 26px;
				margin: 0;
			}

			p {
				// color: black;
				margin-top: 4px;
				margin-bottom: 0;

				font-size: 18px;
			}
		}
	}

	.country-grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(200px, 1fr));
		gap: 32px;

		@media screen and (max-width: 480px) {
			grid-template-columns: repeat(1, minmax(200px, 1fr));
		}

		.country-card {
			display: flex;
			align-items: center;
			padding: 12px 16px;

			// background: #eaeaea;
			background: #292638;
			border-radius: 12px;
			color: white;

			img {
				width: 48px;
				height: 48px;
			}

			p {
				font-size: 26px;
				margin: 0 16px;
				// color: black;
				font-weight: 600;
			}
		}
	}

	.kickstart-card {
		display: flex;

		@media screen and (max-width: 560px) {
			flex-flow: column;
		}

		img {
			max-width: max(320px, 40%);
		}
	}
</style>
