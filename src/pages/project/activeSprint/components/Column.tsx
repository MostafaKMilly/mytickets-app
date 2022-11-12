import React from "react";
import { Box, Typography } from "@mui/material";
import { Column as ColumnType, Task as TaskType } from "../constants";
import { Task } from "./Task";
import { Droppable } from "@hello-pangea/dnd";

export const Column = ({ column, tasks }: ColumnProps) => {
  return (
    <Box sx={{ background: "#F4F5F7", minWidth: 350, px: 2, py: 1.5 }}>
      <Typography sx={{ mb: 1.5, fontSize: "15px", color: "#462E2E" }}>
        {column.title}
      </Typography>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <Box
            display="flex"
            flexDirection="column"
            rowGap={3}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map((task, index) => (
              <Task task={task} key={task.id} index={index} />
            ))}
            {provided.placeholder}
          </Box>
        )}
      </Droppable>
    </Box>
  );
};

type ColumnProps = {
  column: ColumnType["column"];
  tasks: TaskType["Task"][];
};
