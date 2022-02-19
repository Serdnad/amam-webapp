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

		<a href="/">
			<div class="row spaced">
				<img src="/icons/amam.png" />
				<Spacer width="16px" />
				<h2>{t('common.amam', $lang)}</h2>
			</div>
		</a>

		<a href="/market" class="desktop-only">{t('nav.Market', $lang)}</a>
		<a href="/learn" class="desktop-only">{t('nav.Learn', $lang)}</a>
		<a href="/company" class="desktop-only">{t('nav.Company', $lang)}</a>
		<a href="/help" class="desktop-only">Help</a>
	</div>

	<div class="expanded" />

	<SolidButton on:click={toggleLanguage}>Lang اللغة</SolidButton>
</header>

<style lang="scss">
	header {
		max-width: 1440px;
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 32px;

		@media screen and (max-width: 480px) {
			padding: 0 16px;
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
		font-size: medium;
	}
</style>
