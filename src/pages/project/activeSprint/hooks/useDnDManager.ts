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

        const start = columns[source.droppableId]
        const finish = columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn: Column['Column'] = {
                ...start,
                taskIds: newTaskIds,
            }

            setColumns({
                ...columns,
                [newColumn.id]: newColumn
            })
            return
        }
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }
        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        }
        setColumns({
            ...columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        })
    }

    return { handleDropTask, columns }
}