import { Box, Toolbar } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Outlet, redirect, useLocation, useNavigation } from "react-router-dom";
import API from "../client/api";
import { AppBar, AppDrawer, Container } from "../shared/components";

const userInfoQuery = {
  queryKey: ["UserInfo"],
  queryFn: () => API.get("users/me"),
};

const loader = (client: QueryClient) => async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }
  const user =
    client.getQueryData(userInfoQuery.queryKey) ??
    (await client.fetchQuery(userInfoQuery));
  if (!user) {
    localStorage.clear();
    return redirect("/login");
  }
};

export const BaseLayout = () => {
  const { state } = useNavigation();
  const [drawer, setDrawer] = useState(false);
  const { pathname } = useLocation();
  const [, route] = pathname.split("/");
  const idDrawerOpen = drawer && route === "projects";

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box display="flex">
      <AppBar toggleDrawer={toggleDrawer} drawer={drawer} />
      {route === "projects" && <AppDrawer open={drawer} />}
      <Container
        sx={{
          opacity: state === "loading" ? 0.5 : 1,
          mt: 1,
          flexGrow: 1,
          ...(route === "projects" && {
            ml: "-260px",
          }),
          ...(idDrawerOpen && {
            ml: "0px",
            width: `calc(100% - 260px)`,
          }),
        }}
      >
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
};

BaseLayout.loader = loader;
