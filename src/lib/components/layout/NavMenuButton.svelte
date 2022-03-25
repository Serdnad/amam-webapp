<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import Spacer from '../common/Spacer.svelte';

	export let img: string;
	export let route: string;
	export let label: string;

	let active: boolean = false;

	onMount(() => {
		active = $page.url.toString().includes(route);
	});
</script>

<button on:click={() => (location.href = route)} class={active ? 'active' : ''}>
	<div>
		<img src={img} />
		<Spacer width="16px" />
		<p>{label}</p>
	</div>
</button>

<style lang="scss">
	button {
		cursor: pointer;
		transition: all 0.25s;

		background: none;
		border: none;
		border-radius: 8px;

		&:hover {
			background: #dddddd33;
		}

		&.active {
			background: #1a8af0;

			&:hover {
				background: #1a8af0;
			}
		}

		width: 100%;
		padding: 0 16px;
		margin-bottom: 12px;
	}

	div {
		display: flex;
		align-items: center;
	}

	img {
		width: 16px;
		height: 16px;
	}

	p {
		font-size: 16px;
		font-weight: 500;
	}
</style>
