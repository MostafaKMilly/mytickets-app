export type Project = {
    id: number;
    title: string;
    assignees: {
        id: number;
        avatar: string;
    }[];
    status: string;
    tasks: number;
    contributors: number;
}