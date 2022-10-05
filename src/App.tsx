import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Login } from './pages/login';

function App() {
	console.log(process.env.REACT_APP_API_URI)
	console.log('amer');
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Outlet />}>
					<Route index element={<Login />} />

				</Route>
			</Routes>
		</BrowserRouter>
	);
	//   return (
	//     <div>
	//       MY TICKETS APP
	//     </div>
	//   );
}

export default App;
