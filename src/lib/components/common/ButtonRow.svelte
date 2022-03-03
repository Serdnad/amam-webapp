<script lang="ts">
	import { onMount } from 'svelte';
	let buttons: HTMLDivElement;

	onMount(() => {
		const nodes = Array.from(buttons.getElementsByTagName('button'));
		nodes.forEach((button) => {
			button.classList.add('expanded-button');
		});
	});
</script>

<div bind:this={buttons}>
	<div class="button-row">
		<slot />
	</div>
</div>

<style lang="scss">
	.button-row {
		display: flex;
		gap: 32px;
	}
</style>
