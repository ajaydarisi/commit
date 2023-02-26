import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL_NODE } from "../config";
const client = axios.create({ baseURL: BASE_URL_NODE });
const defaultAccessToken = null;
export const request = async ({ ...options }: AxiosRequestConfig<any>) => {
    // const accessToken = defaultAccessToken || getAccessToken();
    // client.defaults.headers.common.authorization = `Bearer ${accessToken}`;
    const onSuccess = (response: AxiosResponse<any, any>) => {
        if (typeof window !== "undefined") return response;
        return Promise.resolve({
            data: response.data,
        });
    };
    const onError = (error: any) => {
        if (error?.response?.status === 500) {
            if (typeof window !== "undefined") {
                // Client-Side
                //TODO: redirect the user to the login-page
                // window.location.href = "/login";
            } else {
                //Server-Side
                //TODO: redirect the user to the login page
            }
        }
        return Promise.reject(error);
    };
    try {
        const response = await client(options);
        return onSuccess(response);
    } catch (error) {
        return onError(error);
    }
};
