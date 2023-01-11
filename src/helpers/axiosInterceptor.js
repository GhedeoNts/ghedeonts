import axios from 'axios';
import { requestInterceptor, responseInterceptor } from "./axiosHelperMethods";

let headers = {};
const ApiGithubURL = 'https://api.github.com/users/';

const axiosInstance = axios.create({
    baseURL: ApiGithubURL,
    headers,
});

axiosInstance.interceptors.request(requestInterceptor, responseInterceptor);
axiosInstance.interceptors.response(requestInterceptor, responseInterceptor);

export default axiosInstance;