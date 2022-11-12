import { DropResult } from "@hello-pangea/dnd"
import { columns } from "../constants";

export const useDropHandler = () => {
    return (result: DropResult) => {
        const { destination, source, draggableId } = result;

        if (!destination) {
            return;
        }
        if (destination.droppableId === source.droppableId && source.index === destination.index) {
            return;
        }

    }
}