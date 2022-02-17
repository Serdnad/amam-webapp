<script>
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
	import { setPreference } from '$lib/utils/preferences';

	import SolidButton from '../common/SolidButton.svelte';
	import Spacer from '../common/Spacer.svelte';

	function toggleLanguage() {
		$lang = $lang == 'en' ? 'ar' : 'en';
		setPreference('lang', $lang);
	}
</script>

<footer>
	<div class="container">
		<div class="row expanded2 links">
			<div class="row spaced">
				<img src="/icons/amam.png" />
				<Spacer width="16px" />
				<h2>{t('common.amam', $lang)}</h2>
			</div>

			<a href="/" class="desktop-only">{t('nav.Market', $lang)}</a>
			<a href="/" class="desktop-only">{t('nav.Learn', $lang)}</a>
			<a href="/" class="desktop-only">{t('nav.Company', $lang)}</a>
		</div>

		<div class="expanded" />

		<SolidButton on:click={toggleLanguage}>Lang ةغللا</SolidButton>
	</div>
</footer>

<style lang="scss">
	footer {
		background: #374250;

		padding: 16px;
	}

	.container {
		max-width: 1080px;
		margin: auto;

		display: flex;
		align-items: center;
		justify-content: space-between;
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
