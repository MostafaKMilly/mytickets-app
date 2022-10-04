import { AxiosResponse } from "axios";

export type MapResponseFn<T, R = unknown> = (res: R) => T;

export type TGetRequest<T, R> = {
    url: string,
    params?: Record<string, any>,
    transformResponse?: (data: AxiosResponse<R>) => T
}

export type TPostRequst<T, R> = {
    url: string,
    data: Record<string, any>,
    params?: Record<string, any>,
    transformResponse?: (data: AxiosResponse<R>) => T
}

export type TPutRequest<T, R> = TPostRequst<T, R>

export type TDeleteRquest = {
    url: string,
    params?: Record<string, any>
}