import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { QueryClient } from "@tanstack/react-query";


export const router = (client: QueryClient) => createBrowserRouter([
  {
    element: <Login />,
    path: "/login",
    action: Login.action,
    loader: Login.loader
  },
  {
    element: <Signup />,
    path: "/signup",
    action: Signup.action,
    loader: Signup.loader
  },
  {
    element: <BaseLayout />,
    path: "/",
    loader: BaseLayout.loader
  },
]);
