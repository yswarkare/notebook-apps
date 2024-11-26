import axiosInstance from './axios.defaults';

class AuthService {
	#myHeaders = new Headers();

	constructor() {
		this.#myHeaders.append('Content-Type', 'application/json');
	}

	static authenticateToken() {
		return axiosInstance.post(`api/auth/authenticate-token`, {});
	}

	static verifyToken() {
		return axiosInstance.post(`api/auth/verify-token`, {});
	}

	static signUpAndLogIn(url: string) {
		return function (data: object) {
			return axiosInstance.post(url, { ...data });
		};
	}

	static signUp() {
		return this.signUpAndLogIn(`api/auth/sign-up`);
	}

	static logIn() {
		return this.signUpAndLogIn(`api/auth/log-in`);
	}

	static logOut() {
		return this.signUpAndLogIn(`api/auth/log-out`);
	}

	static async isLoggedIn(): Promise<boolean> {
		try {
			const res = await this.authenticateToken();
			const data = await res.data;
			if (data?.success && typeof data.success === 'boolean') return data.success;
			else return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

export default AuthService;
