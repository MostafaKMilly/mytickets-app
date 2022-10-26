import React from "react";
import { Box } from "@mui/material";
import { TASKS_DATA } from "../constants/Tasks";
import { TaskItem } from "./TaskItem";

export const TasksList = () => {
  return (
    <Box mt={3} display="flex" flexDirection="column" rowGap={2}>
      {TASKS_DATA.map((task) => (
        <TaskItem key={task.id} {...task} />
      ))}
    </Box>
  );
};
