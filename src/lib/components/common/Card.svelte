<script lang="ts">
	export let expand = false;
</script>

<div class={expand ? 'expand' : ''}>
	<slot />
</div>

<style lang="scss">
	div {
		padding: 32px;
		background: #374250;

		border-radius: 20px;

		&.expand {
			height: calc(100% - 64px);
			width: calc(100% - 64px);
		}
	}
</style>
