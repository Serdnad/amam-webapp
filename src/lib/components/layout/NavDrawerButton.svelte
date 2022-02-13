<script>
	import { isDrawerOpen } from '$lib/stores/drawer';

	function toggleDrawer() {
		$isDrawerOpen = !$isDrawerOpen;
		console.log($isDrawerOpen);
	}
</script>

<img on:click={toggleDrawer} src="/icons/menu.svg" alt="menu" />

<style lang="scss">
	img {
		margin-inline-end: 24px;
		height: 24px;
	}
</style>
