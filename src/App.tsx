import React from "react";
import { RouterProvider } from "react-router-dom";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { router } from "./routes/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <ToastContainer limit={3} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
