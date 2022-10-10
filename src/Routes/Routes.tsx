import {
	createBrowserRouter
} from "react-router-dom";
import App from "../Root";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: 'login',
		element: <Login/>,
	},
	{
		path: 'signup',
		element: <Signup/>,
	},
])

export default router