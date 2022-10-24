import React from "react";
import { BrowserRouter as Router, RouterProvider } from "react-router-dom";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import { router } from "./routes/router";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Router>
        <RouterProvider router={router} />
      </Router>
    </ThemeProvider>
  );
}

export default App;
