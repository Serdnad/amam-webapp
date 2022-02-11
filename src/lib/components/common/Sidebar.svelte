<script lang="ts">
	// TODO: js media query
	let expanded: boolean = false;
</script>

<div class="container">
	<slot />
</div>

<style lang="scss">
	.container {
		background: #292536;
		min-height: calc(100vh - 64px);

		max-width: 256px;
		padding: 32px;

		// TODO: Mobile
		@media (max-width: 560px) {
			position: absolute;
			top: 0;
			left: 0;
			width: 100vw;
			height: 100vh;

			max-width: unset;
		}
	}
</style>
