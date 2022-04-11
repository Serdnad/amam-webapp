// import auth0, { WebAuth } from 'auth0-js';
// import Auth0Lock from 'auth0-lock';

// let webAuth: WebAuth;

// export function initAuth0() {
// 	webAuth = new auth0.WebAuth({
// 		domain: 'dev-us6kkyfa.us.auth0.com',
// 		clientID: 'AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R',
// 		scope: 'openid profile email'
// 	});
// }

// export function login() {
// 	webAuth.authorize();
// }

// export function getLock() {
// 	const lock = new Auth0Lock('dev-us6kkyfa.us.auth0.com', 'AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R');

// 	const Auth = (function () {
// 		const wm = new WeakMap();
// 		const privateStore = {};

// 		function Auth() {
// 			wm.set(privateStore, {
// 				appName: 'example'
// 			});
// 		}

// 		Auth.prototype.getProfile = function () {
// 			return wm.get(privateStore).profile;
// 		};

// 		Auth.prototype.authn = function () {
// 			// Listening for the authenticated event
// 			this.lock.on('authenticated', function (authResult) {
// 				// Use the token in authResult to getUserInfo() and save it if necessary
// 				this.getUserInfo(authResult.accessToken, function (error, profile) {
// 					if (error) {
// 						// Handle error
// 						return;
// 					}

// 					//we recommend not storing Access Tokens unless absolutely necessary
// 					wm.set(privateStore, {
// 						accessToken: authResult.accessToken
// 					});

// 					wm.set(privateStore, {
// 						profile: profile
// 					});
// 				});
// 			});
// 		};
// 		return Auth;
// 	})();

// 	console.log(Auth);

// 	return lock;
// }

import Auth0Lock from 'auth0-lock';

export const lock = new Auth0Lock('dev-us6kkyfa.us.auth0.com', 'AV0xDrH0Jo6mUHAATMB2dweR9yhFXD0R');

lock.on('authenticated', (authResult) => {
	console.log('ATUH', authResult);
});
