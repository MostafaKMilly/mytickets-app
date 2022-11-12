export const tasks: Task = {
    "task-1": {
        id: "task-1",
        title: "Task 1",
        lables: ["Elites Team"],
        type: "task",
        priority: "high"
    },
    "task-2": {
        id: "task-2",
        title: "Task 2",
        lables: ["Elites Team"],
        type: "task",
        priority: "low"
    },
}

export const columns: Column = {
    "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: ["task-1", "task-2"],
    }
}

export const columnsOrder: string[] = ["column-1"]

export type Task = {
    [id: string]: {
        id: string,
        title: string,
        lables?: string[],
        type: "task" | "bug" | "perfomance",
        priority: "high" | "low" | "medium";
    }
}

export type Column = {
    [id: string]: {
        id: string,
        title: string,
        taskIds: string[]
    }
}