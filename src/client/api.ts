import axios, { AxiosError } from "axios"
import { toast } from "react-toastify";
import { TDeleteRquest, TErrorResponse, TGetRequest, TPostRequst, TPutRequest } from "../shared/types";

const instance = axios.create({
    baseURL: "https://mytickets.herokuapp.com/api/",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        "accept": "application/json"
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
    return config
})

// response interceptor to catch all errors
instance.interceptors.response.use(function (response) {
    return response;
}, function ({ response }: AxiosError<TErrorResponse>) {
    toast(response?.data?.error?.message, { type: "error", position: toast.POSITION.TOP_CENTER })
});

/**
 * @param string url - endpoint url
 * @param {TGetRequest} requestConfig - get request config
 * @returns Promise
 */
const get = <T, R>(url: string, config?: TGetRequest<T, R>): Promise<T> => {
    return instance.get(url, config);
}

/**
 * @param string url - endpoint url
 * @param {TPostRequst} requestConfig - post request config
 * @returns Promise
 */
const post = <T, R>(url: string, { data, ...config }: TPostRequst<T, R>): Promise<T> => {
    return instance.post(url, data, config);
}

/**
 * @param string url - endpoint url
 * @param {TPutRequest} requestConfig - put request config
 * @returns Promise
 */
const put = <T, R>(url: string, { data, ...config }: TPutRequest<T, R>): Promise<T> => {
    return instance.put(url, data, config)
}

/**
 * @param string url - endpoint url
 * @param {TDeleteRquest} requestConfig - delete request config
 * @returns Promise
 */
const remove = <T, R>(url: string, config?: TDeleteRquest): Promise<T> => {
    return instance.delete(url, config)
}


const API = {
    get,
    post,
    put,
    remove
}

export default API