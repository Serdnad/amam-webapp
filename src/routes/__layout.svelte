<script lang="ts">
	import NavDrawer from '$lib/components/layout/NavDrawer.svelte';
	import Footer from '$lib/components/splash/Footer.svelte';
	import Header from '$lib/components/splash/Header.svelte';

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
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</div>

<style lang="scss">
	:global(*) {
		color: white;
		font-family: Changa, Cereal, Montserrat, Verdana, Geneva, Tahoma, sans-serif;
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

	:global(.col) {
		display: flex;
		flex-direction: column;
	}

	:global(.wrap) {
		flex-wrap: wrap;
	}

	.rtl {
		direction: rtl;
	}

	main {
		max-width: 1248px;
		margin: auto;

		min-height: calc(100vh - 102px - 320px);
	}

	:global(h1) {
		font-size: 56px;
		margin-top: 0;
	}

	:global(h2) {
		font-size: 30px;
		line-height: 2;
		margin-top: 0;
	}

	:global(h3) {
		line-height: 2;
	}

	:global(.gray) {
		color: #cccccc;
	}

	:global(.dense) {
		margin: 0;
	}
</style>
