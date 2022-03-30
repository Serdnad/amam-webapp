<script>
	import { lang } from '$lib/stores/lang';
	import { translate } from '$lib/translations';
	import { setPreference } from '$lib/utils/preferences';
	import SolidButton from '../common/SolidButton.svelte';
	import Spacer from '../common/Spacer.svelte';
	import NavDrawerButton from '../layout/NavDrawerButton.svelte';

	$: t = translate($lang);

	function toggleLanguage() {
		$lang = $lang == 'en' ? 'ar' : 'en';
		setPreference('lang', $lang);
	}
</script>

<header>
	<div class="content">
		<div class="mobile-only row">
			<NavDrawerButton />

			<a href="/" target="_self">
				<div class="row">
					<!-- <img src="/icons/amam.png" />
					<Spacer width="16px" /> -->
					<h2>{t('common.amam')}</h2>
				</div>
			</a>
		</div>

		<div class="desktop-only expanded-links">
			<div class="row expanded2 links">
				<a href="/" target="_self">
					<div class="row">
						<img src="/icons/amam.png" />
						<Spacer width="16px" />
						<h2>{t('common.amam')}</h2>
					</div>
				</a>

				<!-- <a href="/market" target="_self">{t('nav.Market')}</a> -->
				<a href="/learn" target="_self">{t('nav.Learn')}</a>
				<a href="/company" target="_self">{t('nav.Company')}</a>
				<a href="/help" target="_self">{t('nav.Help')}</a>
			</div>
		</div>

		<div class="expanded" />

		<div style="direction: ltr;">
			<SolidButton on:click={toggleLanguage} textOnly={true}>Lang اللغة</SolidButton>
		</div>
	</div>
</header>

<style lang="scss">
	header {
		background: var(--primary-color);

		@media screen and (min-width: 480px) {
			position: sticky;
		}
	}

	.content {
		max-width: 1248px;
		margin: auto;

		display: flex;
		align-items: center;

		padding: 0 32px;
		box-sizing: border-box;

		@media screen and (max-width: 480px) {
			padding: 0 16px;
		}
	}

	.expanded-links {
		display: flex;
		flex: 3;
		// width: 100%;
		align-items: center;
		justify-content: space-between;
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
		font-size: 22px;
	}
</style>
