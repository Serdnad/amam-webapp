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
		// const user = await client.getUser()
		// console.log('user', user)

		// console.log(await client.getTokenSilently())

		isAuthenticated = await client.isAuthenticated()

		console.log(isAuthenticated)

		// if (!isAuthenticated) {
		// 	authUrl = await client.buildAuthorizeUrl()
		// }

		await client.loginWithRedirect({
			redirect_uri: 'http://localhost:3000/',
		})
		//logged in. you can get the user profile like this:
		const user = await client.getUser()
		console.log(user)
	})

	async function getToken() {
		return await client.getTokenSilently()
	}

	async function test() {
		const token = await getToken()
		console.log(token)
	}
</script>

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
		height: 100vh;
	}
</style>
