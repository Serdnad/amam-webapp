<script>
	import Card from '$lib/components/common/Card.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import Spacer from '$lib/components/common/Spacer.svelte';
	import CryptoGridCard from '$lib/components/splash/CryptoGridCard.svelte';
	import Footer from '$lib/components/splash/Footer.svelte';
	import Header from '$lib/components/splash/Header.svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
</script>

<main>
	<Header />

	<Card>
		<div class="welcome-card row">
			<div class="text">
				<h1>{t('heading1', $lang)}</h1>
				<h3 class="gray">{t('sub-heading1', $lang)}</h3>

				<div class="row">
					<SolidButton>{t('get started investing', $lang)}</SolidButton>
					<Spacer height="16px" width="16px" />
					<SolidButton invertColors={true}>{t('free courses', $lang)}</SolidButton>
				</div>
			</div>

			<img src="/images/learn.png" width="30%" height="100%" alt="" />
		</div>
	</Card>

	<Spacer height="24px" />

	<div class="card-grid">
		<div class="coins-card">
			<CryptoGridCard />
		</div>

		<div class="learn-card">
			<Card>
				<div class="row">
					<div>
						<h3>{t('heading (free courses)', $lang)}</h3>
						<Spacer height="32px" />
						<h4 class="gray">{t('sub-heading (free courses)', $lang)}</h4>
						<h4 class="gray">{t('sub-heading 2 (free courses)', $lang)}</h4>
					</div>

					<div class="col right centered">
						<img src="/images/office.png" />
						<SolidButton>{t('Learn and earn', $lang)}</SolidButton>
					</div>
				</div>
			</Card>
		</div>

		<div class="invite-card">
			<Card>
				<div class="row">
					<img src="/images/friends.png" class="expanded" />

					<Spacer width="16px" height="16px" />

					<div class="expanded">
						<h4>{t('Invite a friend heading', $lang)}</h4>
						<SolidButton>{t('Invite', $lang)}</SolidButton>
					</div>
				</div>
			</Card>
		</div>
	</div>

	<Spacer height="24px" />

	<Card>
		<div class="countries-card row">
			<div class="text expanded">
				<h2>{t('Forward heading', $lang)}</h2>
				<h3 class="gray">{t('Forward sub-heading', $lang)}</h3>
			</div>

			<Spacer width="16px" height="16px" />

			<div class="country-grid expanded">
				{#each ['Jordan', 'Saudi Arabia', 'Syria', 'Lebanon', 'Egypt', 'Tunisia'] as country}
					<div class="country-card">
						<img src="/icons/countries/{country.toLowerCase().replace(' ', '_')}.png" alt="" />
						<p>{t('common.countries.' + country.toLowerCase(), $lang)}</p>
					</div>
				{/each}
			</div>
		</div>
	</Card>

	<Spacer width="16px" height="24px" />

	<Card>
		<div class="laptop-card">
			<img src="/images/laptop.png" alt="preview" />

			<div>
				<h2>{t('heading - last section', $lang)}</h2>
				<h3 class="gray">{t('sub-heading - last section', $lang)}</h3>
			</div>

			<div class="row">
				<SolidButton invertColors={true}>{t('last section first button', $lang)}</SolidButton>
				<Spacer height="16px" width="16px" />
				<SolidButton>{t('last section second button', $lang)}</SolidButton>
			</div>
		</div>
	</Card>
</main>

<Footer />

<style lang="scss">
	main {
		margin: auto;
		padding: 16px;
		max-width: 1200px;
		min-height: calc(100vh - 134px);
	}

	.row {
		display: flex;
		align-items: center;
		// flex-wrap: wrap;
	}

	.col {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.expanded {
		flex: 1;
	}

	.centered {
		align-items: center;
	}

	.gray {
		color: #aaaaaa;
	}

	.welcome-card {
		display: flex;
		flex-flow: row wrap-reverse;
		justify-content: space-between;
		gap: 16px;

		.text {
			max-width: max(400px, 55%);
		}

		img {
			// width: 40%;
			width: min(360px, 100%);
		}
	}

	.card-grid {
		display: grid;
		align-content: stretch;

		grid-auto-flow: dense;
		grid-template-columns: repeat(auto-fit, minmax(max(320px, calc(50% - 64px)), 1fr));
		gap: 24px;

		.coins-card {
			grid-row-end: span 2;

			height: 100%;
		}

		.learn-card {
			grid-column-end: span 1;

			.right {
				width: 60%;
			}

			h3 {
				margin: 0;
			}

			h4 {
				line-height: 1.8;
				margin: 0;
				margin-top: 8px;
			}

			img {
				width: 100%;
				// height: 40%;
				// min-width: 200px;

				margin-top: -32px;
				margin-inline-end: -64px;
			}

			// .expanded {
			// 	flex-wrap: wrap;
			// }
		}

		.invite-card {
			grid-column-end: span 1;

			img {
				max-width: 60%;

				margin: -32px;
				margin-inline-end: 16px;
			}
		}
	}

	.countries-card {
		flex-wrap: wrap;

		.country-grid {
			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
			gap: 16px;

			.country-card {
				display: flex;
				align-items: center;
				padding: 8px 16px;

				background: #eaeaea;
				border-radius: 8px;
			}

			img {
				width: 32px;
				height: 32px;
			}

			p {
				margin: 0 16px;
				color: black;
				font-weight: 600;
			}
		}
	}

	.laptop-card {
		display: grid;

		grid-template-columns: repeat(auto-fit, minmax(max(200px, calc(50% - 64px)), 1fr));
		gap: 16px;

		img {
			max-width: 100%;
			grid-row-end: span 2;
		}
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	button {
		line-height: 1.6;
	}
</style>
