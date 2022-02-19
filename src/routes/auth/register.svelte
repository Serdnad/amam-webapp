<script lang="ts">
	import { onMount } from 'svelte';
	import ory from '@ory/client';

	onMount(async () => {
		// const

		// const api = new ory.V0alpha2Api();
		// const res = await api.initializeSelfServiceRegistrationFlowForBrowsers();

		// const factory = ory.V0alpha2ApiFactory({},
		// "https://inspiring-moser-njs5e4je82.projects.oryapis.com/api/kratos/public")
		// const res = await factory.initializeSelfServiceRegistrationFlowForBrowsers()

		// console.log(res);

		// 			'https://inspiring-moser-njs5e4je82.projects.oryapis.com/api/kratos/public/self-service/login/browser'

		const res = await fetch(
			'https://playground.projects.oryapis.com/api/kratos/public/self-service/registration/browser',
			{
				headers: {
					Accept: 'application/json'
				}
			}
		);
		console.log(res);
	});
</script>

<div>
	<h1>Sign Up</h1>
</div>
