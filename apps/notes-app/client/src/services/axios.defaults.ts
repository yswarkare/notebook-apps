import axios, { CreateAxiosDefaults } from 'axios';

const config: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_BASE_API_URL,
	withCredentials: true,
	headers: { 'Content-Type': 'application/json' },
};

const axiosInstance = axios.create(config);

const axiosInstance2 = axios.create(config);

axiosInstance.interceptors.request.use(
	(request) => {
		console.log(request);
		// Edit request config
		return request;
	},
	(error) => {
		console.log(error);
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	(response) => {
		console.log(response);
		// Edit response config
		return response;
	},
	(error) => {
		console.log({ error });
		const response = error.response;
		console.log({ url: response?.config?.url });
		if (response?.config?.url === 'api/auth/authenticate-token' && response.status === 401) {
			axiosInstance2
				.post(`${import.meta.env.VITE_BASE_API_URL}/api/auth/refresh`)
				.then((res) => {
					console.log(res);
					history.back();
				})
				.catch((err) => {
					console.log(err);
				});
		}
		return Promise.reject(error);
	}
);

export default axiosInstance;
