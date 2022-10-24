import { AxiosResponse } from "axios";

export type MapResponseFn<T, R = unknown> = (res: R) => T;

export type TGetRequest<T, R> = {
    params?: Record<string, any>,
    transformResponse?: (data: AxiosResponse<R>) => T
}

export type TPostRequst<T, R> = {

    data: Record<string, any>,
    params?: Record<string, any>,
    transformResponse?: (data: AxiosResponse<R>) => T
}

export type TPutRequest<T, R> = TPostRequst<T, R>

export type TDeleteRquest = {
    params?: Record<string, any>
}

export type TErrorResponse = {
    error: {
        status?: number,
        name?: string
        message?: string,
        details?: Record<string, any>
    },
    data?: any;
}