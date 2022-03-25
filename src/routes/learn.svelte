<script>
	import Card from '$lib/components/common/Card.svelte';
	import ContentSection from '$lib/components/common/ContentSection.svelte';
	import SearchBar from '$lib/components/common/SearchBar.svelte';
	import Spacer from '$lib/components/common/Spacer.svelte';
	import Content from '$lib/components/layout/Content.svelte';

	function openLessons() {
		location.href = '/learn/lessons/example';
	}
</script>

<ContentSection background="white" light={true}>
	<div class="row">
		<h1 style="margin: 0;">Learn</h1>
		<Spacer width={'32px'} />
		<!-- <SearchBar expanded={true} /> -->
	</div>

	<div class="lessons-grid">
		<div class="lesson-card" on:click={openLessons}>
			<div>
				<h2>Easy Trading</h2>

				<p>Learn how to buy and sell cryptocurrencies on our exchange.</p>
				<p>If you're completely new to crypto, start here!</p>
			</div>
		</div>

		<div class="lesson-card" on:click={openLessons}>
			<div>
				<h2>Understanding Blockchain</h2>

				<p>
					Learn how blockchain technology works under the hood, and how it can build different
					applications more securely and efficiently.
				</p>
			</div>
		</div>

		<div class="lesson-card" on:click={openLessons}>
			<div>
				<h2>Evaluating Cryptocurrencies</h2>

				<p>
					Learn what to look for when evaluating a new cryptocurrency, and how major the
					technologies differ.
				</p>
			</div>
		</div>

		<div class="lesson-card" on:click={openLessons}>
			<div>
				<h2>Trading with Indicators</h2>

				<p>
					Get an introduction to sophisticated trading, through technical indicators and tested
					methods for combining them.
				</p>
			</div>
		</div>
	</div>
</ContentSection>

<style lang="scss">
	.lessons-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 32px;

		.lesson-card {
			cursor: pointer;
			background: white;
			border-radius: 12px;

			padding: 0 12px;
			box-shadow: 0 0 4px 3px #22222244;

			background: var(--primary-color);

			div {
				background: white;
				height: calc(100% - 16px);

				padding: 8px 16px;
			}
			// border: ;
		}

		h2 {
			color: black;
			margin-bottom: 8px;
		}

		p {
			color: #333333;
			line-height: 1.4;
			font-size: large;
		}
	}
</style>
