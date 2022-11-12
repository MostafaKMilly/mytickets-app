import React from "react";
import { createBrowserRouter, Link as RouterLink } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { Link, Typography } from "@mui/material";
import { DashboardLayout, ProtectedLayout, ProjectsLayout } from "../layouts";
import { Login } from "../pages/login";
import { Signup } from "../pages/signup";
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
          element: <ProjectsLayout />,
          path: "projects/:projectId/",
          handle: {
            crumb: (data: string) => (
              <Link component={RouterLink} to="/projects/1">
                {data}
              </Link>
            ),
          },
          children: [
            {
              element: <ActiveSprint />,
              index: true,
              handle: {
                crumb: () => <Typography color="#A69D8C">My board</Typography>,
              },
            },
            {
              element: <Backlog />,
              path: "backlog",
              handle: {
                crumb: () => <Typography color="#A69D8C">Backlog</Typography>,
              },
            },
            {
              element: <People />,
              path: "people",
              handle: {
                crumb: () => <Typography color="#A69D8C">People</Typography>,
              },
            },
            {
              element: <Settings />,
              path: "settings",
              handle: {
                crumb: () => <Typography color="#A69D8C">Settings</Typography>,
              },
            },
          ],
        },
      ],
      handle: {
        crumb: () => (
          <Link component={RouterLink} to="/">
            Dashboard
          </Link>
        ),
      },
    },
  ]);
