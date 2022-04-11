<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte'
	import ContentSection from '$lib/components/common/ContentSection.svelte'
	import SolidButton from '$lib/components/common/SolidButton.svelte'
	import { lang } from '$lib/stores/lang'
	import { translate } from '$lib/translations'

	$: t = translate($lang)

	async function joinBeta() {
		// TODO
		alert('thanks for joining!')
	}
</script>

<ContentSection background="var(--off-white)">
	<div class="section-welcome">
		<h1 style="color: var(--primary-color);">{t('home.welcome.title')}</h1>
		<div class="row">
			<div class="left">
				<h2>First exchange to offer new ways to buy and sell crypto in the Middle East</h2>

				<div class="signup-input">
					<input placeholder={t('home.welcome.phone_number')} />
					<ButtonRow>
						<SolidButton on:click={() => alert('coming soon')}>
							{t('home.welcome.join_beta')}
						</SolidButton>
					</ButtonRow>
				</div>
			</div>

			<img src="/images/app.png" />
		</div>
	</div>
</ContentSection>

<ContentSection background="var(--primary-color)">
	<div class="section-mission">
		<h1>Our Mission</h1>

		<p>
			Amam’s mission is to build the foundation of tomorrow’s world by providing the Middle East
			with a cryptocurrency exchange platform tailored just for them.
		</p>
	</div>
</ContentSection>

<ContentSection>
	<div class="section-team">
		<h1>{t('company.team.title')}</h1>
		<div>
			<grid class="team-grid">
				<div class="teammate">
					<img src="/images/zaid.jpeg" />
					<h2>{t('company.team.zaid_name')}</h2>
					<h4 class="gray">{t('company.team.zaid_role')}</h4>
				</div>
				<div class="teammate">
					<img src="/images/andres.jpeg" />
					<h2>{t('company.team.andres_name')}</h2>
					<h4 class="gray">{t('company.team.andres_role')}</h4>
				</div>
				<div class="teammate">
					<img src="/images/sharif.jpeg" />
					<h2>{t('company.team.sharif_name')}</h2>
					<h4 class="gray">{t('company.team.sharif_role')}</h4>
				</div>
				<div class="teammate">
					<img src="/images/hareth.jpeg" />
					<h2>{t('company.team.hareth_name')}</h2>
					<h4 class="gray">{t('company.team.hareth_role')}</h4>
				</div>
				<div class="teammate">
					<img src="/images/muhi.jpeg" />

					<h2>{t('company.team.muhi_name')}</h2>
					<h4 class="gray">{t('company.team.muhi_role')}</h4>
				</div>
			</grid>
		</div>
	</div>
</ContentSection>

<style lang="scss">
	.section-welcome {
		margin-bottom: -32px;

		h2 {
			color: black;
		}

		.row {
			display: flex;
			align-items: flex-start;
			gap: 32px;
		}

		.left {
			display: flex;
			flex-direction: column;

			gap: 32px;
		}

		.signup-input {
			input {
				border: none;
				border-radius: 10px;

				padding: 16px;
				background: var(--gray);

				margin-bottom: 16px;
			}
		}

		img {
			width: 50%;
		}
	}

	.section-mission {
		h1 {
			margin: 0;
		}
		p {
			font-size: x-large;
			margin: 0;
		}
	}

	img {
	}

	.section-team {
		h1 {
			color: var(--primary-color);
			margin-bottom: 16px;
		}

		.team-grid {
			display: grid;
			grid-template-columns: repeat(12, 1fr);
			gap: 32px;

			.teammate {
				grid-column-end: span 4;
				display: flex;
				flex-direction: column;
				align-items: center;

				border-radius: 12px;
				overflow: hidden;

				background: white; // overflow: hidden;
				box-shadow: 0 0 3px 1.5px #cccccc55;
				// align-items: center;
				.circle {
					background: #1a8af0;

					min-width: 240px;
					max-width: 320px;

					min-height: 280px;
					max-height: 280px;
					aspect-ratio: 1;

					border-radius: 50%;
				}

				img {
					width: 100%;
					// min-width: 240px;
					// max-width: 320px;

					// min-height: 240px;
					// max-height: 280px;
					// aspect-ratio: 1;

					// border-radius: 50%;
				}

				h2 {
					margin-top: 16px;
					margin-bottom: 0;

					font-size: x-large;

					color: black;

					padding: 0 16px;
				}

				h4 {
					font-size: 24px;
					font-weight: 400;
					text-align: center;

					font-size: larger;

					margin: 0;

					padding: 0 16px 16px 16px;
					line-height: 1.4;

					color: #555555;
				}

				@media screen and (max-width: 480px) {
					grid-column-end: span 12;
				}
			}

			@media screen and (max-width: 480px) {
				justify-content: center;
			}
		}
	}
</style>
