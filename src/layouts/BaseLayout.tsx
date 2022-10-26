import { Box } from "@mui/material";
import { QueryClient } from "@tanstack/react-query";
import React from "react";
import { Outlet, redirect, useNavigation } from "react-router-dom";
import API from "../client/api";
import { AppBar, Container } from "../shared/components";

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

  return (
    <Box>
      <AppBar />
      <Container sx={{ opacity: state === "loading" ? 0.5 : 1, mt: 1 }}>
        <Outlet />
      </Container>
    </Box>
  );
};

BaseLayout.loader = loader;
