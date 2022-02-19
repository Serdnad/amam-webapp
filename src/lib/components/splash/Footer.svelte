<script>
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
	import Spacer from '../common/Spacer.svelte';

	import Content from '../layout/Content.svelte';
</script>

<footer>
	<div class="content">
		<div class="row links">
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
			<a href="/terms" class="desktop-only">Terms</a>
		</div>

		<div class="bottom">
			<p>
				Amam W.L.L is a company licensed by The Central Bank of Bahrain by The Central Bank of
				Bahrain. Our headquarters lie in Manama, Bahrain’s capital.
			</p>

			<ul>
				<li><a>About us</a></li>
				<li><a>Blog</a></li>
				<li><a>Employing</a></li>
			</ul>

			<ul>
				<li><a>Cash machines</a></li>
				<li><a>Locations</a></li>
				<li><a>How to use</a></li>
				<li><a>Machines</a></li>
				<li><a>Help Center</a></li>
			</ul>

			<ul>
				<li><a>User Agreement</a></li>
				<li><a>Privacy Policy</a></li>
				<li><a>AML & CML</a></li>
				<li><a>Sharia Compliance</a></li>
			</ul>
		</div>

		<div>
			<h5>Amam W.L.L 2022 All Rights Reserved</h5>
			<div>T F I</div>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background: #384250;
		margin-top: 32px;
	}

	.links {
		justify-content: space-between;

		img {
			height: 24px;
		}

		a {
			text-decoration: none;
			font-weight: 500;
			font-size: medium;
		}
	}

	.content {
		max-width: 1440px;
		margin: auto;

		padding: 32px;
		padding-top: 0;
	}

	.bottom {
		display: grid;
		grid-template-columns: 40% 20% 20%;

		ul {
			list-style: none;
			line-height: 2;
		}
	}
</style>
