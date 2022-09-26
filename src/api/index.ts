import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { MapResponseFn } from "../types";

// Axios instance
const instance = axios.create({
    baseURL: "BASE_URL",
    headers: {
        "Content-Type": "application/json"
    }
})

// Request interceptor to pass token from local storage in request headers
instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    const auth = token ? `Bearer ${token}` : '';
    config.headers = {
        ...config.headers,
        authorization: auth
    }
})

/**
 * 
 * @param {TGetRequest} requestConfig - request config
 * @param {MapResponseFn<T, R>} mapResponseFn - callback to change response data
 * @returns Promise
 */
const get = async <T, R = AxiosResponse>(url: string, config?: AxiosRequestConfig,
    mapResponseFn?: MapResponseFn<T, R>): Promise<T> => {
    const res = await instance.get(url, config);
    return await new Promise<T>((resolve) => {
        if (mapResponseFn) {
            resolve(mapResponseFn(res.data));
        } else {
            resolve(res.data);
        }
    });
}

const API = {
    get
}

export default API