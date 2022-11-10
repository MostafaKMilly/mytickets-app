import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import { AppBar, AppDrawer, Container } from "../shared/components";

export const PorjectsLayout = () => {
  const { state } = useNavigation();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box display="flex">
      <AppBar toggleDrawer={toggleDrawer} drawer={drawer} />
      <AppDrawer open={drawer} />
      <Container
        sx={{
          opacity: state === "loading" ? 0.5 : 1,
          mt: 1,
          flexGrow: 1,
          ml: "-260px",
          ...(drawer && {
            ml: "0px",
            width: `calc(100% - 260px)`,
          }),
        }}
      >
        <Toolbar />
        <Outlet />
      </Container>
    </Box>
  );
};
