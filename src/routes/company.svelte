<script>
	import Card from '$lib/components/common/Card.svelte';
	import Content from '$lib/components/layout/Content.svelte';
	import { COUNTRIES } from '$lib/constants/countries';
	import { lang } from '$lib/stores/lang';
	import { translate } from '$lib/translations';

	$: t = translate($lang);
</script>

<Content>
	<div class="grid">
		<div class="grid-row">
			<Card>
				<div class="row">
					<div class="rotated">
						<h1>{t('company.company')}</h1>
					</div>
					<img class="team-image" src="/images/team.png" alt="" />
				</div>
			</Card>
		</div>

		<div class="foundation-card grid-row">
			<Card>
				<h1>{t('company.foundation.title')}</h1>
				<h3 class="gray">
					{t('company.foundation.body')}
				</h3>

				<h2>{t('company.foundation.tagline')}</h2>

				<div class="country-grid">
					{#each COUNTRIES as country}
						<div class="country-card">
							<img src={country.img} alt="" />
							<p>{t(country.key)}</p>
						</div>
					{/each}
				</div>

				<!-- <div class="country-grid">
					{#each ['Jordan', 'Saudi Arabia', 'Syria', 'Lebanon', 'Egypt', 'Tunisia'] as country}
						<div class="country-card">
							<img src="/icons/countries/{country.toLowerCase().replace(' ', '_')}.png" alt="" />
							<p>{t('common.countries.' + country.toLowerCase())}</p>
						</div>
					{/each}
				</div> -->
			</Card>
		</div>

		<div class="grid-row">
			<Card>
				<h1>Team</h1>
				<div>
					<grid class="team-grid">
						<div class="teammate">
							<div class="circle" />
							<h2>Zaid Abdul-Hadi</h2>
							<h4 class="gray">{t('company.team.zaid_role')}</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Andres Gutierrez</h2>
							<h4 class="gray">{t('company.team.andres_role')}</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Sharif Atassi</h2>
							<h4 class="gray">{t('company.team.sharif_role')}</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Hareth Hmoud</h2>
							<h4 class="gray">{t('company.team.hareth_role')}</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Muhieddeen Al-Jawhary</h2>
							<h4 class="gray">{t('company.team.muhi_role')}</h4>
						</div>
					</grid>
				</div>
			</Card>
		</div>

		<div class="grid-one-third">
			<Card expand>
				<h1>{t('company.blog')}</h1>
				<h1>COMING SOON</h1>
			</Card>
		</div>

		<div class="grid-two-thirds">
			<Card expand>
				<h1>{t('company.newsroom')}</h1>
				<h1>COMING SOON</h1>
			</Card>
		</div>
	</div>
</Content>

<style lang="scss">
	.grid {
		display: grid;
		gap: 32px;
		align-items: baseline;

		grid-template-columns: repeat(12, 1fr);
	}

	.grid-row {
		grid-column-end: span 12;
	}

	.grid-one-third {
		grid-column-end: span 4;
	}

	.grid-two-thirds {
		grid-column-end: span 8;
	}

	.rotated {
		transform: rotateZ(-90deg);
	}

	.team-image {
		width: 60%;
		margin: -32px 0;
	}

	.foundation-card {
		h1 {
			margin: 0;
		}
	}

	// .country-grid {
	// 	display: grid;
	// 	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	// 	gap: 16px;

	// 	.country-card {
	// 		display: flex;
	// 		align-items: center;
	// 		padding: 8px 16px;

	// 		background: #eaeaea;
	// 		border-radius: 8px;

	// 		img {
	// 			width: 32px;
	// 			height: 32px;
	// 		}

	// 		p {
	// 			margin: 0 16px;
	// 			color: black;
	// 			font-weight: 600;
	// 		}
	// 	}
	// }
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

	.team-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 32px;

		.teammate {
			grid-column-end: span 4;
			display: flex;
			flex-direction: column;
			align-items: center;
			// align-items: center;

			.circle {
				min-width: 240px;
				max-width: 320px;

				min-height: 240px;
				max-height: 280px;
				aspect-ratio: 1;

				background: #1a8af0;
				border-radius: 50%;
			}

			h2 {
				margin-top: 16px;
				margin-bottom: 0;
			}

			h4 {
				font-size: 24px;
				font-weight: 400;
				text-align: center;

				margin: 0;
			}
		}
	}
</style>
