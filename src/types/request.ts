export type MapResponseFn<T, R = unknown> = (res: R) => T;

export type TGetRequest = {
    url: string;
    params?: Record<string, any>
}