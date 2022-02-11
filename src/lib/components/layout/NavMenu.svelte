<script>
	import Sidebar from '../common/Sidebar.svelte';
	import NavMenuButton from './NavMenuButton.svelte';
</script>

<Sidebar>
	<h1>Amam</h1>

	<div class="button-col">
		<NavMenuButton label="Dashboard" route="/dashboard" img="/icons/dashboard.png" />
		<NavMenuButton label="Trade" route="/trade" img="/icons/chart.png" />
		<NavMenuButton label="Pay" route="/pay" img="/icons/circle.png" />
		<NavMenuButton label="My Assets" route="/assets" img="/icons/chart.png" />
		<NavMenuButton label="Learn" route="/learn" img="/icons/dashboard.png" />
	</div>
</Sidebar>
