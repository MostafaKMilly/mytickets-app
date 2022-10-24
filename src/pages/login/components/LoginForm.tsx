import React from "react";
import { useLoginForm } from "../hooks/useLoginForm";
import { Stack, TextField, Box, Button } from "@mui/material";

function LoginForm() {
  const { getFieldProps, touched, errors, handleSubmit } = useLoginForm();

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
      <Stack component="form" onSubmit={handleSubmit} spacing={5}>
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
        <Button>Login</Button>
        <Button color="secondary">Signup</Button>
      </Box>
    </Box>
  );
}

export default LoginForm;
