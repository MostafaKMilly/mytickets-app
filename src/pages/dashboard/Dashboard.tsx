import React from "react";
import {
  Box,
  Button,
  IconButton,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import Add from "@mui/icons-material/Add";
import { ProjectCard } from "./components";
import { PROJECTS_DATA } from "./constants/Projects";
import { useSliderSettings } from "./hooks/useSliderSettings";
import Slider from "react-slick";

const loader = () => {};

function Dashboard() {
  const settings = useSliderSettings();

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
      <Box component={Slider} {...settings} my={3}>
        {PROJECTS_DATA.slice(0, 6).map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </Box>
    </Box>
  );
}

Dashboard.loader = loader;

export default Dashboard;
