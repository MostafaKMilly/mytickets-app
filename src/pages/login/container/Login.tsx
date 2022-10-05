import React from 'react';
// import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';



function Login() {
	// const navigate = useNavigate();
console.log('login');
	const handleLogin =() =>{

		console.log('hello from login');
	}
	const kickUserOut =(errorMessage:string) =>{

		console.log(`bye don't come back because: ${errorMessage}`);
	}
	return (
		<div className='LoginContainer'>
			<div className='Logo' />
			<LoginForm success={handleLogin} failure={kickUserOut}/>
		</div>
	);
}

export default Login;