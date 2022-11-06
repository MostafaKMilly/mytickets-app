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

export type CreateProjectFormTypes = {
    projectName?: string;
    people?: Record<string, any>[];
    description?: string;
}