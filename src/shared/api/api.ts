import axios, {InternalAxiosRequestConfig} from 'axios';
import {PROFILE_LOCALSTORAGE_ACCESS_TOKEN} from "shared/const/localstorage";

export const api = axios.create({
    baseURL: __API__,
    withCredentials: true,
    headers: {
        'content-type': 'application/json',
    }
})

api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN)
        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error);
    }
)