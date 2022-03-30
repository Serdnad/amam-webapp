<script>
	import { lang } from '$lib/stores/lang';
	import { t } from '$lib/translations';
	import Spacer from '../common/Spacer.svelte';

	import Content from '../layout/Content.svelte';
</script>

<footer>
	<div class="content">
		<div class="grid">
			<a href="/" target="_self">
				<div class="row spaced">
					<img src="/icons/amam.png" />
					<Spacer width="16px" />
					<h2>{t('common.amam', $lang)}</h2>
				</div>
			</a>

			<div class="mobile-only" />

			<!-- <a href="/market" target="_self" class="header">{t('nav.Market', $lang)}</a> -->
			<a href="/learn" target="_self" class="header">{t('nav.Learn', $lang)}</a>
			<a href="/company" target="_self" class="header">{t('nav.Company', $lang)}</a>
			<a href="/help" target="_self" class="header">Help</a>
			<a href="/terms" target="_self" class="header">Terms</a>

			<div class="left-section">
				<h5>Amam FZC 2022 All Rights Reserved</h5>
				<div class="socials">
					<a href="https:/twitter.com"><img src="/icons/twitter.png" /></a>
					<a href="https:/twitter.com"><img style="padding: 3px;" src="/icons/facebook.png" /></a>
					<a href="https:/twitter.com"><img src="/icons/instagram.png" /></a>
				</div>
			</div>

			<ul>
				<div class="desktop-only">
					<li><a>About us</a></li>
					<li><a>Blog</a></li>
					<li><a>Employing</a></li>
				</div>
			</ul>

			<ul>
				<div class="desktop-only">
					<li><a>Cash Cards</a></li>
					<li><a>Stands</a></li>
					<li><a>Help Center</a></li>
				</div>
			</ul>

			<ul>
				<div class="desktop-only">
					<li><a>User Agreement</a></li>
					<li><a>Privacy Policy</a></li>
					<li><a>AML & CML</a></li>
					<li><a>Sharia Compliance</a></li>
				</div>
			</ul>
		</div>
	</div>
</footer>

<style lang="scss">
	footer {
		background: var(--primary-color);
		// margin-top: 32px;
		padding: 0 32px;
		padding-top: 24px;
	}

	.content {
		max-width: 1248px;
		margin: auto;

		// padding: 32px;
		padding-top: 0;
		box-sizing: border-box;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(6, 1fr);
		gap: 16px;

		@media screen and (max-width: 480px) {
			grid-template-columns: repeat(2, 1fr);
		}

		h2 {
			margin: 0;
		}

		img {
			height: 24px;
		}

		a {
			text-decoration: none;
			align-self: center;
			color: #dddddd;

			&.header {
				font-size: 24px;
				color: white;
			}
		}

		.left-section {
			grid-column-end: span 3;
			padding-right: 32px;

			align-self: flex-end;

			@media screen and (max-width: 480px) {
				grid-column-end: span 2;
			}
		}

		.license-text {
			font-size: 20px;
			line-height: 1.8;
			color: #dddddd;
		}

		ul {
			list-style: none;
			line-height: 2.5;
			padding: 0;
			margin: 0;
		}

		p {
			margin: 0;
		}
	}

	.socials {
		display: flex;
		gap: 32px;
		img {
			// width: 36px;
			transform: scale(1.5);
			box-sizing: border-box;
		}
	}

	.bottom {
		display: grid;
		grid-template-columns: 40% 20% 20%;
	}
</style>
