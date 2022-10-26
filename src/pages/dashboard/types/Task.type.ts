export type Task = {
    id: number;
    type: string;
    slug: string;
    assosiatedProject: string;
    creator: {
        name: string;
        avatar: string;
    };
}