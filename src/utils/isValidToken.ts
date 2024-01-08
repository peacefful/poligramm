import { storage } from "./storage";

export const checkTokenExpiration = () => {
	const token: string | null = storage.getData('token');

	if (token) {
		const base64Url = token.split('.')[1];
		const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
		const decodedToken = JSON.parse(atob(base64));

		if (decodedToken && decodedToken.exp * 1000 < Date.now()) {
			localStorage.clear()
		}
	}
};