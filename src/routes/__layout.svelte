<script lang="ts">
	import NavDrawer from '$lib/components/layout/NavDrawer.svelte'
	import Footer from '$lib/components/splash/Footer.svelte'
	import SimpleFooter from '$lib/components/splash/SimpleFooter.svelte'
	import Header from '$lib/components/splash/Header.svelte'

	import { lang } from '$lib/stores/lang'
	import { getPreference } from '$lib/utils/preferences'
	import { onMount } from 'svelte'

	onMount(() => {
		$lang = getPreference('lang')
	})
</script>

<svelte:head>
	<title>Amam | Crypto</title>
</svelte:head>

<div class={$lang == 'ar' && 'rtl'}>
	<Header />
	<NavDrawer />
	<main>
		<slot />
	</main>
	<!-- <Footer /> -->
	<SimpleFooter />
</div>

<style lang="scss">
	:root {
		--primary-color: #198bf0;
		--off-white: #f2f2f2;
		--light-gray: #e2e2e2;
		--gray: #bfbfbf;
	}

	:global(*) {
		color: white;
		font-family: Changa, Cereal, Montserrat, Verdana, Geneva, Tahoma, sans-serif;
	}

	:global(body) {
		margin: 0;
		// background: #292638;
	}

	:global(.mobile-only) {
		@media screen and (min-width: 480px) {
			display: none !important;
		}
	}

	:global(.desktop-only) {
		@media screen and (max-width: 479px) {
			display: none !important;
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
		align-items: center;
	}

	:global(.center) {
		align-items: center;
		justify-content: center;
	}

	.rtl {
		direction: rtl;
	}

	main {
		min-height: calc(100vh - 92px - 260px);
	}

	:global(h1) {
		font-size: 56px;
		margin-top: 0;

		@media (max-width: 560px) {
			font-size: 44px;
		}
	}

	:global(h2) {
		font-size: 42px;
		line-height: 2;
		margin-top: 0;
	}

	:global(h3) {
		line-height: 2;
		font-size: 30px;
		margin-top: 0;
	}

	:global(.gray) {
		color: #dddddd;
	}

	:global(.dense) {
		margin: 0;
	}
</style>
