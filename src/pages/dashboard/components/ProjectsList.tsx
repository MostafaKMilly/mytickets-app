import { Box } from "@mui/material";
import { PROJECTS_DATA } from "../constants/Projects";
import { useSliderSettings } from "../hooks/useSliderSettings";
import Slider from "react-slick";
import { ProjectCard } from "./ProjectCard";

export const ProjectsList = () => {
  const settings = useSliderSettings();

  return (
    <Box component={Slider} {...settings} mt={3}>
      {PROJECTS_DATA.slice(0, 6).map((project) => (
        <ProjectCard {...project} key={project.id} />
      ))}
    </Box>
  );
};
