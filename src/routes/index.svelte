<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte';
	import ContentSection from '$lib/components/common/ContentSection.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import CoinPreviewCard from '$lib/components/splash/CoinPreviewCard.svelte';
	import { lang } from '$lib/stores/lang';
	import { translate } from '$lib/translations';

	$: t = translate($lang);
</script>

<ContentSection background="var(--primary-color)">
	<div class="section-welcome">
		<div>
			<h1>{t('home.welcome.title')}</h1>

			<div class="signup-input">
				<input placeholder={t('home.welcome.phone_number')} />
				<ButtonRow>
					<SolidButton on:click={() => alert('coming soon')} invertColors={true}>
						{t('home.welcome.join_beta')}
					</SolidButton>
				</ButtonRow>
			</div>
		</div>

		<img src="/images/app.png" />
	</div>
</ContentSection>

<ContentSection background="white" light={true}>
	<div>
		<h2>{t('home.platform.title')}</h2>

		<div class="coin-row row">
			<CoinPreviewCard />
			<CoinPreviewCard />
			<CoinPreviewCard />
			<CoinPreviewCard />
		</div>
	</div>
</ContentSection>

<ContentSection light={true}>
	<div class="section-courses">
		<div>
			<h1>{t('home.courses.title')}</h1>
			<h2>{t('home.courses.body')}</h2>

			<ButtonRow>
				<SolidButton>{t('home.courses.button')}</SolidButton>
			</ButtonRow>
		</div>

		<img src="/images/classroom.png" />
	</div>
</ContentSection>

<ContentSection background="white" light={true}>
	<div class="section-card">
		<h1>{t('home.cash_cards.title')}</h1>
		<h2>{t('home.cash_cards.body')}</h2>

		<img src="/images/card.png" />
	</div>
</ContentSection>

<ContentSection background="var(--primary-color)">
	<h2>{t('home.withdraw.text')}</h2>

	<ButtonRow>
		<SolidButton invertColors={true}>{t('home.withdraw.info')}</SolidButton>
		<SolidButton invertColors={true}>{t('home.withdraw.stand_locations')}</SolidButton>
	</ButtonRow>
</ContentSection>

<ContentSection background="white" light={true}>
	<div>
		<h2>{t('home.kickstart.title')}</h2>

		<div class="row wrap features">
			<div class="feature-col">
				<img src="/images/bitcoin_man.png" />
				<h3>{t('home.kickstart.secure')}</h3>
				<p>{t('home.kickstart.secure_description')}</p>
			</div>

			<div class="feature-col">
				<img src="/images/vending.png" />
				<h3>{t('home.kickstart.simple')}</h3>
				<p>{t('home.kickstart.simple_description')}</p>
			</div>

			<div class="feature-col">
				<img src="/images/methods.png" />
				<h3>{t('home.kickstart.for_all')}</h3>
				<p>{t('home.kickstart.for_all_description')}</p>
			</div>
		</div>
	</div>
</ContentSection>

<style lang="scss">
	.coin-row {
		display: flex;
		flex-wrap: row wrap;
		gap: 32px;
	}

	.row {
		// justify-content: space-between;
	}

	.section-welcome {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
		gap: 32px;

		img {
			max-width: 40%;
			margin-bottom: -32px;
		}

		.signup-input {
			input {
				position: relative;
				top: -1px;

				padding: 10px 15px;
				margin-right: 8px;
				margin-bottom: 8px;
				// margin-right: -24px;
				background: transparent;
				border: 2px solid white;
				border-radius: 12px;

				// border-right: none;

				font-size: larger;
				color: white;
				&::placeholder {
					color: white;
				}

				@media (max-width: 560px) {
					// justify-self: center;
					// margin: 8px;
					// margin-left: 16px;
					// padding-right: 8px;
				}
			}
		}

		@media (max-width: 560px) {
			flex-flow: row wrap;

			img {
				max-width: 100%;
			}
		}
	}

	.coin-row {
		display: flex;
		flex-flow: row wrap;

		:nth-child(1) {
			min-width: 200px;
		}
	}

	.section-courses {
		display: flex;
		justify-content: space-between;
		gap: 32px;

		h1 {
			color: var(--primary-color);
			margin-bottom: 0;
		}

		img {
			max-width: 40%;
			margin-bottom: -32px;
		}

		@media (max-width: 560px) {
			flex-flow: row wrap;

			img {
				max-width: 100%;
			}
		}
	}

	.section-card {
		display: flex;
		flex-direction: column;

		h1 {
			margin-bottom: 0;
		}

		h2 {
			font-weight: 400;
			color: var(--primary-color);
		}

		img {
			max-width: 60%;
			margin-bottom: -32px;

			align-self: center;
		}

		@media (max-width: 560px) {
			flex-flow: row wrap;

			img {
				max-width: 100%;
			}
		}
	}

	.features {
		justify-content: space-between;

		.feature-col {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			img {
				width: 180px;
			}

			h3 {
				margin-bottom: 0;
				font-size: xx-large;
				margin-top: 16px;
			}
			p {
				margin: 0;
				font-size: larger;
			}
		}

		@media (max-width: 560px) {
			justify-content: center;
		}
	}
</style>
