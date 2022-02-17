<script lang="ts">
	import NavDrawer from '$lib/components/layout/NavDrawer.svelte';

	import { lang } from '$lib/stores/lang';
	import { getPreference } from '$lib/utils/preferences';
	import { onMount } from 'svelte';

	onMount(() => {
		$lang = getPreference('lang');
	});
</script>

<svelte:head>
	<title>Amam | Crypto</title>
</svelte:head>

<div class={$lang == 'ar' && 'rtl'}>
	<NavDrawer />
	<slot />
</div>

<style lang="scss">
	:global(*) {
		color: white;
		font-family: Cereal, Montserrat, Verdana, Geneva, Tahoma, sans-serif;
	}

	:global(body) {
		margin: 0;
		background: #292638;
	}

	:global(.mobile-only) {
		@media screen and (min-width: 480px) {
			display: none;
		}
	}

	:global(.desktop-only) {
		@media screen and (max-width: 479px) {
			display: none;
		}
	}

	:global(.row) {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.rtl {
		direction: rtl;
	}
</style>
