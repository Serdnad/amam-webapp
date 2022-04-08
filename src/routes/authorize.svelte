<script lang="ts">
	import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
	import { onMount } from 'svelte';

	let client: Auth0Client;

	let authUrl: string;

	onMount(async () => {
		client = await createAuth0Client({
			domain: 'dev-us6kkyfa.us.auth0.com',
			client_id: 'DCwROhnovvs5P5rmRl6B1asjtRdxcRtY'
		});

		console.log(client);
		console.log(await client.isAuthenticated());
	});

	async function attemptLogin() {
		authUrl = await client.buildAuthorizeUrl({
			redirect_uri: window.location.origin
		});

		console.log(authUrl);
	}
</script>

<button on:click={attemptLogin}>LOG IN</button>

{#if authUrl}
	<iframe src={authUrl} />
{/if}
