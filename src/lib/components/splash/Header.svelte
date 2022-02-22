<script>
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
	import { setPreference } from '$lib/utils/preferences';
	import SolidButton from '../common/SolidButton.svelte';
	import Spacer from '../common/Spacer.svelte';
	import NavDrawerButton from '../layout/NavDrawerButton.svelte';

	function toggleLanguage() {
		$lang = $lang == 'en' ? 'ar' : 'en';
		setPreference('lang', $lang);
	}
</script>

<header>
	<div class="row expanded2 links">
		<div class="mobile-only">
			<NavDrawerButton />
		</div>

		<a href="/" target="_self">
			<div class="row">
				<img src="/icons/amam.png" />
				<Spacer width="16px" />
				<h2>{t('common.amam', $lang)}</h2>
			</div>
		</a>

		<a href="/market" target="_self">{t('nav.Market', $lang)}</a>
		<a href="/learn" target="_self">{t('nav.Learn', $lang)}</a>
		<a href="/company" target="_self">{t('nav.Company', $lang)}</a>
		<a href="/help" target="_self">Help</a>
	</div>

	<div class="expanded" />

	<SolidButton on:click={toggleLanguage}>Lang اللغة</SolidButton>
</header>

<style lang="scss">
	header {
		max-width: 1248px;
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;

		padding: 0 32px;
		box-sizing: border-box;

		@media screen and (max-width: 480px) {
			padding: 0 16px;
		}
	}

	.row {
		justify-content: center;

		h2 {
			margin: 16px 0;
		}
	}

	.expanded {
		flex: 1;
	}

	.expanded2 {
		flex: 2;
	}

	.links {
		justify-content: space-between;
	}

	.row {
		display: flex;
		align-items: center;
	}

	img {
		height: 24px;
	}

	a {
		text-decoration: none;
		font-weight: 500;
		font-size: 24px;
	}
</style>
