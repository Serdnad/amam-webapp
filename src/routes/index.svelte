<script>
	import ButtonRow from '$lib/components/common/ButtonRow.svelte';
	import Card from '$lib/components/common/Card.svelte';
	import SolidButton from '$lib/components/common/SolidButton.svelte';
	import Spacer from '$lib/components/common/Spacer.svelte';
</script>

<div class="content">
	<Card>
		<div class="row">
			<div class="col">
				<h1>Our future starts here</h1>
				<h2>The first exchange to offer cash as a payment method to buy and sell crypto</h2>

				<ButtonRow>
					<SolidButton invertColors={true}>Enter Email</SolidButton>
					<SolidButton>Start Investing</SolidButton>
				</ButtonRow>
			</div>

			<Spacer width="64px" height="32px" />

			<img src="/images/office.png" alt="" />
		</div>
	</Card>

	<Card>
		<div class="row">
			<Card>BTC</Card>
			<Card>BTC</Card>
			<Card>BTC</Card>
			<Card>BTC</Card>
		</div>
	</Card>

	<div>
		<Card>
			<div class="row">
				<div>
					<h1>Free courses</h1>
					<h2>Online or in person in our offices</h2>
					<SolidButton>Learn and earn crypto</SolidButton>
				</div>

				<img src="/images/office.png" alt="" />
			</div>
		</Card>
	</div>

	<div>
		<Card>
			<h2>Chance to win 100,000 USD in BTC after sign up</h2>
			<img src="/images/friends.png" alt="" />
		</Card>
	</div>

	<div>
		<Card>
			<h1>Cash… Credit/Debit… Bank Accounts…</h1>

			<ButtonRow>
				<SolidButton>Payment Methods</SolidButton>
				<SolidButton>Sign Up</SolidButton>
			</ButtonRow>
		</Card>
	</div>

	<div>
		<Card>
			<h1>Forward... into the future</h1>
			<h2>Tailored for the Middle East to build a better world for everyone</h2>

			COUNTRY GRID
		</Card>
	</div>

	<Card>
		<div>
			<h1>Kickstart your future and plan for tomorrow</h1>
			<ButtonRow>
				<SolidButton>Begin Investing</SolidButton>
				<SolidButton>Download App</SolidButton>
			</ButtonRow>
		</div>
	</Card>
</div>

<style lang="scss">
	.content {
		display: grid;
		gap: 32px;
		padding: 32px;
	}
</style>
