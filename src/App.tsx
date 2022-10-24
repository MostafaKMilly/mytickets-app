import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Rotues } from "./routes/Routes";
import { CssBaseline, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <Router>
        <Rotues />
      </Router>
    </ThemeProvider>
  );
}

export default App;
