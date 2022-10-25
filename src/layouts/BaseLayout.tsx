import { Box } from "@mui/material";
import React from "react";
import { Outlet, redirect, useNavigation } from "react-router-dom";
import API from "../client/api";
import { AppBar, Container } from "../shared/components";

const loader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/login");
  }

  const user = await API.get("users/me");
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
