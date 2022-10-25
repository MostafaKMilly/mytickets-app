import React from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";
const loader = () => {};

function Dashboard() {
  return (
    <Box>
      <Box display="flex" width="100%" justifyContent="space-between">
        <Typography variant="h6">My projects</Typography>
        <Button
          variant="contained"
          color="secondary"
          endIcon={<Add />}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        >
          Create new project
        </Button>
        <IconButton
          color="secondary"
          sx={{
            display: {
              xs: "inline-flex",
              sm: "none",
            },
          }}
        >
          <Add />
        </IconButton>
      </Box>
    </Box>
  );
}

Dashboard.loader = loader;

export default Dashboard;
