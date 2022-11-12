import React, { useState } from "react";
import { Box, Toolbar } from "@mui/material";
import { Outlet, useNavigation } from "react-router-dom";
import { AppBar, AppDrawer } from "../shared/components";
import { ProjectsContainer } from "./components";
import { Breadcrumbs } from "../shared/components/Breadcrumbs";

export const ProjectsLayout = () => {
  const { state } = useNavigation();
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };

  return (
    <Box display="flex">
      <AppBar toggleDrawer={toggleDrawer} drawer={drawer} />
      <AppDrawer open={drawer} toggleDrawer={toggleDrawer} />
      <ProjectsContainer open={drawer} state={state}>
        <Toolbar />
        <Breadcrumbs />
        <Outlet />
      </ProjectsContainer>
    </Box>
  );
};
