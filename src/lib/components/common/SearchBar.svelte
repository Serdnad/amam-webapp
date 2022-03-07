<script lang="ts">
	import { lang } from '$lib/stores/lang';
	import { translate } from '$lib/translations';

	export let expanded = false;

	const t = translate($lang);
</script>

<div class={expanded ? 'expanded' : ''}>
	<input placeholder={t('common.search')} />
	<img src="icons/search.svg" alt="" />
</div>

<style lang="scss">
	div {
		position: relative;
		margin: 0 16px;

		.expanded {
			flex-basis: 1;
			width: 100%;
		}
	}

	input {
		border: none;
		border-radius: 12px;
		background: #292638;
		padding: 8px;
		padding-inline-start: 48px;

		font-size: large;
	}

	img {
		position: absolute;
		// inset-block-start: 12px;
		left: 12px;
		right: 12px;
		top: 12px;

		width: 24px;
		height: 24px;
	}
</style>
