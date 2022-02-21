<script>
	import Card from '$lib/components/common/Card.svelte';
	import Content from '$lib/components/layout/Content.svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
</script>

<Content>
	<div class="grid">
		<div class="grid-row">
			<Card>
				<div class="row">
					<div class="rotated">
						<h1>Company</h1>
					</div>
					<img class="team-image" src="/images/team.png" alt="" />
				</div>
			</Card>
		</div>

		<div class="grid-row">
			<Card>
				<h1>We're building the foundation of tomorrow's world</h1>
				<h3>
					The Middle East has been alienated for too long from the cryptocurrency world due to a
					multiplicity of reasons (such as lack of knowledge, reliance on cash and a lack of
					opportunity). As such, our journey started in 2022, to solve the previously mentioned
					issues and building the foundation for tomorrow’s world.
				</h3>

				<h2>Amam is tailored to open the doors of opportunities.</h2>

				<div class="country-grid">
					{#each ['Jordan', 'Saudi Arabia', 'Syria', 'Lebanon', 'Egypt', 'Tunisia'] as country}
						<div class="country-card">
							<img src="/icons/countries/{country.toLowerCase().replace(' ', '_')}.png" alt="" />
							<p>{t('common.countries.' + country.toLowerCase(), $lang)}</p>
						</div>
					{/each}
				</div>
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
							<h4>Co-Founder, President & Chief Executive Officer</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Andres Gutierrez</h2>
							<h4>Co-Founder & Chief Technology Officer</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Sharif Atassi</h2>
							<h4>Vice President</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Hareth Hmoud</h2>
							<h4>Chief Operations Officer</h4>
						</div>
						<div class="teammate">
							<div class="circle" />
							<h2>Muhieddeen Al-Jawhary</h2>
							<h4>Chief of Marketing and Education</h4>
						</div>
					</grid>
				</div>
			</Card>
		</div>

		<div class="grid-one-third">
			<Card expand>
				<h1>Blog</h1>
				<h1>COMING SOON</h1>
			</Card>
		</div>

		<div class="grid-two-thirds">
			<Card expand>
				<h1>Newsroom</h1>
				<h1>COMING SOON</h1>
			</Card>
		</div>
	</div>
</Content>

<style lang="scss">
	.grid {
		display: grid;
		gap: 32px;

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

	.team-grid {
		display: grid;
		grid-template-columns: repeat(12, 1fr);

		.teammate {
			grid-column-end: span 4;
			display: flex;
			flex-direction: column;
			// align-items: center;

			.circle {
				max-width: 280px;
				max-height: 280px;
				aspect-ratio: 1;

				background: blue;
				border-radius: 50%;
			}

			// h2,
			// h4 {
			// 	text-align: center;
			// }

			h4 {
				font-size: 24px;
				font-weight: 400;
			}
		}
	}
</style>
