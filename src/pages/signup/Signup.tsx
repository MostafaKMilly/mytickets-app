import React from "react";
import { Box, Unstable_Grid2 as Grid } from "@mui/material";
import { Logo } from "../../shared/components";
import API from "../../client/api";
import { redirect, ActionFunctionArgs } from "react-router-dom";
import SignupForm from "./components/SignupForm";

export const action = async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const data = {
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
    };
    const user = await API.post("auth/local/register", data)
    if (user) {
        localStorage.setItem("token", user.data.jwt)
        return redirect("/");
    }
};

export const loader = () => {
    const token = localStorage.getItem("token")
    if (token) {
        redirect("/")
    }
};


export const Signup = () => {
    return (
        <Box overflow="hidden" height="100vh">
            <Grid container columnSpacing={2} height="100%">
                <Grid
                    sm={6}
                    sx={{
                        backgroundColor: "#ab31d61c",
                        display: {
                            xs: "none",
                            sm: "flex",
                        },
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="assets/images/signupVector.svg"
                        width="420px"
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
                    <SignupForm />
                </Grid>
            </Grid>
        </Box>
    );
};

Signup.action = action;
Signup.loader = loader;
