import React from "react";
import { Box, Button, IconButton, Typography, Link } from "@mui/material";
import Add from "@mui/icons-material/Add";
import { ProjectCard, TasksList } from "./components";
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
      <Box component={Slider} {...settings} mt={3}>
        {PROJECTS_DATA.slice(0, 6).map((project) => (
          <ProjectCard {...project} key={project.id} />
        ))}
      </Box>
      <Box width="100%" display="flex" justifyContent="end" mt={3} mb={2}>
        <Link
          color="#0065FF"
          variant="body2"
          sx={{
            cursor: "pointer",
          }}
        >
          View all
        </Link>
      </Box>
      <Box>
        <Typography variant="h6">My tasks</Typography>
        <TasksList />
      </Box>
    </Box>
  );
}

Dashboard.loader = loader;

export default Dashboard;
