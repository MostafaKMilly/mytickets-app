import { Task } from "../types/Task.type";

export const TASKS_DATA: Task[] = [
    {
        id: 1,
        type: "task",
        assosiatedProject: "Project 1",
        creator: {
            avatar: "assets/images/Avatar.png",
            name: "Hosney"
        },
        slug: "ticket-1",
        title: "This is ticket"
    },
    {
        id: 2,
        type: "bug",
        assosiatedProject: "Project 1",
        creator: {
            avatar: "assets/images/Avatar.png",
            name: "Hosney"
        },
        slug: "ticket-1",
        title: "This is ticket"
    },
    {
        id: 3,
        type: "perfomance",
        assosiatedProject: "Project 1",
        creator: {
            avatar: "assets/images/Avatar.png",
            name: "Hosney"
        },
        slug: "ticket-1",
        title: "This is ticket"
    },
]