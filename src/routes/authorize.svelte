<script lang="ts">
	import createAuth0Client, { Auth0Client } from '@auth0/auth0-spa-js'
	import { onMount } from 'svelte'

	let client: Auth0Client

	let isAuthenticated = false
	let authUrl: string

	onMount(async () => {
		client = await createAuth0Client({
			domain: 'www.auth.amamcrypto.com',
			client_id: 'DCwROhnovvs5P5rmRl6B1asjtRdxcRtY',
			redirect_uri: window.location.origin,
		})

		console.log(client)
		isAuthenticated = await client.isAuthenticated()

		console.log(isAuthenticated)
	})

	async function attemptLogin() {
		client.loginWithPopup()
		// authUrl = await client.buildAuthorizeUrl({
		// 	// redirect_uri: window.location.origin
		// });

		console.log(authUrl)

		// client.
	}

	async function getToken() {
		return await client.getTokenSilently()
	}

	async function test() {
		const token = await getToken()
		console.log(token)
	}
</script>

<button on:click={attemptLogin}>LOG IN</button>

{#if authUrl}
	<iframe src={authUrl} />
{/if}

{#if isAuthenticated}
	<h1>Yo're sgned in!</h1>

	<button on:click={test}>SUBMIT A THING</button>
{/if}

<style lang="scss">
	iframe {
		border: none;
		width: 100%;
	}
</style>
