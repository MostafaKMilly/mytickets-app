export type TransformResFn<T, R = unknown> = (res: R) => T;

export type TErrorResponse = {
    error: {
        status?: number,
        name?: string
        message?: string,
        details?: Record<string, any>
    },
    data?: any;
}