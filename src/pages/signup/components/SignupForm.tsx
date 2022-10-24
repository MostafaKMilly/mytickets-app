import React from "react";
import { Stack, TextField, Box, Button } from "@mui/material";
import { Form, useNavigate, useNavigation } from "react-router-dom";
import { useSignupForm } from "../hooks/useSignupForm";
import { LoadingButton } from "@mui/lab";

function SignupForm() {
    const { getFieldProps, touched, errors } = useSignupForm();
    const navigate = useNavigate()
    const { state } = useNavigation()
    return (
        <Box
            my={7}
            px={2}
            width={{
                xs: "100%",
                md: "430px",
            }}
            alignSelf="center"
        >
            <Stack id="signupForm" method="post" component={Form} spacing={5}>
                <TextField
                    id="username"
                    label="Username"
                    error={touched.username && Boolean(errors.username)}
                    helperText={touched.username && errors.username}
                    {...getFieldProps("username")}
                />
                <TextField
                    id="email"
                    label="email"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    {...getFieldProps("email")}
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    {...getFieldProps("password")}
                />
            </Stack>
            <Box mt={8} display="flex" flexDirection={"column"} rowGap={4}>
                <LoadingButton variant="contained" type="submit" form="signupForm"
                    loading={state === "submitting"} loadingIndicator="Saving...">
                    Signup
                </LoadingButton>
                <Button color="secondary" onClick={() => navigate("/login")}>Already have account ? signin</Button>
            </Box>
        </Box>
    );
}

export default SignupForm;
