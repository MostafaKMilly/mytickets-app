import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Stack, TextField, Box, Button } from "@mui/material";
import { Form } from "react-router-dom";

function LoginForm() {
  const { getFieldProps, touched, errors } = useLoginForm();

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
      <Stack id="loginForm" method="post" component={Form} spacing={5}>
        <TextField
          id="username"
          label="Username"
          error={touched.username && Boolean(errors.username)}
          helperText={touched.username && errors.username}
          {...getFieldProps("username")}
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
        <Button type="submit" form="loginForm">
          Login
        </Button>
        <Button color="secondary">Signup</Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
