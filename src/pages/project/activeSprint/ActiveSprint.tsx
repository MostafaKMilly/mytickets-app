import React from "react";
import { Box } from "@mui/material";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Column, ManageSprintToolbar } from "./components";
import { ColumnsList } from "./components/ColumnsList";
import { columns, columnsOrder, tasks } from "./constants";
import { useDropHandler } from "./hooks";

export const ActiveSprint = () => {
  const dropHandler = useDropHandler();

  return (
    <Box>
      <ManageSprintToolbar />
      <DragDropContext onDragEnd={dropHandler}>
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
