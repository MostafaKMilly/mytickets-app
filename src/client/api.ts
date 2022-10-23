import axios from "axios"
import { TDeleteRquest, TGetRequest, TPostRequst, TPutRequest } from "../shared/types";

const instance = axios.create({
    baseURL: "https://mytickets-cms.herokuapp.com/api/",
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


/**
 * 
 * @param {TGetRequest} requestConfig - get request config
 * @returns Promise
 */
const get = <T, R>({ url, ...config }: TGetRequest<T, R>): Promise<T> => {
    return instance.get(url, config);
}

/**
 * 
 * @param {TPostRequst} requestConfig - post request config
 * @returns Promise
 */
const post = <T, R>({ url, data, ...config }: TPostRequst<T, R>): Promise<T> => {
    return instance.post(url, data, config);
}

/**
 * 
 * @param {TPutRequest} requestConfig - put request config
 * @returns Promise
 */
const put = <T, R>({ url, data, ...config }: TPutRequest<T, R>): Promise<T> => {
    return instance.put(url, data, config)
}

/**
 * 
 * @param {TDeleteRquest} requestConfig - delete request config
 * @returns Promise
 */
const remove = <T, R>({ url, params }: TDeleteRquest): Promise<T> => {
    return instance.delete(url, { params })
}


const API = {
    get,
    post,
    put,
    remove
}

export default API