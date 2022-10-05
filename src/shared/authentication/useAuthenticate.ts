import { useState } from "react";

export const useAuthenticate = () => {
	const NO_ERROR = { error: false, message: '' };
	const [authenticated, setAuthenticated] = useState(false)
	const [authError, setAuthError] = useState<TAuthError>(NO_ERROR)

	const attemptAuthenticate = (props:{username: string, password: string}) => {
		if (props.username === 'admin' && props.password === 'admin') {
			setAuthenticated(true);
			setAuthError(NO_ERROR);
			return true;
		}
		if (props.username === 'amer' && props.password === 'amer') {
			setAuthenticated(false);
			setAuthError({
				error: true,
				message: 'You are not welcome here (or some other error)'
			});
			return false;
		}
		setAuthenticated(false);
		setAuthError({
			error: true,
			message: 'Username or password incorrect'
		})
		return false;
	}

	const isAuthenticated = () => {
		return authenticated;
	}

	const deauthenticate = () => {
		setAuthenticated(false);
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