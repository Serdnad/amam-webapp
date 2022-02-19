<script>
	import Card from '$lib/components/common/Card.svelte';
	import Content from '$lib/components/layout/Content.svelte';
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
</script>

<Content>
	<div class="grid">
		<Card>
			<div class="row">
				<div class="rotated">
					<h1>Company</h1>
				</div>
				<img src="/images/office.png" alt="" />
			</div>
		</Card>

		<Card>
			<h1>We're building the foundation of tomorrow's world</h1>
			<h3>
				The Middle East has been alienated for too long from the cryptocurrency world due to a
				multiplicity of reasons (such as lack of knowledge, reliance on cash and a lack of
				opportunity). As such, our journey started in 2022, to solve the previously mentioned issues
				and building the foundation for tomorrow’s world.
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

		<Card>
			<h1>Team</h1>
			<div>
				<grid class="team-grid">
					{#each [1, 2, 3, 4, 5] as a}
						<div style="width: 256px; height: 256px; background: red;" />
						<h3>NAME</h3>
						<h4>ROLE</h4>
					{/each}
				</grid>
			</div>
		</Card>

		<Card>
			<h1>Blog</h1>
			<h1>COMING SOON</h1>
		</Card>

		<Card>
			<h1>Newsroom</h1>
			<h1>COMING SOON</h1>
		</Card>
	</div>
</Content>

<style lang="scss">
	.grid {
		display: grid;
		gap: 32px;
	}

	.rotated {
		transform: rotateZ(-90deg);
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
</style>
