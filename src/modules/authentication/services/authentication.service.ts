import { Response }	from '@/models/response/interfaces/response.interface.model';
import { User }		from '@/models/user/user.model';
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
function login(email: string, password: string): Promise<User> {

	return axios.post(`${config.apiUrl}/auth/login`, { email, password })
		.then(handleResponse)
		.then((response: Response<User>) => {

			const user: User = new User(response.data);
			localStorage.setItem('user', JSON.stringify(user));

			if (user.token) {
				axios.defaults.headers.common['Authorization'] = "Bearer " + user.token;
			}

			return user;
		})
}

/**
 * @description removes the user from the state.
 *
 * @author Simon Marcel Linden
 * @version 1.0
 */
function logout(): void {
	localStorage.removeItem('user');
	delete axios.defaults.headers.common.Authorization;
}

function handleResponse(response: any) {
	return response.data;
}
