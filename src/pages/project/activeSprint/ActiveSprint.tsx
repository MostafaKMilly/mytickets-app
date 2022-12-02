import React from "react";
import { Box } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";
import { Column, ManageSprintToolbar } from "./components";
import { ColumnsList } from "./components/ColumnsList";
import { columnsOrder, tasks } from "./constants";
import { useDnDManager } from "./hooks";

export const ActiveSprint = () => {
  const { handleDropTask, columns } = useDnDManager();

  return (
    <Box display="flex" flexDirection="column" rowGap={2}>
      <ManageSprintToolbar />
      <DragDropContext onDragEnd={handleDropTask}>
        <ColumnsList>
          {columnsOrder.map((columnId) => {
            const column = columns[columnId];
            const tasksItems = column.taskIds.map((taskId) => tasks[taskId]);
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasksItems}
              ></Column>
            );
          })}
        </ColumnsList>
      </DragDropContext>
    </Box>
  );
};
