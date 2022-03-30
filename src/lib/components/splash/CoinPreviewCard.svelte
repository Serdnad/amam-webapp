<script>
	import Spacer from '../common/Spacer.svelte';
</script>

<div class="coin-card">
	<img src="/icons/coins/btc_circle.png" />

	<h3>bitcoin</h3>
	<Spacer height="16px" />
	<p>35,000 JOD (-2% / 24hr)</p>
	<p>Market Cap: 832.5B</p>
</div>

<style lang="scss">
	div {
		flex: 1;
		position: relative;

		background: #dddddd;
		padding: 16px;
		border-radius: 10px;

		max-height: 200px;
		min-width: 200px;

		img {
			position: absolute;
			width: 72px;
			height: 72px;

			top: 16px;
			right: 16px;
		}

		h3 {
			// color: black;
			font-size: 26px;
			margin: 0;
		}

		p {
			// color: black;
			margin-top: 4px;
			margin-bottom: 0;

			font-size: 18px;
		}
	}
</style>
