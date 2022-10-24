import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";

export const router = createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
    action: Login.action,
  },
  {
    element: <Signup />,
    path: "/signup",
    action: Signup.action
  },
  {
    element: <Nav />,
    path: "/",
  },
]);
