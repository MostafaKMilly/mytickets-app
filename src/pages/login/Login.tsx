import React from "react";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "../../shared/components";
import LoginForm from "./components/LoginForm";
import API from "../../client/api";
import { redirect, ActionFunctionArgs } from "react-router-dom";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const data = {
    identifier: formData.get("username"),
    password: formData.get("password"),
  };
  const user = await API.post("auth/local", { data });
  if (user) {
    return redirect("/");
  }
};

export const Login = () => {
  return (
    <Box overflow="hidden" height="100vh">
      <Grid container columnSpacing={2} height="100%">
        <Grid
          sm={6}
          sx={{
            backgroundColor: "#f5bf3324",
            display: {
              xs: "none",
              sm: "flex",
            },
            justifyContent: "center",
          }}
        >
          <img
            src="assets/images/loginVector.svg"
            width="470px"
            alt="Login Vector"
          />
        </Grid>
        <Grid
          xs={12}
          sm={6}
          justifyContent="center"
          display="flex"
          flexDirection={"column"}
        >
          <Logo margin="0 auto" width={60} height={60} />
          <LoginForm />
        </Grid>
      </Grid>
    </Box>
  );
};

Login.action = action;
