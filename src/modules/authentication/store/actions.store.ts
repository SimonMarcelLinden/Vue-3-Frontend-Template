import { ActionTree }			from 'vuex';
import { Response }				from '@/models/response/interfaces/response.interface.model';

import { AuthenticationService } from '../services/authentication.service';

import { RootState }			from '@/store/root.store';
import { AuthenticationState } 	from './state.store';
import { Token } 				from '../models/token/token.model';

export const actions: ActionTree<AuthenticationState, RootState> = {
	login({ commit }: any, { email, password }: { email: string, password: string }) {
		return new Promise((resolve, reject) => {

			return AuthenticationService.login(email, password)
				.then((response: Token) => {
					commit('setToken', response);
					resolve(response);
				})
				.catch((error: Response<any>) => {
					reject(error);
				});
		});
	},
	logout({ commit }: any) {
		return new Promise((resolve) => {
			AuthenticationService.logout();
			commit('logoutSuccess');
			resolve(undefined);
		});
	},
	// Todo:
	register() {}
};
