import {AppDispatch} from "app/providers/StoreProvider";
import {api} from "shared/api/api";
import {AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from "axios";
import {PROFILE_LOCALSTORAGE_ACCESS_TOKEN} from "shared/const/localstorage";
import {refreshToken} from "features/Refresh";

export const setupInterceptors = (store: {dispatch: AppDispatch}) => {
    api.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = localStorage.getItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN)
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${JSON.parse(token)}`
            }
            return config
        },
        (error) => {
            return Promise.reject(error);
        }
    )

    api.interceptors.response.use(
        (response: AxiosResponse) => response,
        async (error: AxiosError) => {
            const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

            if (
                error.response?.status === 401 &&
                !originalRequest._retry &&
                originalRequest.url &&
                !originalRequest.url.includes("/refresh")
            ) {
                originalRequest._retry = true;

                try {
                    await store.dispatch(refreshToken());

                    const token = localStorage.getItem(PROFILE_LOCALSTORAGE_ACCESS_TOKEN);

                    if (token && originalRequest.headers) {
                        originalRequest.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
                    }

                    return api(originalRequest);
                } catch (refreshError) {
                    return Promise.reject(refreshError);
                }
            }
            return Promise.reject(error);
        }
    );
}