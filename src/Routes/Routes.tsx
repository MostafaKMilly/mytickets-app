import {
	createBrowserRouter
} from "react-router-dom";
import Backlog from "../pages/backlog/Backlog";
import Home from "../pages/homePage/Home";
import Login from "../pages/login/Login";
import People from "../pages/people/People";
import Project from "../pages/projectPages/Project";
import Settings from "../pages/settingsPage/Settings";
import Signup from "../pages/signup/Signup";
import Sprint from "../pages/sprint/Sprint";

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home/>,
	},
	{
		path: 'login',
		element: <Login/>,
	},
	{
		path: 'signup',
		element: <Signup/>,
	},
	{
		path: '/project/:projectId',
		element: <Project/>,
		children:[
			{
				path: 'sprint',
				element: <Sprint/>,
			},
			{
				path: 'backlog',
				element: <Backlog/>,
			},
			{
				path: 'people',
				element: <People/>,
			},
			{
				path: 'settings',
				element: <Settings/>,
			},
		]
	}
])

export default router