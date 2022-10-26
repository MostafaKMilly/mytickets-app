import { Paper, Box } from "@mui/material";
import { getRandomColor } from "../utils/getRandomColor";
import { Typography, AvatarGroup, Avatar } from "@mui/material";
import { Project } from "../types/Project.types";

export const ProjectCard = ({
  title,
  assignees,
  contributors,
  id,
  status,
  tasks,
}: Project) => {
  return (
    <Paper
      sx={{
        boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
        borderRadius: "0px",
        minWidth: "200px !important",
        position: "relative",
        minHeight: "120px",
      }}
    >
      <Box
        height="100%"
        width="12px"
        sx={{
          position: "absolute",
          background: getRandomColor(),
          boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.25)",
        }}
      />
      <Box ml={3} display="flex" flexDirection="column" rowGap={1} py={1}>
        <Typography variant="body1" fontWeight={500}>
          {title}
        </Typography>
        <AvatarGroup sx={{ justifyContent: "start" }}>
          {assignees.map((assigne) => (
            <Avatar
              alt={`Assigne ${assigne.id}`}
              src={assigne.avatar}
              sx={{ width: "20px", height: "20px" }}
              key={assigne.id}
            />
          ))}
        </AvatarGroup>
        <Box>
          <Typography fontSize={"12px"}>{`Status: ${status}`}</Typography>
          <Typography fontSize={"12px"}>{`Tasks: ${tasks}`}</Typography>
          <Typography
            fontSize={"12px"}
          >{`Contorbuiters : ${contributors}`}</Typography>
        </Box>
      </Box>
    </Paper>
  );
};
