import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { DashboardLayout, ProtectedLayout, PorjectsLayout } from "../layouts";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
import { QueryClient } from "@tanstack/react-query";
import { Dashboard } from "../pages/dashboard";
import { ActiveSprint, Backlog, People, Settings } from "../pages/project";

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
      element: <ProtectedLayout />,
      path: "/",
      loader: ProtectedLayout.loader(client),
      children: [
        {
          element: <DashboardLayout />,
          path: "",
          children: [
            {
              element: <Dashboard />,
              index: true,
              loader: Dashboard.loader,
            },
          ],
        },
        {
          element: <PorjectsLayout />,
          path: "projects/:projectId/",
          children: [
            {
              element: <ActiveSprint />,
              index: true,
            },
            {
              element: <Backlog />,
              path: "backlog",
            },
            {
              element: <People />,
              path: "people",
            },
            {
              element: <Settings />,
              path: "settings",
            },
          ],
        },
      ],
    },
  ]);
