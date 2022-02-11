<script>
	import Spacer from '$lib/components/common/Spacer.svelte';
	import CryptoNewsCard from '$lib/components/dashboard/CryptoNewsCard.svelte';
	import CryptoPricesCard from '$lib/components/dashboard/CryptoPricesCard.svelte';
	import LearnCard from '$lib/components/dashboard/LearnCard.svelte';
</script>

<div class="col">
	<LearnCard />
	<Spacer height="32px" />
	<div class="row">
		<div class="expanded">
			<CryptoPricesCard />
		</div>

		<Spacer width="32px" height="32px" />

		<div class="expanded">
			<CryptoNewsCard />
		</div>
	</div>
</div>

<style lang="scss">
	.col {
		display: flex;
		flex-direction: column;
	}

	.row {
		display: flex;

		.expanded {
			flex: 1;
		}

		@media (max-width: 560px) {
			flex-direction: column;
		}
	}
</style>
