<script lang="ts">
	export let invertColors = false
	export let textOnly = false
	export let textColor = 'white'
</script>

<button
	on:click
	class="{invertColors ? 'inverted' : ''} {textOnly ? 'text-only' : ''}"
	style={`color: ${textColor}`}><slot /></button
>

<style lang="scss">
	button {
		cursor: pointer;
		transition: all 0.25s;

		border: none;
		border-radius: 12px;

		padding: 16px 28px;
		background: #1a8af0;
		box-shadow: 0 0px 2px 0.5px #11111133;

		color: white;
		font-size: 22px;
		font-weight: 700;

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

		&.text-only {
			background: none;
			box-shadow: none;
		}

		// @media screen and (max-width: 560px) {
		// 	min-width: 220px;
		// }
	}

	:global(.expanded-button) {
		// min-width: 180px;
		width: min(100%, 340px);
	}
</style>
