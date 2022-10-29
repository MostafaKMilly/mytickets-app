import React, { useEffect } from 'react';
import { Navigate, RouterProvider } from "react-router-dom";
import router from './Routes/Routes';
import { useAuthenticate } from './shared';

function App() {
	useEffect(()=>{
		console.log(router.routes)
	})
	return (
		<RouterProvider  router={router} />
	);
}

export default App;
