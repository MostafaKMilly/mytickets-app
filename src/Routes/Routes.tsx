import {
	createBrowserRouter, redirect
} from "react-router-dom";
import Backlog from "../pages/backlog/Backlog";
import Home from "../pages/homePage/Home";
import Login from "../pages/login/Login";
import People from "../pages/people/People";
import Project from "../pages/projectPages/Project";
import Settings from "../pages/settingsPage/Settings";
import Signup from "../pages/signup/Signup";
import Sprint from "../pages/sprint/Sprint";

const loaderFunction =  () => {
  if (!localStorage.getItem('ourToken')) {
	console.log('redirecting')
    return redirect("/login");
  }
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,

	},
	{
		path: 'login',
		element: <Login />,
	},
	{
		path: 'signup',
		element: <Signup />,
	},
	{
		path: '/project/:projectId',
		element: <Project />,
		children: [
			{
				path: 'sprint',
				element: <Sprint />,
			},
			{
				path: 'backlog',
				element: <Backlog />,
			},
			{
				path: 'people',
				element: <People />,
			},
			{
				path: 'settings',
				element: <Settings />,
			},
		]
	}
].map((item) => {
	if (!['login', 'signup'].includes(item.path)){
		console.log(item);
		return {
			...item, loader: loaderFunction
		}}
	return item;
}));

export default router