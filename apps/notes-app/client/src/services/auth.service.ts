import { ActionFunction } from "react-router-dom";

const baseUrl = 'http://localhost:5000/api';

class AuthService {
	#myHeaders = new Headers();

	constructor() {
		this.#myHeaders.append('Content-Type', 'application/json');
	}

	static authenticateToken() {
		return fetch(`${baseUrl}/auth/authenticate-token`, {
			method: 'POST',
			credentials: 'include',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		});
	}

	static verifyToken() {
		return fetch(`${baseUrl}/auth/verify-token`, {
			method: 'POST',
			credentials: 'include',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({}),
		});
	}

	static signUpAndLogIn(url: string) {
		return function (data: object) {
			return fetch(url, {
				method: 'POST',
				credentials: 'include',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(data),
			});
		};
	}

	static signUp() {
		return this.signUpAndLogIn(`${baseUrl}/user/sign-up`);
	}

	static logIn() {
		return this.signUpAndLogIn(`${baseUrl}/user/log-in`);
	}

	static logOut() {
		return this.signUpAndLogIn(`${baseUrl}/auth/log-out`);
	}

	static async isLoggedIn(): Promise<boolean> {
		try {
			const res = await this.authenticateToken();
			const data = await res.json();
			if (data?.success && typeof data.success === 'boolean') return data.success;
			else return false;
		} catch (error) {
			console.log(error);
			return false;
		}
	}
}

export default AuthService;
