import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";

function ManageSprintToolbar() {
  return (
    <Box
      width="100%"
      sx={{
        background: (theme) => theme.palette.secondary.light,
        px: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography fontWeight={600}>Manage Active Sprint</Typography>
      <IconButton>
        <SettingsIcon color="inherit" />
      </IconButton>
    </Box>
  );
}

export default ManageSprintToolbar;
