export type Task = {
    id: number;
    type: "task" | "bug" | "perfomance";
    title: string;
    slug: string;
    assosiatedProject: string;
    creator: {
        name: string;
        avatar: string;
    };
}