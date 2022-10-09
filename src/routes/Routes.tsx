import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Login } from '../pages/login';
import { Signup } from '../pages/signup';

const routes: RouteObject[] = [
    {
        element: <Dashboard />,
        path: "/",
    },
    {
        element: <Login />,
        path: "/login"
    },
    {
        element: <Signup />,
        path: "/signup"
    }
]

export const Rotues = () => {
    return useRoutes(routes)
}

