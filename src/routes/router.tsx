import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { BaseLayout } from "../layouts";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { QueryClient } from "@tanstack/react-query";
import { Dashboard } from "../pages/dashboard";
import { Project } from "../pages/project/Project";

export const router = (client: QueryClient) =>
  createBrowserRouter([
    {
      element: <Login />,
      path: "/login",
      action: Login.action,
      loader: Login.loader,
    },
    {
      element: <Signup />,
      path: "/signup",
      action: Signup.action,
      loader: Signup.loader,
    },
    {
      element: <BaseLayout />,
      path: "/",
      loader: BaseLayout.loader(client),
      children: [
        {
          element: <Dashboard />,
          index: true,
          loader: Dashboard.loader,
        },
        {
          element: <Project />,
          path: "projects/:projectId",
        },
      ],
    },
  ]);
