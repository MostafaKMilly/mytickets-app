import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthenticate } from '../../shared';
// import { useNavigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';



function Login() {
	// const navigate = useNavigate();
	// console.log('login');
	const auth=useAuthenticate();
	const navigate=useNavigate();

	// useEffect(() => {
	//   console.log(auth.isAuthenticated())
	
	// }, [auth])
	
	const doLogout = () => {

		auth.deauthenticate();
	}
	const doGoHome = () => {
		navigate('/')
	}
	const handleLogin = () => {

		console.log('hello from login');
	}
	const kickUserOut = (errorMessage: string) => {
		console.log(`bye don't come back because: ${errorMessage}`);
	}
	return (
		<div className='LoginContainer'>
			<div className='Logo' />
			<LoginForm success={handleLogin} failure={kickUserOut} />
			<button onClick={doLogout}>logout</button>
			<button onClick={doGoHome}>go home</button>
		</div>
	);
}

export default Login;