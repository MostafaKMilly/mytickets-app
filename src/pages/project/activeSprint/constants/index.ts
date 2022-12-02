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
    "task-3": {
        id: "task-3",
        title: "Task 3",
        lables: ["Elites Team"],
        type: "task",
        priority: "low"
    },
    "task-4": {
        id: "task-4",
        title: "Task 4",
        lables: ["Elites Team"],
        type: "task",
        priority: "low"
    },
}

export const columns: Column = {
    "column-1": {
        id: "column-1",
        title: "To Do",
        taskIds: ["task-1"],
    },
    "column-2": {
        id: "column-2",
        title: "In progress",
        taskIds: ["task-3", "task-2"],
    },
    "column-3": {
        id: "column-3",
        title: "Done",
        taskIds: ["task-4"],
    },
}

export const columnsOrder: string[] = ["column-1", "column-2", "column-3"]

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