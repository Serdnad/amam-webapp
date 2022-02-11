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
		<div class="courses-card row">
			<div>
				<h1>{t('heading1', $lang)}</h1>
				<h3 class="gray">{t('sub-heading1', $lang)}</h3>

				<div class="row">
					<SolidButton>{t('get started investing', $lang)}</SolidButton>
					<Spacer height="16px" width="16px" />
					<SolidButton invertColors={true}>{t('free courses', $lang)}</SolidButton>
				</div>
			</div>

			<Spacer width="32px" height="32px" />

			<img src="/images/learn.png" width="30%" height="100%" />
		</div>
	</Card>

	<Spacer height="16px" />

	<div class="card-grid">
		<div class="coins-card">
			<CryptoGridCard />
		</div>

		<div class="learn-card">
			<Card>
				<div class="row">
					<div class="expanded">
						<h3>{t('heading (free courses)', $lang)}</h3>
						<Spacer height="32px" />
						<p class="gray">{t('sub-heading (free courses)', $lang)}</p>
						<p class="gray">{t('sub-heading 2 (free courses)', $lang)}</p>
					</div>

					<div class="col expanded centered">
						<img src="/images/office.png" height="50%" />
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

	<Spacer height="16px" />

	<Card>
		<div class="row">
			<div class="expanded">
				<h2>{t('Forward heading', $lang)}</h2>
				<h3 class="gray">{t('Forward sub-heading', $lang)}</h3>
			</div>

			<div class="country-grid expanded">
				{#each ['Jordan', 'Saudi Arabia', 'Syria', 'Lebanon', 'Egypt', 'Tunisia'] as country}
					<div class="country-card">
						<img src="/icons/countries/{country.toLowerCase().replace(' ', '_')}.png" alt="" />
						<p>{t(country.toLowerCase(), $lang)}</p>
					</div>
				{/each}
			</div>
		</div>
	</Card>

	<Spacer width="16px" height="16px" />

	<Card>
		<div class="row">
			<img src="/images/laptop.png" />

			<Spacer width="32px" height="32px" />

			<div>
				<h2>{t('heading - last section', $lang)}</h2>
				<h3 class="gray">{t('sub-heading - last section', $lang)}</h3>

				<div class="row">
					<SolidButton invertColors={true}>{t('last section first button', $lang)}</SolidButton>
					<Spacer height="16px" width="16px" />
					<SolidButton>{t('last section second button', $lang)}</SolidButton>
				</div>
			</div>
		</div>
	</Card>
</main>

<Footer />

<style lang="scss">
	main {
		margin: auto;
		padding: 16px;
		max-width: 960px;
		min-height: 100vh;
	}

	.row {
		display: flex;
		align-items: center;
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

	.card-grid {
		display: grid;
		align-content: stretch;

		row-gap: 16px;
		column-gap: 16px;

		.coins-card {
			grid-row-start: 1;
			grid-row-end: span 2;
			grid-column-start: 1;
			grid-column-end: span 1;

			height: 100%;
		}

		.learn-card {
			grid-column-start: 2;
			grid-column-end: span 1;

			h3 {
				margin: 0;
			}

			p {
				line-height: 1.4;
				margin: 0;
				margin-top: 4px;
			}

			img {
				width: 100%;
				margin-top: -32px;
				margin-right: -64px;
			}
		}

		.invite-card {
			grid-row-start: 2;
			grid-column-start: 2;
			grid-column-end: span 1;

			img {
				margin: -32px 16px -32px -32px;
				max-width: 60%;
			}
		}
	}

	.country-grid {
		display: grid;
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
		column-gap: 16px;
		row-gap: 16px;

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
</style>
