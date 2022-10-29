import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useAuthenticate } from '../../../shared';

function LoginForm(props: any) {
	const auth = useAuthenticate();
	if (auth.isAuthenticated()) {
		props.success();
	} else if (auth.authError.error){
		props.failure(auth.authError.message);
	}

	return (
		<Formik initialValues={{ username: '', password: '' }}
			onSubmit={(values) => { auth.attemptAuthenticate(values); }}
		><Form>

				<Field type='text' name='username'/>
				<Field type='password' name='password' />
				<ErrorMessage name='errorMessage' />
				<button type='submit'>Login</button>
			</Form>
		</Formik>
	);
}

export default LoginForm;