import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults = {
  baseURL: import.meta.env.VITE_BASE_API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
}

const axiosInstance = axios.create(config)

axiosInstance.interceptors.request.use(request => {
    console.log(request);
    // Edit request config
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
    console.log(response);
    // Edit response config
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default axiosInstance