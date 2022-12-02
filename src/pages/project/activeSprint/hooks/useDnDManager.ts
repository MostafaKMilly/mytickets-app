import { useState } from "react"
import { DropResult } from "@hello-pangea/dnd"
import { Column, columns as defaultColumns } from "../constants";

export const useDnDManager = () => {
    const [columns, setColumns] = useState(defaultColumns)

    const handleDropTask = (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && source.index === destination.index) {
            return;
        }

        const column = columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)

        const newColumn: Column['Column'] = {
            ...column,
            taskIds: newTaskIds,
        }

        setColumns({
            ...columns,
            [newColumn.id]: newColumn
        })
    }

    return { handleDropTask, columns }
}