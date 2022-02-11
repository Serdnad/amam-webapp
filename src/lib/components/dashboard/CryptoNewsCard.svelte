<script>
	import Card from '../common/Card.svelte';
	import Spacer from '../common/Spacer.svelte';

	async function getNews() {
		return [
			{
				title: 'Crypto in MENA',
				preview: 'A new exchange is opening the doors to...'
			},
			{
				title: 'Funding for Amam',
				preview: 'Amam has received an incredible funding round...'
			}
		];
	}
</script>

<Card>
	<h2>News</h2>

	{#await getNews()}
		<p>LOADING...</p>
	{:then news}
		{#each news as n, i}
			<div class="card">
				<h4>{n.title}</h4>
				<p>{n.preview}</p>
			</div>

			{#if i < news.length - 1}
				<Spacer height="16px" />
			{/if}
		{/each}
	{/await}
</Card>

<style lang="scss">
	h2 {
		margin-top: 0;
	}

	.card {
		display: flex;
		flex-direction: column;

		border-radius: 8px;
		padding: 16px;

		background: url('./images/back.jpeg');
		background-repeat: no-repeat;
		background-size: cover;

		h4 {
			margin-top: 0;
		}

		p {
			margin: 0;
			font-size: 14px;
			font-weight: 300;
		}
	}
</style>
