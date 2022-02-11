<script>
	import Card from '../common/Card.svelte';
	import SolidButton from '../common/SolidButton.svelte';
</script>

<Card>
	<div class="row">
		<div class="col">
			<h2>Earn Crypto while learning</h2>
			<p>What is Crypto?</p>
			<p>How does it work?</p>
			<SolidButton on:click={() => alert('LEARNING')}>DOPE</SolidButton>
		</div>
	</div>
</Card>

<style lang="scss">
	.row {
		display: flex;

		// TODO: mobile, reverse wrap?
	}

	.col {
		display: flex;
		flex-direction: column;
	}
</style>
