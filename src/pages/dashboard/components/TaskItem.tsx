import React from "react";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { Task } from "../types/Task.type";
import { TaskIcon } from "../../../shared/components";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

export const TaskItem = ({
  id,
  type,
  slug,
  creator,
  title,
  assosiatedProject,
}: Task) => {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="baseline"
      justifyContent="space-between"
    >
      <Box display="flex" columnGap={1.5}>
        <TaskIcon type={type} />
        <Box>
          <Typography variant="body1" fontWeight={500} gutterBottom>
            {title}
          </Typography>
          <Typography color="#c9bca3" fontSize="10px">
            {`${slug}  -  ${assosiatedProject}`}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" columnGap={2}>
        <Avatar
          sx={{
            width: "40px",
            height: "40px",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
          src={creator.avatar}
        />
        <IconButton size="small">
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
