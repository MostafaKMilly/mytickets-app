import React from "react";
import { Box } from "@mui/material";
import { DragDropContext } from "@hello-pangea/dnd";
import { Column, ManageSprintToolbar } from "./components";
import { ColumnsList } from "./components/ColumnsList";
import { columns, columnsOrder, tasks } from "./constants";

export const ActiveSprint = () => {
  const onDragEnd = (result: any) => {
    console.log("onDragEnd", result);
  };

  return (
    <Box>
      <ManageSprintToolbar />
      <DragDropContext onDragEnd={onDragEnd}>
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
