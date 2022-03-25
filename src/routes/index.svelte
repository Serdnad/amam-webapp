<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte';
	import ContentSection from '$lib/components/common/ContentSection.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import CoinPreviewCard from '$lib/components/splash/CoinPreviewCard.svelte';
</script>

<ContentSection background="var(--primary-color)">
	<div class="section-welcome">
		<div>
			<h1>Our future starts here</h1>

			<div class="signup-input">
				<input placeholder="Phone number" />
				<SolidButton on:click={() => alert('coming soon')} invertColors={true}
					>Join Beta</SolidButton
				>
			</div>
		</div>

		<img src="/images/app.png" />
	</div>
</ContentSection>

<ContentSection background="white" light={true}>
	<div>
		<h2>
			First platform to offer cash as a payment method to buy and sell Bitcoin and other
			cryptocurrencies
		</h2>

		<div class="grid-row">
			<div class="coin-row row">
				<CoinPreviewCard />
				<CoinPreviewCard />
				<CoinPreviewCard />
				<CoinPreviewCard />
			</div>
		</div>
	</div>
</ContentSection>

<ContentSection light={true}>
	<div class="section-courses">
		<div>
			<h1>Free courses</h1>
			<h2>Win 100,000 USD in Bitcoin while learning about cryptocurrencies</h2>

			<SolidButton>Start Learning</SolidButton>
		</div>

		<img src="/images/person.png" />
	</div>
</ContentSection>

<ContentSection background="white" light={true}>
	<div class="section-card">
		<h1>Buy and sell crypto using cash</h1>
		<h2>
			Amam allows you to buy cryptocurrencies like Bitcoin and Ethereum using cash with Amam Cash
			Cards
		</h2>

		<img src="/images/card.png" />
	</div>
</ContentSection>

<ContentSection background="var(--primary-color)">
	<h2>and withdraw cash from Withdrawal Stands</h2>

	<ButtonRow>
		<SolidButton invertColors={true}>Cash Card Info</SolidButton>
		<SolidButton invertColors={true}>Stand Locations</SolidButton>
	</ButtonRow>
</ContentSection>

<ContentSection background="white" light={true}>
	<div>
		<h2>Kickstart your future with the simplest and safest way to buy and sell crypto</h2>

		<div class="row">
			<div class="feature-col">
				<img src="/icons/lock.png" />
				<h3>Secure</h3>
				<p>We store your funds safely</p>
			</div>

			<div class="feature-col">
				<img src="/icons/coins.png" />
				<h3>Simple</h3>
				<p>We offer 50+ cryptos to trade</p>
			</div>

			<div class="feature-col">
				<img src="/icons/wallet.png" />
				<h3>For All</h3>
				<p>We offer cash as a payment method</p>
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
		justify-content: space-between;
	}

	.feature-col {
		display: flex;
		flex-direction: column;
		align-items: center;

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

	.section-welcome {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;

		img {
			max-width: 40%;
			margin-bottom: -32px;
		}

		.signup-input {
			input {
				position: relative;
				top: -1px;

				padding: 10px 15px;
				margin-right: -24px;
				background: transparent;
				border: 2px solid white;
				border-radius: 12px;

				border-right: none;

				font-size: larger;
				color: white;
				&::placeholder {
					color: white;
				}
				// margin-top: -4px;
			}
		}
	}

	.section-courses {
		display: flex;
		justify-content: space-between;

		h1 {
			color: var(--primary-color);
			margin-bottom: 0;
		}

		img {
			max-width: 40%;
			margin-bottom: -32px;
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
	}
</style>
