import { Token }	from '@/models/token/token.model';
import config		from '@/services/_config';
import axios		from 'axios';

export const AuthenticationService = {
	login,
	logout,
};

/**
 * @description triggers a call to the backend api which triggers the login.
 * @param email
 * @param password
 * @return Promise<User>
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
async function login(email: string, password: string): Promise<Token> {

	try {
		const response = handleResponse(await axios.post(`${config.apiUrl}/auth/login`, { email, password }));
		console.log(response)
		const token: Token = new Token(response.data);
		localStorage.setItem('token', JSON.stringify(token));
		if (token.token) {
			axios.defaults.headers.common['Authorization'] = "Bearer " + token.token;
		}
		console.log(token)
    	return token;
	} catch (error: any) {
		throw error;
	}
}

/**
 * @description removes the user from the state.
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
function logout(): void {
	localStorage.removeItem('token');
	delete axios.defaults.headers.common.Authorization;
}

function handleResponse(response: any) {
	return response.data;
}
