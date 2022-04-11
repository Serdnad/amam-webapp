<!-- baseUrl: 'https://app-2c7jxrkhghpo.frontegg.com', clientId: 'f83d5c5a-f286-48de-8c9f-c83bab1e83f4' -->
<script lang="ts">
	import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js';
	import { onMount } from 'svelte';

	let client: Auth0Client;

	onMount(async () => {
		client = await createAuth0Client({
			domain: 'dev-us6kkyfa.us.auth0.com',
			client_id: 'DCwROhnovvs5P5rmRl6B1asjtRdxcRtY'
		});

		console.log(client);
		console.log(await client.isAuthenticated());
	});

	async function attemptLogin() {
		const authorizeUrl = await client.buildAuthorizeUrl({
			redirect_uri: window.location.origin
		});

		console.log(authorizeUrl);
	}
</script>

<button on:click={attemptLogin}>LOG IN</button>

<!-- <script lang="ts">
	import auth0 from 'auth0-js';

	// import { getLock } from '$lib/utils/auth';

	import { onMount } from 'svelte';

	let client: auth0.WebAuth;

	onMount(() => {
		client = new auth0.WebAuth({
			domain: 'dev-us6kkyfa.us.auth0.com',
			clientID: 'AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R',
			scope: 'openid profile email',
			universalLoginPage: false
		});

		client.passwordlessStart(
			{
				phoneNumber: '7862660300',
				send: 'code',
				connection: 'demo-connection'
			},
			console.error
		);

		console.log(client);

		// client.crossOriginAuthentication.login(
		// 	{
		// 		email: 'test@mail.com',
		// 		password: 'testtest'
		// 	},
		// 	(error) => {
		// 		console.error(error);
		// 	}
		// );
		// lock.show();
	});
</script>

<h1>Page for implementing sign up</h1>

<iframe
	src="https://dev-us6kkyfa.us.auth0.com/authorize?
  response_type=token&
  client_id=AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R&
  redirect_uri=http://localhost:3000
"
/>

<button>Sign In</button>
https://dev-us6kkyfa.us.auth0.com/authorize? response_type=token& client_id=AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R&
redirect_uri=http://localhost:3000 -->
