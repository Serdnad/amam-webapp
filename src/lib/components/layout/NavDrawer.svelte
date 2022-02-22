<script lang="ts">
	import { isDrawerOpen } from '$lib/stores/drawer';

	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
	import Spacer from '../common/Spacer.svelte';

	function close() {
		$isDrawerOpen = false;
	}
</script>

<div class="container {$isDrawerOpen ? 'open' : ''}" on:click={close}>
	<div class="panel {$isDrawerOpen ? 'open' : ''}">
		<div class="row">
			<img src="/icons/amam.png" height="32px" />
			<Spacer width="16px" />
			<h2>{t('common.amam', $lang)}</h2>
		</div>

		<ul>
			<li><a href="/market" target="_self">{t('nav.Market', $lang)}</a></li>
			<li><a href="/learn" target="_self">{t('nav.Learn', $lang)}</a></li>
			<li><a href="/company" target="_self">{t('nav.Company', $lang)}</a></li>
		</ul>
	</div>
</div>

<style lang="scss">
	.container {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		z-index: 1000;

		transition: 0.5s all;
		width: 100vw;

		visibility: hidden;

		&.open {
			visibility: visible;
			background: #000000cc;
		}
	}

	.panel {
		position: absolute;
		top: 0;
		bottom: 0;
		inset-block-start: 0;

		overflow: clip;

		transition: 0.5s all;
		width: 0;

		background: #384250;

		&.open {
			width: 70vw;
		}

		.row {
			padding: 32px;
		}

		a {
			color: white;
			text-decoration: none;

			font-size: large;
			font-weight: 500;
		}

		li {
			list-style: none;
			line-height: 4;
		}
	}
</style>
