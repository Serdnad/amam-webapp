<script lang="ts">
	export let invertColors = false;
</script>

<button on:click class={invertColors ? 'inverted' : ''}><slot /></button>

<style lang="scss">
	button {
		cursor: pointer;
		transition: all 0.25s;

		border: none;
		border-radius: 10px;

		padding: 12px 32px;
		background: #1a8af0;
		color: white;
		font-size: 14px;
		font-weight: 700;
		box-shadow: 0 0px 2px 0.5px #11111133;

		&:hover {
			background: #1771c5;
		}

		&.inverted {
			background: white;
			color: #1a8af0;

			&:hover {
				background: #dadbdb;
			}
		}

		// @media screen and (max-width: 560px) {
		// 	min-width: 220px;
		// }
	}
</style>
