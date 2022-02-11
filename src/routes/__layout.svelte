<script lang="ts">
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

<div class={$lang == 'ar' ? 'rtl' : ''}>
	<slot />
</div>

<style lang="scss">
	:global(*) {
		color: white;
		font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
	}

	:global(body) {
		margin: 0;
		background: #2c2a3a;
	}

	.rtl {
		direction: rtl;
	}
</style>
