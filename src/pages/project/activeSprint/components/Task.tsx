import React from "react";
import {
  Paper,
  Typography,
  Box,
  Chip,
  styled,
  experimental_sx as sx,
} from "@mui/material";
import { Task as TaskType } from "../constants";
import { TaskIcon, TaskPriorityIcon } from "../../../../shared/components";
import { Draggable } from "@hello-pangea/dnd";

export const Task = ({ task, index }: TaskProps) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <TaskContainer
          square
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Typography variant="body1" fontWeight={500} fontSize="14px">
            {task.title}
          </Typography>
          <Box display="flex" columnGap={2}>
            {task.lables?.slice(0, 2).map((label, index) => (
              <Chip color="primary" key={index} label={label} size="small" />
            ))}
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Box display="flex" columnGap={1} alignItems="center">
              <TaskIcon type={task.type} width={20} height={20} />
              <TaskPriorityIcon type={task.priority} />
            </Box>
            <Typography color="#6D6262" fontSize="12px">
              {task.id}
            </Typography>
          </Box>
        </TaskContainer>
      )}
    </Draggable>
  );
};

const TaskContainer = styled(Paper)(
  sx({
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.25)",
    py: 2,
    px: 3,
    display: "flex",
    flexDirection: "column",
    rowGap: 2,
  })
);

type TaskProps = {
  task: TaskType["task"];
  index: number;
};
