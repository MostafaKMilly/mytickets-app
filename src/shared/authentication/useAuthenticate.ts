import { useState } from "react";

export const useAuthenticate = () => {
	const NO_ERROR = { error: false, message: '' };
	const [authError, setAuthError] = useState<TAuthError>(NO_ERROR)

	const attemptAuthenticate = (props: { username: string, password: string }) => {
		if (props.username === 'admin' && props.password === 'admin') {
			localStorage.setItem("ourToken", `user:${props.username}`);
			setAuthError(NO_ERROR);
			return true;
		}

		if (props.username === 'amer' && props.password === 'amer') {
			localStorage.removeItem("ourToken");
			setAuthError({
				error: true,
				message: 'You are not welcome here (or some other error)'
			});
			return false;
		}

		localStorage.removeItem("ourToken");
		setAuthError({
			error: true,
			message: 'Username or password incorrect'
		})
		return false;
	}

	const isAuthenticated = () => {
		const ret=!!localStorage.getItem("ourToken")
		console.log(`auth status is :${ret}`)
		return ret
	}

	const deauthenticate = () => {
		localStorage.removeItem("ourToken");
		setAuthError(NO_ERROR);
	}

	return {
		attemptAuthenticate,
		isAuthenticated,
		deauthenticate,
		authError
	};
}

export type TAuthError = {
	error: boolean,
	message: string,
}